import { WEBHOOK_SUFFIX } from '@/common/constants'
import { getAPIPath } from '@/common/tools'
import useRuleForm from '@/hooks/Rule/rule/useRuleForm'
import { BridgeType } from '@/types/enum'
import { ConnectorForm, HTTPBridge } from '@/types/rule'
import { WebhookForm } from '@/types/webhook'
import { pick } from 'lodash'
import { useActionSchema } from '../Rule/bridge/useBridgeTypeValue'
import useSchemaForm from '../Schema/useSchemaForm'
import useSchemaRecord from '../Schema/useSchemaRecord'

export default (): {
  createRawWebhookForm: () => Promise<WebhookForm>
  getRuleIdByName: (name: string) => string
  getActionNameByName: (name: string) => string
} => {
  const { getSchemaRefByType: getActionSchemaRefByType } = useActionSchema()
  const getActionTypeRefKey = (type: string) => getActionSchemaRefByType(type)

  const { initRecordByComponents } = useSchemaRecord()
  const { components: httpConnectorComponents, schemaLoadPromise: connectorSchemaLoadPromise } =
    useSchemaForm(
      getAPIPath(`/schemas/connectors`),
      { ref: `#/components/schemas/bridge_http.post_connector` },
      false,
    )
  const { components: httpActionComponents, schemaLoadPromise: actionSchemaLoadPromise } =
    useSchemaForm(
      getAPIPath(`/schemas/actions`),
      { ref: `#/components/schemas/${getActionTypeRefKey(BridgeType.Webhook)}` },
      false,
    )

  const createRawHTTPConnector = () => {
    const ret = initRecordByComponents(httpConnectorComponents.value) as ConnectorForm
    if (ret.headers && typeof ret.headers === 'object') {
      ret.headers = pick(ret.headers, 'content-type')
    }
    return ret
  }
  const createRawHTTPAction = () => {
    return initRecordByComponents(httpActionComponents.value) as HTTPBridge
  }

  const { createRawRuleForm } = useRuleForm()

  const createRawWebhookForm = async (): Promise<WebhookForm> => {
    await Promise.all([connectorSchemaLoadPromise, actionSchemaLoadPromise])
    return {
      action: { ...createRawHTTPAction(), type: BridgeType.Webhook },
      connector: { ...createRawHTTPConnector(), url: 'http://' },
      rule: createRawRuleForm('#'),
      name: '',
    }
  }

  const getRuleIdByName = (name: string) => `${name}${WEBHOOK_SUFFIX}`
  const getActionNameByName = (name: string) => `${name}${WEBHOOK_SUFFIX}`

  return {
    createRawWebhookForm,
    getRuleIdByName,
    getActionNameByName,
  }
}
