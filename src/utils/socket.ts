import EventCenter, { type VoiderFunc } from './event'
import { SOCKET_URL } from '../minspace.config'

type ClientSocketPayload<T> = {
  event: string
  data?: T extends Record<string, any> ? T & { uid?: number } : never
}

type SocketCb = {
  onOpen: (ws: WebSocket) => void
  onError: (ws: WebSocket) => void
  onClose: (ws: WebSocket) => void
  onMessage: (ws: WebSocket) => void
}

export default class Ws {
  // eslint-disable-next-line no-use-before-define
  static instance: Ws

  /** Websocket连接地址 */
  public url: string

  /** WebSocket子协议 */
  public protocols: string | string[]

  /** WebSocket实例 */
  public ws!: WebSocket

  /** 是否在重连中 */
  public isReconnecting: boolean

  /** 延时重连Id */
  public timerId: any

  /** 是否是用户手动关闭连接 */
  public isCustomClosed: boolean

  /** 待发送消息队列 */
  public pendingMessages: ClientSocketPayload<any>[]

  /** 消息管理中心 */
  public eventCenter: EventCenter

  /** Socket各阶段事件回调 */
  socketCb: Partial<SocketCb>

  constructor(url: string, protocols: string | string[], socketCb: Partial<SocketCb>) {
    this.url = url
    this.protocols = protocols
    this.isReconnecting = false
    this.timerId = null
    this.isCustomClosed = false
    this.pendingMessages = []
    this.eventCenter = new EventCenter()
    this.socketCb = socketCb
    this.createWs()
  }

  private createWs() {
    if ('WebSocket' in window) {
      this.ws = new WebSocket(this.url, this.protocols)
      this.onopen()
      this.onerror()
      this.onclose()
      this.onmessage()
    } else {
      console.error('你的浏览器不支持 WebSocket')
    }
  }

  private onopen() {
    this.ws.onopen = () => {
      console.log('Socket open')

      if (this.socketCb.onOpen) this.socketCb.onOpen(this.ws)

      this.pendingMessages.forEach((message) => {
        this.send(message)
      })
      this.pendingMessages = []
      this.isReconnecting = false
    }
  }

  private onerror() {
    this.ws.onerror = (err) => {
      console.log('Socket error')

      if (this.socketCb.onError) this.socketCb.onError(this.ws)

      this.reconnection()
      this.isReconnecting = false
    }
  }

  onclose() {
    this.ws.onclose = () => {
      console.log('Socket close')

      if (this.socketCb.onClose) this.socketCb.onClose(this.ws)

      // 用户手动关闭的不重连
      if (this.isCustomClosed) return

      this.reconnection()
      this.isReconnecting = false
    }
  }

  async onmessage() {
    this.ws.onmessage = (event) => {
      if (this.socketCb.onMessage) this.socketCb.onMessage(this.ws)

      try {
        const socketResponseData = JSON.parse(event.data) as ClientSocketPayload<any>
        this.eventCenter.emit(socketResponseData.event, socketResponseData.data || {})
      } catch (error) {
        console.log(error, 'error')
      }
    }
  }

  /** 重连 */
  private reconnection() {
    if (this.isReconnecting) return

    this.isReconnecting = true
    this.timerId !== null && clearTimeout(this.timerId)
    this.timerId = setTimeout(() => {
      this.createWs()
    }, 3000)
  }

  public send<T = any>(payload: ClientSocketPayload<T>) {
    if (this.ws.readyState !== 1) {
      this.pendingMessages.push(payload)
      return
    }

    try {
      this.ws.send(JSON.stringify(payload))
    } catch (error) {
      console.error(error)
    }
  }

  public close() {
    /** 清除事件订阅列表 */
    // TODO 待考量：是否需要清除订阅事件
    // this.eventCenter.clean()
    this.isCustomClosed = true
    this.ws.close()
  }

  public start() {
    this.isCustomClosed = false
    this.reconnection()
  }

  public subscribe(name: string, cb: VoiderFunc) {
    this.eventCenter.on(name, cb)
  }

  public subscribeOnce(name: string, cb: VoiderFunc) {
    this.eventCenter.once(name, cb)
  }

  public unsubscribe(name: string, cb: VoiderFunc) {
    this.eventCenter.off(name, cb)
  }

  static getInstance(socketCb?: Partial<SocketCb>) {
    if (!Ws.instance) {
      Ws.instance = new Ws(SOCKET_URL, [], socketCb || {})
    }

    return Ws.instance
  }
}
