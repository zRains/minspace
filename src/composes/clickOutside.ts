import { onBeforeUnmount, type Ref, watch } from 'vue'

/**
 * 点击目标元素外出发事件
 * @param el 目标元素
 * @param tracker 跟踪变量
 * @param callBack 回调
 */
export default function clickOutside(el: Ref<HTMLElement | undefined>, tracker: Ref<boolean>, callBack: () => void) {
  function clickListener(event: MouseEvent) {
    if (event.target !== el.value && !event.composedPath().includes(el.value!) && typeof callBack === 'function') {
      callBack()
    }
  }

  watch(tracker, (isActive) => {
    isActive ? window.addEventListener('click', clickListener) : window.removeEventListener('click', clickListener)
  })

  onBeforeUnmount(() => window.removeEventListener('click', clickListener))
}
