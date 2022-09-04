/**
 * 防抖
 */
export function debounce(fn: () => void, delay = 300) {
  let timer = 0
  return function _() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null), delay)
  }
}

/**
 * 节流
 */
export function throttle(fn: () => void, delay = 300) {
  let timer = 0
  return function _() {
    if (!timer) {
      timer = setTimeout(() => fn.apply(null), delay)
    }
  }
}

/**
 * 获取相对时间
 */
export function getRelativeTime(d1: number, d2 = +new Date()) {
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }

  const rtf = new Intl.RelativeTimeFormat('ch', { numeric: 'auto' })

  const elapsed = d1 - d2

  for (const u in units) {
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u === 'second')
      return rtf.format(Math.round(elapsed / units[u as keyof typeof units]), u as Intl.RelativeTimeFormatUnit)
  }

  return 'Unknown time'
}
