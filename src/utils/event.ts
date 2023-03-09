export type VoiderFunc = (...args: any) => void

export default class EventCenter {
  public eventMap: Map<string, VoiderFunc[]>

  constructor() {
    this.eventMap = new Map()
  }

  /** 添加订阅者 */
  public on(name: string, cb: VoiderFunc) {
    const eventCbArr = this.eventMap.get(name)

    eventCbArr ? eventCbArr.push(cb) : this.eventMap.set(name, [cb])
  }

  /** 添加一次性订阅者 */
  public once(name: string, cb: VoiderFunc) {
    const eventCbArr = this.eventMap.get(name)
    const wrapCbFunc = (...args: any) => {
      this.off(name, cb)
      cb(...args)
    }

    this.on(name, wrapCbFunc)
  }

  /** 订阅者取消订阅 */
  public off(name: string, cb: VoiderFunc) {
    const eventCbArr = this.eventMap.get(name)

    if (eventCbArr) {
      eventCbArr.forEach((eventCb, idx) => {
        if (eventCb === cb) eventCbArr.splice(idx, 1)
      })
    }
  }

  public emit(name: string, data: any) {
    const eventCbArr = this.eventMap.get(name)

    eventCbArr && eventCbArr.forEach((cb) => cb(data))
  }

  public clean() {
    this.eventMap.clear()
  }
}
