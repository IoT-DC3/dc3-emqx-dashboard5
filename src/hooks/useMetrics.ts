import useEchartResize from '@/hooks/useEchartResize'
import { Metrics } from '@/types/common'
import { BarSeriesOption, ECharts, EChartsOption, PieSeriesOption } from 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import * as echarts from 'echarts/lib/echarts'
import moment from 'moment'
import { Ref, ref } from 'vue'
import useI18nTl from './useI18nTl'

export const enum MetricType {
  Green,
  Blue,
  Red,
  Gray,
}

export type TypeMapData = { [key in MetricType]?: { title: string; contains: Array<string> } }

const BLUE = '#469cf7'

export const TYPE_COLOR_MAP: Record<MetricType, string> = {
  [MetricType.Green]: '#7fd7b8',
  [MetricType.Blue]: BLUE,
  [MetricType.Red]: '#fdafa6',
  [MetricType.Gray]: '#bac1cd',
}

const COLOR_NONE = '#c2c8d1'

export interface PieDataItem {
  name: string
  value: number
  type: MetricType
}

type PieConfData = PieSeriesOption['data']
type BarConfData = BarSeriesOption['data']

const useChart = (): {
  ChartEle: Ref<any>
  initChart: () => ECharts
} => {
  const ChartEle = ref()

  const { addListener } = useEchartResize()
  const initChart = () => {
    const chartInstance = echarts.init(ChartEle.value, null, {
      renderer: 'canvas',
      useDirtyRect: false,
    })
    addListener(chartInstance as ECharts)
    return chartInstance
  }

  return {
    ChartEle,
    initChart,
  }
}

export const usePieChart = (): {
  ChartEle: Ref<any>
  updateRingData: (data: Array<PieDataItem>) => void
} => {
  const { ChartEle, initChart } = useChart()
  let chartInstance: undefined | ECharts = undefined

  const getChartOpts = (chartData: PieConfData): EChartsOption => ({
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        top: '-100%',
        radius: ['65%', '94%'],
        center: ['50%', '100%'],
        // adjust the start angle
        startAngle: 180,
        label: { show: false },
        data: chartData,
      },
    ],
  })

  const getTransparentPart = (data: Array<PieDataItem>) => {
    return {
      // make an record to fill the bottom 50%
      value: data.reduce((acc, cur) => acc + cur.value, 0),
      // stop the chart from rendering this piece
      itemStyle: { color: 'none', decal: { symbol: 'none' } },
      label: { show: false },
    }
  }

  const getNoneDataItem = ({ name, value }: PieDataItem) => ({
    name,
    value,
    itemStyle: { color: COLOR_NONE },
  })

  const getPieDataItem = ({ name, value, type }: PieDataItem) => ({
    name,
    value,
    itemStyle: { color: TYPE_COLOR_MAP[type] },
  })

  const getDataForChart = (data: Array<PieDataItem>): PieConfData => {
    if (data.every(({ value }) => !value)) {
      const emptyItem = getTransparentPart(data)
      // for put all part in top
      return [...data.map(getNoneDataItem), ...data.map(() => emptyItem)]
    }
    return [...data.map(getPieDataItem), getTransparentPart(data)]
  }

  const updateRingData = (data: Array<PieDataItem>) => {
    if (!chartInstance) {
      chartInstance = initChart()
    }
    chartInstance?.setOption(getChartOpts(getDataForChart(data)))
  }
  return {
    ChartEle,
    updateRingData,
  }
}

