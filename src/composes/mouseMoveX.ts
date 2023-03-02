import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue'

export default function mouseMoveX(el: Ref<HTMLElement | undefined>, mousedownCb: Function = () => {}, mouseupCb: Function = () => {}) {
  let originalX: number = 0
  const moveDistance = ref(0)

  function onMousemove(e: MouseEvent) {
    moveDistance.value = e.clientX - originalX
  }

  function onMouseup() {
    document.documentElement.removeEventListener('mousemove', onMousemove)
    document.documentElement.removeEventListener('mouseup', onMouseup)
    mouseupCb()
  }

  function onMousedown(e: MouseEvent) {
    originalX = e.clientX

    document.documentElement.addEventListener('mousemove', onMousemove)
    document.documentElement.addEventListener('mouseup', onMouseup)
    mousedownCb()
  }

  onMounted(() => {
    el.value!.addEventListener('mousedown', onMousedown)
  })

  onBeforeUnmount(() => {
    el.value!.removeEventListener('mousedown', onMousedown)
  })

  return moveDistance
}
