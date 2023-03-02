import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export default function mouseMoveX(el: Ref<HTMLElement | undefined>) {
  let originalX: number = 0
  const moveDistance = ref(0)

  function onMousemove(e: MouseEvent) {
    moveDistance.value = e.clientX - originalX
  }

  function onMouseup(e: MouseEvent) {
    el.value!.removeEventListener('mousemove', onMousemove)
    el.value!.removeEventListener('mouseup', onMouseup)
  }

  function onMousedown(e: MouseEvent) {
    originalX = e.clientX

    el.value!.addEventListener('mousemove', onMousemove)
    el.value!.addEventListener('mouseup', onMouseup)
  }

  onMounted(() => {
    el.value!.addEventListener('mousedown', onMousedown)
  })

  onUnmounted(() => {
    el.value!.removeEventListener('mousedown', onMousedown)
  })

  return moveDistance
}
