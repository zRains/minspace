import { h, render, DefineComponent } from 'vue'

/** 防抖 */
export function debounce(fn: () => void, delay = 300) {
  let timer: any

  return function _() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null), delay)
  }
}

/** 节流 */
export function throttle(fn: () => void, delay = 300) {
  let timer: any

  return function _() {
    if (!timer) {
      timer = setTimeout(() => fn.apply(null), delay)
    }
  }
}

/** 获取相对时间 */
export function getRelativeTime(d1: number | string, d2 = Date.now()) {
  d1 = typeof d1 === 'string' ? new Date(d1).getTime() : d1
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

  const elapsed = d1 - d2

  for (const u in units) {
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u === 'second')
      return rtf.format(Math.round(elapsed / units[u as keyof typeof units]), u as Intl.RelativeTimeFormatUnit)
  }

  return 'Unknown time'
}

/** 手动渲染Vue组件实例 */
export function renderInstance<T extends DefineComponent>(Constructor: T, props: Record<string, any>) {
  const container = document.createElement('div')

  Reflect.set(props, 'vanish', () => {
    render(null, container)
  })

  const vnode = h(Constructor, props)

  render(vnode, container)

  document.body.appendChild(container.firstChild!)
}

/**
 * 优化svg并回传data-url，过程参照：https://github.com/convertSvg/svgtodataurl
 * @param originalData 原始数据
 * @returns
 */
export function optimizeSVG(originalData: string) {
  if (!originalData.startsWith('<')) return originalData

  const patchSVG = originalData.replace(/[%"&#{}<>]/g, function replacer(target) {
    switch (target) {
      case '%':
        return '%25'
      case '"':
        return "'"
      case '&':
        return '%26'
      case '#':
        return '%23'
      case '{':
        return '%7B'
      case '} ':
        return '%7D'
      case '<':
        return '%3C'
      case '>':
        return '%3E'

      default:
        return ''
    }
  })

  return `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E${patchSVG}%3C/svg%3E`
}
