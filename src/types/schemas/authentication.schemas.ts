export type PostAuthentication409Code =
  typeof PostAuthentication409Code[keyof typeof PostAuthentication409Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthentication409Code = {
  ALREADY_EXISTS: 'ALREADY_EXISTS',
} as const

export type PostAuthentication409 = {
  code?: PostAuthentication409Code
  message?: string
}

export type PostAuthentication400Code =
  typeof PostAuthentication400Code[keyof typeof PostAuthentication400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthentication400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthentication400 = {
  code?: PostAuthentication400Code
  message?: string
}

export type PostAuthentication200 =
  | AuthnScram
  | AuthnJwtJwks
  | AuthnJwtPublicKey
  | AuthnJwtHmac
  | AuthnHttpPost
  | AuthnHttpGet
  | AuthnRedisSentinel
  | AuthnRedisCluster
  | AuthnRedisSingle
  | AuthnMongoSharded
  | AuthnMongoRs
  | AuthnMongoSingle
  | AuthnPostgresql
  | AuthnMysql
  | AuthnBuiltinDb

export type PostAuthenticationBody =
  | AuthnScram
  | AuthnJwtJwks
  | AuthnJwtPublicKey
  | AuthnJwtHmac
  | AuthnHttpPost
  | AuthnHttpGet
  | AuthnRedisSentinel
  | AuthnRedisCluster
  | AuthnRedisSingle
  | AuthnMongoSharded
  | AuthnMongoRs
  | AuthnMongoSingle
  | AuthnPostgresql
  | AuthnMysql
  | AuthnBuiltinDb

export type GetAuthentication200Item =
  | AuthnScram
  | AuthnJwtJwks
  | AuthnJwtPublicKey
  | AuthnJwtHmac
  | AuthnHttpPost
  | AuthnHttpGet
  | AuthnRedisSentinel
  | AuthnRedisCluster
  | AuthnRedisSingle
  | AuthnMongoSharded
  | AuthnMongoRs
  | AuthnMongoSingle
  | AuthnPostgresql
  | AuthnMysql
  | AuthnBuiltinDb

export type PutAuthenticationId409Code =
  typeof PutAuthenticationId409Code[keyof typeof PutAuthenticationId409Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId409Code = {
  ALREADY_EXISTS: 'ALREADY_EXISTS',
} as const

export type PutAuthenticationId409 = {
  code?: PutAuthenticationId409Code
  message?: string
}

export type PutAuthenticationId404Code =
  typeof PutAuthenticationId404Code[keyof typeof PutAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationId404 = {
  code?: PutAuthenticationId404Code
  message?: string
}

export type PutAuthenticationId400Code =
  typeof PutAuthenticationId400Code[keyof typeof PutAuthenticationId400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationId400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationId400 = {
  code?: PutAuthenticationId400Code
  message?: string
}

export type PutAuthenticationIdBody =
  | AuthnScram
  | AuthnJwtJwks
  | AuthnJwtPublicKey
  | AuthnJwtHmac
  | AuthnHttpPost
  | AuthnHttpGet
  | AuthnRedisSentinel
  | AuthnRedisCluster
  | AuthnRedisSingle
  | AuthnMongoSharded
  | AuthnMongoRs
  | AuthnMongoSingle
  | AuthnPostgresql
  | AuthnMysql
  | AuthnBuiltinDb

export type GetAuthenticationId404Code =
  typeof GetAuthenticationId404Code[keyof typeof GetAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationId404 = {
  code?: GetAuthenticationId404Code
  message?: string
}

export type GetAuthenticationId200 =
  | AuthnScram
  | AuthnJwtJwks
  | AuthnJwtPublicKey
  | AuthnJwtHmac
  | AuthnHttpPost
  | AuthnHttpGet
  | AuthnRedisSentinel
  | AuthnRedisCluster
  | AuthnRedisSingle
  | AuthnMongoSharded
  | AuthnMongoRs
  | AuthnMongoSingle
  | AuthnPostgresql
  | AuthnMysql
  | AuthnBuiltinDb

export type DeleteAuthenticationId404Code =
  typeof DeleteAuthenticationId404Code[keyof typeof DeleteAuthenticationId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteAuthenticationId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type DeleteAuthenticationId404 = {
  code?: DeleteAuthenticationId404Code
  message?: string
}

export type GetAuthenticationIdStatus500Code =
  typeof GetAuthenticationIdStatus500Code[keyof typeof GetAuthenticationIdStatus500Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdStatus500Code = {
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export type GetAuthenticationIdStatus500 = {
  code?: GetAuthenticationIdStatus500Code
  message?: string
}

export type GetAuthenticationIdStatus404Code =
  typeof GetAuthenticationIdStatus404Code[keyof typeof GetAuthenticationIdStatus404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdStatus404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdStatus404 = {
  code?: GetAuthenticationIdStatus404Code
  message?: string
}

export type PostAuthenticationIdUsers404Code =
  typeof PostAuthenticationIdUsers404Code[keyof typeof PostAuthenticationIdUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PostAuthenticationIdUsers404 = {
  code?: PostAuthenticationIdUsers404Code
  message?: string
}

export type PostAuthenticationIdUsers400Code =
  typeof PostAuthenticationIdUsers400Code[keyof typeof PostAuthenticationIdUsers400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdUsers400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthenticationIdUsers400 = {
  code?: PostAuthenticationIdUsers400Code
  message?: string
}

export type GetAuthenticationIdUsers404Code =
  typeof GetAuthenticationIdUsers404Code[keyof typeof GetAuthenticationIdUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdUsers404 = {
  code?: GetAuthenticationIdUsers404Code
  message?: string
}

export type GetAuthenticationIdUsersParams = {
  page?: PublicPageParameter
  limit?: PublicLimitParameter
  like_user_id?: string
  is_superuser?: boolean
}

export type PostAuthenticationIdImportUsers404Code =
  typeof PostAuthenticationIdImportUsers404Code[keyof typeof PostAuthenticationIdImportUsers404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdImportUsers404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PostAuthenticationIdImportUsers404 = {
  code?: PostAuthenticationIdImportUsers404Code
  message?: string
}

export type PostAuthenticationIdImportUsers400Code =
  typeof PostAuthenticationIdImportUsers400Code[keyof typeof PostAuthenticationIdImportUsers400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAuthenticationIdImportUsers400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PostAuthenticationIdImportUsers400 = {
  code?: PostAuthenticationIdImportUsers400Code
  message?: string
}

export type PostAuthenticationIdImportUsersBody = {
  filename?: Blob
}

export type PutAuthenticationIdUsersUserId404Code =
  typeof PutAuthenticationIdUsersUserId404Code[keyof typeof PutAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationIdUsersUserId404 = {
  code?: PutAuthenticationIdUsersUserId404Code
  message?: string
}

export type PutAuthenticationIdUsersUserId400Code =
  typeof PutAuthenticationIdUsersUserId400Code[keyof typeof PutAuthenticationIdUsersUserId400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdUsersUserId400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationIdUsersUserId400 = {
  code?: PutAuthenticationIdUsersUserId400Code
  message?: string
}

export type GetAuthenticationIdUsersUserId404Code =
  typeof GetAuthenticationIdUsersUserId404Code[keyof typeof GetAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type GetAuthenticationIdUsersUserId404 = {
  code?: GetAuthenticationIdUsersUserId404Code
  message?: string
}

export type DeleteAuthenticationIdUsersUserId404Code =
  typeof DeleteAuthenticationIdUsersUserId404Code[keyof typeof DeleteAuthenticationIdUsersUserId404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteAuthenticationIdUsersUserId404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type DeleteAuthenticationIdUsersUserId404 = {
  code?: DeleteAuthenticationIdUsersUserId404Code
  message?: string
}

export type PutAuthenticationIdPositionPosition404Code =
  typeof PutAuthenticationIdPositionPosition404Code[keyof typeof PutAuthenticationIdPositionPosition404Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdPositionPosition404Code = {
  NOT_FOUND: 'NOT_FOUND',
} as const

export type PutAuthenticationIdPositionPosition404 = {
  code?: PutAuthenticationIdPositionPosition404Code
  message?: string
}

export type PutAuthenticationIdPositionPosition400Code =
  typeof PutAuthenticationIdPositionPosition400Code[keyof typeof PutAuthenticationIdPositionPosition400Code]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutAuthenticationIdPositionPosition400Code = {
  BAD_REQUEST: 'BAD_REQUEST',
} as const

export type PutAuthenticationIdPositionPosition400 = {
  code?: PutAuthenticationIdPositionPosition400Code
  message?: string
}

export type PublicPageParameter = number

export type PublicLimitParameter = number

export interface PublicMeta {
  page?: number
  limit?: number
  count?: number
  hasnext: boolean
}

export interface EmqxMongodbTopology {
  max_overflow?: number
  overflow_ttl?: string
  overflow_check_period?: string
  local_threshold_ms?: string
  connect_timeout_ms?: string
  socket_timeout_ms?: string
  server_selection_timeout_ms?: string
  wait_queue_timeout_ms?: string
  heartbeat_frequency_ms?: string
  min_heartbeat_frequency_ms?: string
}

export interface EmqxAuthnSchemaResourceMetrics {
  matched?: number
  success?: number
  failed?: number
  rate?: number
  rate_max?: number
  rate_last5m?: number
}

export type EmqxAuthnSchemaNodeStatusStatus =
  typeof EmqxAuthnSchemaNodeStatusStatus[keyof typeof EmqxAuthnSchemaNodeStatusStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnSchemaNodeStatusStatus = {
  connected: 'connected',
  disconnected: 'disconnected',
  connecting: 'connecting',
} as const

export interface EmqxAuthnSchemaNodeStatus {
  node?: string
  status?: EmqxAuthnSchemaNodeStatusStatus
}

export interface EmqxAuthnSchemaNodeResourceMetrics {
  node?: string
  metrics?: EmqxAuthnSchemaResourceMetrics
}

export interface EmqxAuthnSchemaNodeError {
  node?: string
  error?: string
}

export type EmqxAuthnSchemaMetricsStatusFieldsStatus =
  typeof EmqxAuthnSchemaMetricsStatusFieldsStatus[keyof typeof EmqxAuthnSchemaMetricsStatusFieldsStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EmqxAuthnSchemaMetricsStatusFieldsStatus = {
  connected: 'connected',
  disconnected: 'disconnected',
  connecting: 'connecting',
  inconsistent: 'inconsistent',
} as const

export interface EmqxAuthnSchemaMetrics {
  nomatch?: number
  total?: number
  success?: number
  failed?: number
  rate?: number
  rate_max?: number
  rate_last5m?: number
}

export interface EmqxAuthnSchemaNodeMetrics {
  node?: string
  metrics?: EmqxAuthnSchemaMetrics
}

export interface EmqxAuthnSchemaMetricsStatusFields {
  resource_metrics?: EmqxAuthnSchemaResourceMetrics
  node_resource_metrics?: EmqxAuthnSchemaNodeResourceMetrics
  metrics?: EmqxAuthnSchemaMetrics
  node_metrics?: EmqxAuthnSchemaNodeMetrics
  status?: EmqxAuthnSchemaMetricsStatusFieldsStatus
  node_status?: EmqxAuthnSchemaNodeStatus
  node_error?: EmqxAuthnSchemaNodeError
}

export interface EmqxAuthnApiResponseUser {
  user_id: string
  is_superuser?: boolean
}

export interface EmqxAuthnApiResponseUsers {
  data?: EmqxAuthnApiResponseUser[]
  meta?: PublicMeta
}

export interface EmqxAuthnApiRequestUserUpdate {
  password: string
  is_superuser?: boolean
}

export interface EmqxAuthnApiRequestUserCreate {
  user_id: string
  password: string
  is_superuser?: boolean
}

export type ConnectorHttpRequestHeaders = { [key: string]: any }

export interface ConnectorHttpRequest {
  method?: string
  path?: string
  body?: string
  headers?: ConnectorHttpRequestHeaders
  max_retries?: number
  request_timeout?: string
}

export type BrokerSslClientOptsServerNameIndication = string | 'disable'

export type BrokerSslClientOptsLogLevel =
  typeof BrokerSslClientOptsLogLevel[keyof typeof BrokerSslClientOptsLogLevel]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BrokerSslClientOptsLogLevel = {
  emergency: 'emergency',
  alert: 'alert',
  critical: 'critical',
  error: 'error',
  warning: 'warning',
  notice: 'notice',
  info: 'info',
  debug: 'debug',
  none: 'none',
  all: 'all',
} as const

export type BrokerSslClientOptsVerify =
  typeof BrokerSslClientOptsVerify[keyof typeof BrokerSslClientOptsVerify]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BrokerSslClientOptsVerify = {
  verify_peer: 'verify_peer',
  verify_none: 'verify_none',
} as const

export interface BrokerSslClientOpts {
  cacertfile?: string
  /** @deprecated */
  cacerts?: boolean
  certfile?: string
  keyfile?: string
  verify?: BrokerSslClientOptsVerify
  reuse_sessions?: boolean
  depth?: number
  password?: string
  versions?: string[]
  ciphers?: string[]
  secure_renegotiate?: boolean
  log_level?: BrokerSslClientOptsLogLevel
  hibernate_after?: string
  enable?: boolean
  server_name_indication?: BrokerSslClientOptsServerNameIndication
}

export type AuthnScramAlgorithm = typeof AuthnScramAlgorithm[keyof typeof AuthnScramAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnScramAlgorithm = {
  sha256: 'sha256',
  sha512: 'sha512',
} as const

export type AuthnScramBackend = typeof AuthnScramBackend[keyof typeof AuthnScramBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnScramBackend = {
  built_in_database: 'built_in_database',
} as const

export type AuthnScramMechanism = typeof AuthnScramMechanism[keyof typeof AuthnScramMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnScramMechanism = {
  scram: 'scram',
} as const

export interface AuthnScram {
  mechanism: AuthnScramMechanism
  backend: AuthnScramBackend
  algorithm?: AuthnScramAlgorithm
  iteration_count?: number
  enable?: boolean
}

export type AuthnRedisSingleRedisType =
  typeof AuthnRedisSingleRedisType[keyof typeof AuthnRedisSingleRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSingleRedisType = {
  single: 'single',
} as const

export type AuthnRedisSinglePasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnRedisSingleBackend =
  typeof AuthnRedisSingleBackend[keyof typeof AuthnRedisSingleBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSingleBackend = {
  redis: 'redis',
} as const

export type AuthnRedisSingleMechanism =
  typeof AuthnRedisSingleMechanism[keyof typeof AuthnRedisSingleMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSingleMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnRedisSingle {
  mechanism: AuthnRedisSingleMechanism
  backend: AuthnRedisSingleBackend
  cmd: string
  password_hash_algorithm?: AuthnRedisSinglePasswordHashAlgorithm
  enable?: boolean
  server: string
  redis_type?: AuthnRedisSingleRedisType
  pool_size?: number
  username?: string
  password?: string
  database?: number
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type AuthnRedisSentinelRedisType =
  typeof AuthnRedisSentinelRedisType[keyof typeof AuthnRedisSentinelRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSentinelRedisType = {
  sentinel: 'sentinel',
} as const

export type AuthnRedisSentinelPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnRedisSentinelBackend =
  typeof AuthnRedisSentinelBackend[keyof typeof AuthnRedisSentinelBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSentinelBackend = {
  redis: 'redis',
} as const

export type AuthnRedisSentinelMechanism =
  typeof AuthnRedisSentinelMechanism[keyof typeof AuthnRedisSentinelMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisSentinelMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnRedisSentinel {
  mechanism: AuthnRedisSentinelMechanism
  backend: AuthnRedisSentinelBackend
  cmd: string
  password_hash_algorithm?: AuthnRedisSentinelPasswordHashAlgorithm
  enable?: boolean
  servers: string
  redis_type?: AuthnRedisSentinelRedisType
  sentinel: string
  pool_size?: number
  username?: string
  password?: string
  database?: number
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type AuthnRedisClusterRedisType =
  typeof AuthnRedisClusterRedisType[keyof typeof AuthnRedisClusterRedisType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisClusterRedisType = {
  cluster: 'cluster',
} as const

export type AuthnRedisClusterPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnRedisClusterBackend =
  typeof AuthnRedisClusterBackend[keyof typeof AuthnRedisClusterBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisClusterBackend = {
  redis: 'redis',
} as const

export type AuthnRedisClusterMechanism =
  typeof AuthnRedisClusterMechanism[keyof typeof AuthnRedisClusterMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnRedisClusterMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnRedisCluster {
  mechanism: AuthnRedisClusterMechanism
  backend: AuthnRedisClusterBackend
  cmd: string
  password_hash_algorithm?: AuthnRedisClusterPasswordHashAlgorithm
  enable?: boolean
  servers: string
  redis_type?: AuthnRedisClusterRedisType
  pool_size?: number
  username?: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type AuthnPostgresqlPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnPostgresqlBackend =
  typeof AuthnPostgresqlBackend[keyof typeof AuthnPostgresqlBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnPostgresqlBackend = {
  postgresql: 'postgresql',
} as const

export type AuthnPostgresqlMechanism =
  typeof AuthnPostgresqlMechanism[keyof typeof AuthnPostgresqlMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnPostgresqlMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnPostgresql {
  mechanism: AuthnPostgresqlMechanism
  backend: AuthnPostgresqlBackend
  password_hash_algorithm?: AuthnPostgresqlPasswordHashAlgorithm
  query: string
  enable?: boolean
  server: string
  database: string
  pool_size?: number
  username: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type AuthnMysqlPasswordHashAlgorithm = AuthnHashSimple | AuthnHashPbkdf2 | AuthnHashBcrypt

export type AuthnMysqlBackend = typeof AuthnMysqlBackend[keyof typeof AuthnMysqlBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMysqlBackend = {
  mysql: 'mysql',
} as const

export type AuthnMysqlMechanism = typeof AuthnMysqlMechanism[keyof typeof AuthnMysqlMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMysqlMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnMysql {
  mechanism: AuthnMysqlMechanism
  backend: AuthnMysqlBackend
  password_hash_algorithm?: AuthnMysqlPasswordHashAlgorithm
  query: string
  query_timeout?: string
  enable?: boolean
  server: string
  database: string
  pool_size?: number
  username?: string
  password?: string
  /** @deprecated */
  auto_reconnect?: boolean
  ssl?: BrokerSslClientOpts
}

export type AuthnMongoSingleUseLegacyProtocol =
  typeof AuthnMongoSingleUseLegacyProtocol[keyof typeof AuthnMongoSingleUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoSingleUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type AuthnMongoSingleWMode = typeof AuthnMongoSingleWMode[keyof typeof AuthnMongoSingleWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoSingleWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type AuthnMongoSingleMongoType =
  typeof AuthnMongoSingleMongoType[keyof typeof AuthnMongoSingleMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoSingleMongoType = {
  single: 'single',
} as const

export type AuthnMongoSinglePasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnMongoSingleFilter = { [key: string]: any }

export type AuthnMongoSingleBackend =
  typeof AuthnMongoSingleBackend[keyof typeof AuthnMongoSingleBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoSingleBackend = {
  mongodb: 'mongodb',
} as const

export type AuthnMongoSingleMechanism =
  typeof AuthnMongoSingleMechanism[keyof typeof AuthnMongoSingleMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoSingleMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnMongoSingle {
  mechanism: AuthnMongoSingleMechanism
  backend: AuthnMongoSingleBackend
  collection: string
  filter?: AuthnMongoSingleFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: AuthnMongoSinglePasswordHashAlgorithm
  enable?: boolean
  mongo_type?: AuthnMongoSingleMongoType
  server: string
  w_mode?: AuthnMongoSingleWMode
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: AuthnMongoSingleUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type AuthnMongoShardedUseLegacyProtocol =
  typeof AuthnMongoShardedUseLegacyProtocol[keyof typeof AuthnMongoShardedUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoShardedUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type AuthnMongoShardedWMode =
  typeof AuthnMongoShardedWMode[keyof typeof AuthnMongoShardedWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoShardedWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type AuthnMongoShardedMongoType =
  typeof AuthnMongoShardedMongoType[keyof typeof AuthnMongoShardedMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoShardedMongoType = {
  sharded: 'sharded',
} as const

export type AuthnMongoShardedPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcrypt

export type AuthnMongoShardedFilter = { [key: string]: any }

export type AuthnMongoShardedBackend =
  typeof AuthnMongoShardedBackend[keyof typeof AuthnMongoShardedBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoShardedBackend = {
  mongodb: 'mongodb',
} as const

export type AuthnMongoShardedMechanism =
  typeof AuthnMongoShardedMechanism[keyof typeof AuthnMongoShardedMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoShardedMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnMongoSharded {
  mechanism: AuthnMongoShardedMechanism
  backend: AuthnMongoShardedBackend
  collection: string
  filter?: AuthnMongoShardedFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: AuthnMongoShardedPasswordHashAlgorithm
  enable?: boolean
  mongo_type?: AuthnMongoShardedMongoType
  servers: string
  w_mode?: AuthnMongoShardedWMode
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: AuthnMongoShardedUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type AuthnMongoRsUseLegacyProtocol =
  typeof AuthnMongoRsUseLegacyProtocol[keyof typeof AuthnMongoRsUseLegacyProtocol]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsUseLegacyProtocol = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type AuthnMongoRsRMode = typeof AuthnMongoRsRMode[keyof typeof AuthnMongoRsRMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsRMode = {
  master: 'master',
  slave_ok: 'slave_ok',
} as const

export type AuthnMongoRsWMode = typeof AuthnMongoRsWMode[keyof typeof AuthnMongoRsWMode]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsWMode = {
  unsafe: 'unsafe',
  safe: 'safe',
} as const

export type AuthnMongoRsMongoType = typeof AuthnMongoRsMongoType[keyof typeof AuthnMongoRsMongoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsMongoType = {
  rs: 'rs',
} as const

export type AuthnMongoRsPasswordHashAlgorithm = AuthnHashSimple | AuthnHashPbkdf2 | AuthnHashBcrypt

export type AuthnMongoRsFilter = { [key: string]: any }

export type AuthnMongoRsBackend = typeof AuthnMongoRsBackend[keyof typeof AuthnMongoRsBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsBackend = {
  mongodb: 'mongodb',
} as const

export type AuthnMongoRsMechanism = typeof AuthnMongoRsMechanism[keyof typeof AuthnMongoRsMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnMongoRsMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnMongoRs {
  mechanism: AuthnMongoRsMechanism
  backend: AuthnMongoRsBackend
  collection: string
  filter?: AuthnMongoRsFilter
  password_hash_field?: string
  salt_field?: string
  is_superuser_field?: string
  password_hash_algorithm?: AuthnMongoRsPasswordHashAlgorithm
  enable?: boolean
  mongo_type?: AuthnMongoRsMongoType
  servers: string
  w_mode?: AuthnMongoRsWMode
  r_mode?: AuthnMongoRsRMode
  replica_set_name: string
  srv_record?: boolean
  pool_size?: number
  username?: string
  password?: string
  use_legacy_protocol?: AuthnMongoRsUseLegacyProtocol
  auth_source?: string
  database: string
  topology?: EmqxMongodbTopology
  ssl?: BrokerSslClientOpts
}

export type AuthnJwtPublicKeyFrom = typeof AuthnJwtPublicKeyFrom[keyof typeof AuthnJwtPublicKeyFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtPublicKeyFrom = {
  username: 'username',
  password: 'password',
} as const

export type AuthnJwtPublicKeyMechanism =
  typeof AuthnJwtPublicKeyMechanism[keyof typeof AuthnJwtPublicKeyMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtPublicKeyMechanism = {
  jwt: 'jwt',
} as const

export type AuthnJwtPublicKeyAlgorithm =
  typeof AuthnJwtPublicKeyAlgorithm[keyof typeof AuthnJwtPublicKeyAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtPublicKeyAlgorithm = {
  'public-key': 'public-key',
} as const

export interface AuthnJwtPublicKey {
  algorithm: AuthnJwtPublicKeyAlgorithm
  public_key?: string
  mechanism: AuthnJwtPublicKeyMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: AuthnJwtPublicKeyFrom
  enable?: boolean
}

export type AuthnJwtJwksFrom = typeof AuthnJwtJwksFrom[keyof typeof AuthnJwtJwksFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtJwksFrom = {
  username: 'username',
  password: 'password',
} as const

export type AuthnJwtJwksMechanism = typeof AuthnJwtJwksMechanism[keyof typeof AuthnJwtJwksMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtJwksMechanism = {
  jwt: 'jwt',
} as const

export type AuthnJwtJwksUseJwks = typeof AuthnJwtJwksUseJwks[keyof typeof AuthnJwtJwksUseJwks]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtJwksUseJwks = {
  true: 'true',
} as const

export interface AuthnJwtJwks {
  use_jwks: AuthnJwtJwksUseJwks
  endpoint: string
  pool_size?: number
  refresh_interval?: number
  ssl?: BrokerSslClientOpts
  mechanism: AuthnJwtJwksMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: AuthnJwtJwksFrom
  enable?: boolean
}

export type AuthnJwtHmacFrom = typeof AuthnJwtHmacFrom[keyof typeof AuthnJwtHmacFrom]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtHmacFrom = {
  username: 'username',
  password: 'password',
} as const

export type AuthnJwtHmacMechanism = typeof AuthnJwtHmacMechanism[keyof typeof AuthnJwtHmacMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtHmacMechanism = {
  jwt: 'jwt',
} as const

export type AuthnJwtHmacAlgorithm = typeof AuthnJwtHmacAlgorithm[keyof typeof AuthnJwtHmacAlgorithm]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnJwtHmacAlgorithm = {
  'hmac-based': 'hmac-based',
} as const

export interface AuthnJwtHmac {
  algorithm: AuthnJwtHmacAlgorithm
  secret: string
  secret_base64_encoded?: boolean
  mechanism: AuthnJwtHmacMechanism
  acl_claim_name?: string
  verify_claims?: string[]
  from?: AuthnJwtHmacFrom
  enable?: boolean
}

export type AuthnHttpPostBody = { [key: string]: any }

export type AuthnHttpPostBackend = typeof AuthnHttpPostBackend[keyof typeof AuthnHttpPostBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpPostBackend = {
  http: 'http',
} as const

export type AuthnHttpPostMechanism =
  typeof AuthnHttpPostMechanism[keyof typeof AuthnHttpPostMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpPostMechanism = {
  password_based: 'password_based',
} as const

export type AuthnHttpPostHeaders = { [key: string]: any }

export type AuthnHttpPostMethod = typeof AuthnHttpPostMethod[keyof typeof AuthnHttpPostMethod]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpPostMethod = {
  post: 'post',
} as const

export interface AuthnHttpPost {
  method: AuthnHttpPostMethod
  headers?: AuthnHttpPostHeaders
  mechanism: AuthnHttpPostMechanism
  backend: AuthnHttpPostBackend
  url: string
  body?: AuthnHttpPostBody
  request_timeout?: string
  enable?: boolean
  connect_timeout?: string
  enable_pipelining?: number
  /** @deprecated */
  max_retries?: number
  pool_size?: number
  request?: ConnectorHttpRequest
  /** @deprecated */
  retry_interval?: string
  ssl?: BrokerSslClientOpts
}

export type AuthnHttpGetBody = { [key: string]: any }

export type AuthnHttpGetBackend = typeof AuthnHttpGetBackend[keyof typeof AuthnHttpGetBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpGetBackend = {
  http: 'http',
} as const

export type AuthnHttpGetMechanism = typeof AuthnHttpGetMechanism[keyof typeof AuthnHttpGetMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpGetMechanism = {
  password_based: 'password_based',
} as const

export type AuthnHttpGetHeaders = { [key: string]: any }

export type AuthnHttpGetMethod = typeof AuthnHttpGetMethod[keyof typeof AuthnHttpGetMethod]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHttpGetMethod = {
  get: 'get',
} as const

export interface AuthnHttpGet {
  method: AuthnHttpGetMethod
  headers?: AuthnHttpGetHeaders
  mechanism: AuthnHttpGetMechanism
  backend: AuthnHttpGetBackend
  url: string
  body?: AuthnHttpGetBody
  request_timeout?: string
  enable?: boolean
  connect_timeout?: string
  enable_pipelining?: number
  /** @deprecated */
  max_retries?: number
  pool_size?: number
  request?: ConnectorHttpRequest
  /** @deprecated */
  retry_interval?: string
  ssl?: BrokerSslClientOpts
}

export type AuthnBuiltinDbPasswordHashAlgorithm =
  | AuthnHashSimple
  | AuthnHashPbkdf2
  | AuthnHashBcryptRw

export type AuthnBuiltinDbUserIdType =
  typeof AuthnBuiltinDbUserIdType[keyof typeof AuthnBuiltinDbUserIdType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnBuiltinDbUserIdType = {
  clientid: 'clientid',
  username: 'username',
} as const

export type AuthnBuiltinDbBackend = typeof AuthnBuiltinDbBackend[keyof typeof AuthnBuiltinDbBackend]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnBuiltinDbBackend = {
  built_in_database: 'built_in_database',
} as const

export type AuthnBuiltinDbMechanism =
  typeof AuthnBuiltinDbMechanism[keyof typeof AuthnBuiltinDbMechanism]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnBuiltinDbMechanism = {
  password_based: 'password_based',
} as const

export interface AuthnBuiltinDb {
  mechanism: AuthnBuiltinDbMechanism
  backend: AuthnBuiltinDbBackend
  user_id_type: AuthnBuiltinDbUserIdType
  password_hash_algorithm?: AuthnBuiltinDbPasswordHashAlgorithm
  enable?: boolean
}

export type AuthnHashSimpleSaltPosition =
  typeof AuthnHashSimpleSaltPosition[keyof typeof AuthnHashSimpleSaltPosition]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashSimpleSaltPosition = {
  disable: 'disable',
  prefix: 'prefix',
  suffix: 'suffix',
} as const

export type AuthnHashSimpleName = typeof AuthnHashSimpleName[keyof typeof AuthnHashSimpleName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashSimpleName = {
  plain: 'plain',
  md5: 'md5',
  sha: 'sha',
  sha256: 'sha256',
  sha512: 'sha512',
} as const

export interface AuthnHashSimple {
  name: AuthnHashSimpleName
  salt_position?: AuthnHashSimpleSaltPosition
}

export type AuthnHashPbkdf2MacFun = typeof AuthnHashPbkdf2MacFun[keyof typeof AuthnHashPbkdf2MacFun]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashPbkdf2MacFun = {
  md4: 'md4',
  md5: 'md5',
  ripemd160: 'ripemd160',
  sha: 'sha',
  sha224: 'sha224',
  sha256: 'sha256',
  sha384: 'sha384',
  sha512: 'sha512',
} as const

export type AuthnHashPbkdf2Name = typeof AuthnHashPbkdf2Name[keyof typeof AuthnHashPbkdf2Name]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashPbkdf2Name = {
  pbkdf2: 'pbkdf2',
} as const

export interface AuthnHashPbkdf2 {
  name: AuthnHashPbkdf2Name
  mac_fun: AuthnHashPbkdf2MacFun
  iterations: number
  dk_length?: number
}

export type AuthnHashBcryptRwName = typeof AuthnHashBcryptRwName[keyof typeof AuthnHashBcryptRwName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashBcryptRwName = {
  bcrypt: 'bcrypt',
} as const

export interface AuthnHashBcryptRw {
  name: AuthnHashBcryptRwName
  salt_rounds?: number
}

export type AuthnHashBcryptName = typeof AuthnHashBcryptName[keyof typeof AuthnHashBcryptName]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthnHashBcryptName = {
  bcrypt: 'bcrypt',
} as const

export interface AuthnHashBcrypt {
  name: AuthnHashBcryptName
}