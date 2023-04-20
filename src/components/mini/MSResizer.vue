<template>
  <div :class="{ MSResizer: true, active: resizerActive }" ref="resizerRef"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import storage from '../../utils/storage'
import useMouseMoveX from '../../composes/mouseMoveX'
import useConfigStore from '@store/config.store'

const props = defineProps({
  cssProp: {
    type: String,
    required: true
  }
})

const configStore = useConfigStore()
const resizerActive = ref(false)
const resizerRef = ref<HTMLElement>()
let originalBarWidth = Number.parseInt(configStore.cssVarInject[props.cssProp], 10)
const moveX = useMouseMoveX(
  resizerRef,
  () => {
    resizerActive.value = true
    document.documentElement.style.setProperty('user-select', 'none')
    document.documentElement.style.setProperty('cursor', 'ew-resize')
  },
  () => {
    resizerActive.value = false
    originalBarWidth = Number.parseInt(configStore.cssVarInject[props.cssProp], 10)
    Reflect.set(storage.get('setting'), 'cssVarInject', configStore.cssVarInject)
    storage.set('setting', storage.get('setting'))
    document.documentElement.removeAttribute('style')
  }
)

watch(moveX, (n) => {
  const targetWidth = originalBarWidth + n

  // eslint-disable-next-line no-nested-ternary
  configStore.setCssVarInject(props.cssProp, `${targetWidth <= 290 ? 290 : targetWidth >= 420 ? 420 : targetWidth}px`)
})
</script>

<style lang="scss">
.MSResizer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: calc(var(--resizer-bar-width) * -0.5 * 1px);
    height: 100%;
    width: calc(var(--resizer-bar-width) * 1px);
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: -0.5px;
    height: 100%;
    width: 1px;
    background-color: var(--c-divider-light);
    transition-property: transform background-color;
    transition-duration: calc(var(--u-dur) * 0.8);
    transform-origin: center;
    transform: scale(1, 1);
  }

  &:hover,
  &.active {
    cursor: ew-resize;

    &::after {
      background-color: var(--c-green-light);
      transform: scale(var(--resizer-bar-width), 1);
    }
  }
}
</style>
