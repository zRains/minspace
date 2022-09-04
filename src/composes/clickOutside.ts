import { onMounted, onBeforeUnmount, Ref } from 'vue'

export default function clickOutside(el: Ref<HTMLElement | undefined>, callBack: () => void) {
  function clickListener(event: MouseEvent) {
    if (event.target !== el.value && !event.composedPath().includes(el.value!) && typeof callBack === 'function') {
      callBack()
    }
  }

  onMounted(() => window.addEventListener('click', clickListener))
  onBeforeUnmount(() => window.removeEventListener('click', clickListener))
}
