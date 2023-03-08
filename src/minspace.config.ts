/** 后台服务根地址 */
export const AXIOS_BASE_URL = import.meta.env.DEV ? 'http://localhost:3000/' : ''

/** Websocket服务地址 */
export const SOCKET_URL = import.meta.env.DEV ? 'ws://localhost:3001' : ''

/** minspace版本号 */
export const MINSPACE_VERSION = '0.1.1'