type RateData = {
  x: Array<string>
  y: Array<number>
}
export interface TypeMetricDataItem {
  type: MetricType
  title: string
  count?: number
  detail: Array<{
    value: number
    desc?: string
    label: string
  }>
}
type TextMap = Record<string, { label: string; desc?: string }>
export const useChartDataUtils = (): {
  generatePieData: (metrics: Metrics, typeMapData: TypeMapData) => Array<PieDataItem>
  createEmptyRateData: (length: number) => RateData
  addRateDataItem: (rate: number, rateData: RateData, dataLen: number) => RateData
  generateMetricTypeData: (
    metrics: Metrics,
    typeMapData: TypeMapData,
    textMap: TextMap,
  ) => Array<TypeMetricDataItem>
  generateEmptyMetricTypeData: (typeMapData: TypeMapData) => Array<TypeMetricDataItem>
} => {
  /* TYPE */
  const getMetricItemLabel = (key: string, textMap: TextMap) => textMap[key]?.label || key
  const getMetricItemDesc = (key: string, textMap: TextMap) => textMap[key]?.desc || ''
  const generateMetricTypeData = (metrics: Metrics, typeMapData: TypeMapData, textMap: TextMap) => {
    return Object.entries(typeMapData).reduce((arr: Array<TypeMetricDataItem>, [key, value]) => {
      if (!value) {
        return arr
      }
      const { title, contains: values } = value
      let typeCount = 0
      const typeList = values.reduce((ret, key) => {
        const item = {
          value: metrics[key],
          label: getMetricItemLabel(key, textMap),
          desc: getMetricItemDesc(key, textMap),
        }
        typeCount += metrics[key]
        ret.push(item)
        return ret
      }, [] as Array<{ value: number; label: string; desc?: string }>)
      arr.push({ title, count: typeCount, detail: typeList, type: Number(key) as MetricType })
      return arr
    }, [] as Array<TypeMetricDataItem>)
  }
  const generateEmptyMetricTypeData = (typeMapData: TypeMapData): Array<TypeMetricDataItem> => {
    return Object.entries(typeMapData).reduce((arr: Array<TypeMetricDataItem>, [key, value]) => {
      if (!value) {
        return arr
      }
      const { title } = value
      arr.push({
        title,
        count: undefined,
        detail: [],
        type: Number(key) as MetricType,
      })
      return arr
    }, [] as Array<TypeMetricDataItem>)
  }

  /* PIE */
  const generatePieData = (metrics: Metrics, typeMapData: TypeMapData): Array<PieDataItem> => {
    return Object.entries(typeMapData).reduce((arr: Array<PieDataItem>, [key, dataItem]) => {
      if (!dataItem) {
        return arr
      }
      const { title, contains: values } = dataItem
      const value = values.reduce((sum, item) => sum + (metrics[item] || 0), 0)
      return [...arr, { type: Number(key) as MetricType, name: title, value }]
    }, [] as Array<PieDataItem>)
  }
  /* RATE */
  const createEmptyArray = (length: number) => new Array(length).fill(undefined)
  const createEmptyRateData = (length: number) => ({
    x: createEmptyArray(length),
    y: createEmptyArray(length),
  })
  const getNow = () => moment().format('HH:mm:ss')
  const addRateDataItem = (rate: number, rateData: RateData, dataLen: number) => {
    rateData.x.push(getNow())
    rateData.y.push(rate)
    if (rateData.x.length >= dataLen) {
      rateData.x.shift()
      rateData.y.shift()
    }
    return rateData
  }
  return {
    generatePieData,
    createEmptyRateData,
    addRateDataItem,
    generateMetricTypeData,
    generateEmptyMetricTypeData,
  }
}

const NEWEST_GREEN = '#4af746'
export const useRateChart = (): {
  ChartEle: Ref<any>
  updateBarData: (xData: Array<string>, yData: Array<number>) => void
} => {
  const { tl } = useI18nTl('Base')

  let chartInstance: undefined | ECharts = undefined

  const createTooltip = (xAxis: string, val: number | undefined) => {
    const container = document.createElement('div')
    container.className = 'rate-chart-tooltip'
    if (val === undefined) {
      container.innerHTML = `<p class="no-data">${tl('noData')}</p>`
    } else {
      container.innerHTML = `
        <p class="x-value">${xAxis}</p>
        <div class="tooltip-body">
          <i class="badge"></i>
          <p class="num">${val}</p>
        </div>`
    }
    return container
  }

  const getChartOpts = (xData: Array<string>, yData: Array<number>): EChartsOption => {
    const yDataProcessed: BarConfData = [...yData]
    const lastItem = yData[yData.length - 1]
    yDataProcessed[yDataProcessed.length - 1] = {
      value: lastItem,
      itemStyle: { color: NEWEST_GREEN },
    }
    return {
      color: [BLUE],
      grid: { left: 0, top: 0, right: 0, bottom: 0 },
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: { type: 'none' },
        formatter: (params: any) => {
          if (!params[0]) {
            return ''
          }
          const { axisValue, value } = params[0]
          return createTooltip(axisValue, value)
        },
      },
      xAxis: {
        type: 'category',
        data: xData,
        triggerEvent: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      series: [{ type: 'bar', data: yDataProcessed, label: { show: false }, barWidth: 5 }],
    }
  }

  const { ChartEle, initChart } = useChart()
  const updateBarData = (xData: Array<string>, yData: Array<number>) => {
    if (!chartInstance) {
      chartInstance = initChart()
    }
    chartInstance?.setOption(getChartOpts(xData, yData))
  }

  return {
    ChartEle,
    updateBarData,
  }
}

