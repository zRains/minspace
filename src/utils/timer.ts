// https://stackoverflow.com/a/3969760
export default class Timer {
  public startedAt: number

  public timer: number

  public delay: number

  public callback: () => void

  constructor(delay: number, callback: () => void) {
    this.startedAt = Date.now()
    this.timer = setTimeout(callback, delay)
    this.delay = delay
    this.callback = callback
  }

  pause() {
    this.stop()
    this.delay -= Date.now() - this.startedAt
  }

  resume() {
    this.stop()
    this.startedAt = Date.now()
    this.timer = setTimeout(this.callback, this.delay)
  }

  stop() {
    clearTimeout(this.timer)
  }
}