interface Rate {
  unitKey: string
  current: string
  right1: string
  right2: string
}
export const useBridgeMetrics = (): {
  typeMetricsMap: TypeMapData
  textMap: Record<string, { label: string; desc?: string }>
  rateData: Rate
} => {
  const { t, tl } = useI18nTl('RuleEngine')
  const typeMetricsMap = {
    [MetricType.Green]: { title: tl('success'), contains: ['success', 'matched', 'received'] },
    [MetricType.Blue]: { title: 'Processing', contains: ['queuing'] },
    [MetricType.Red]: { title: tl('sqlFailed'), contains: ['failed', 'inflight', 'late_reply'] },
    [MetricType.Gray]: {
      title: tl('dropped'),
      contains: [
        'dropped',
        'dropped.expired',
        'dropped.other',
        'dropped.queue_full',
        'dropped.resource_not_found',
        'dropped.resource_stopped',
      ],
    },
  }
  const textMap = {
    matched: { label: tl('matched'), desc: tl('bridgeMatchedDesc') },
    success: { label: tl('sentSuccessfully'), desc: tl('sentSuccessfullyDesc') },
    failed: { label: tl('sentFailed'), desc: tl('sentFailedDesc') },
    inflight: { label: tl('sentInflight'), desc: tl('sentInflightDesc') },
    late_reply: { label: tl('lateReply'), desc: tl('lateReplyDesc') },
    dropped: { label: tl('dropped'), desc: tl('droppedDesc') },
    queuing: { label: tl('queuing'), desc: tl('queuingDesc') },
    retried: { label: tl('retried'), desc: tl('retriedDesc') },
    rate: { label: t('Base.rateNow'), desc: t('Base.rateBarDesc') },
    rate_max: { label: t('Base.rateMax') },
    rate_last5m: { label: t('Base.rateLast5M') },
  }

  const rateData = {
    unitKey: 'RuleEngine.rateUnit',
    current: 'rate',
    right1: 'rate_last5m',
    right2: 'rate_max',
  }
  return {
    typeMetricsMap,
    textMap,
    rateData,
  }
}

export const useAuthMetrics = (): {
  typeMetricsMap: TypeMapData
  authnTextMap: Record<string, { label: string; desc?: string }>
  rateData: Rate
} => {
  const { t } = useI18nTl('Auth')
  const typeMetricsMap = {
    [MetricType.Green]: { title: t('Base.total'), contains: ['total'] },
    [MetricType.Blue]: { title: t('Base.success'), contains: ['success'] },
    [MetricType.Red]: { title: t('Base.failed'), contains: ['failed'] },
    [MetricType.Gray]: { title: t('Base.nomatch'), contains: ['nomatch'] },
  }
  const authnTextMap = {
    total: { label: t('Base.total'), desc: t('Base.authnTotalDesc') },
    success: { label: t('Base.success'), desc: t('Base.authnSuccessDesc') },
    failed: { label: t('Base.failed'), desc: t('Base.authnFailedDesc') },
    nomatch: { label: t('Base.nomatch'), desc: t('Base.authnNomatchDesc') },
    rate: { label: t('Base.rateNow'), desc: t('Base.rateBarDesc') },
    rate_max: { label: t('Base.rateMax') },
    rate_last5m: { label: t('Base.rateLast5M') },
  }

  const rateData = {
    unitKey: 'RuleEngine.rateUnit',
    current: 'rate',
    right1: 'rate_last5m',
    right2: 'rate_max',
  }
  return {
    typeMetricsMap,
    authnTextMap,
    rateData,
  }
}