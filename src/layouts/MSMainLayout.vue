<template>
  <div class="MSMainLayout">
    <!-- Left sidebar -->
    <div class="LeftSideBarContainer">
      <slot name="left-sideBar" />

      <!-- Sidebar resizer -->
      <div :class="{ SidebarResizer: true, active: resizerActive }" ref="resizerRef"></div>
    </div>

    <!-- Central space -->
    <div class="CentralSpaceContainer">
      <slot name="central-space" />
    </div>

    <!-- Right sidebar -->
    <div class="RightSideBarContainer">
      <slot name="right-sideBar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { coreStateKey } from '../states'
import useMouseMoveX from '../composes/mouseMoveX'
import storage from '../utils/storage'

const {
  setting: {
    states: { cssVarInject },
    mutations: { setCssVarInject }
  }
} = inject(coreStateKey)!

// Sidebar resizer
const resizerActive = ref(false)
const resizerRef = ref<HTMLElement>()
let originalBarWidth = Number.parseInt(cssVarInject['--ms-left-sidebar-width'], 10)
const moveX = useMouseMoveX(
  resizerRef,
  () => {
    resizerActive.value = true
    document.documentElement.style.setProperty('user-select', 'none')
  },
  () => {
    resizerActive.value = false
    originalBarWidth = Number.parseInt(cssVarInject['--ms-left-sidebar-width'], 10)
    Reflect.set(storage.get('setting'), 'cssVarInject', cssVarInject)
    storage.set('setting', storage.get('setting'))
    document.documentElement.removeAttribute('style')
  }
)

watch(moveX, (n) => {
  const targetWidth = originalBarWidth + n

  // eslint-disable-next-line no-nested-ternary
  setCssVarInject('--ms-left-sidebar-width', `${targetWidth <= 290 ? 290 : targetWidth >= 420 ? 420 : targetWidth}px`)
})
</script>

<style lang="scss">
.MSMainLayout {
  display: flex;
  min-height: 100vh;
  --resizer-bar-width: 4;

  .LeftSideBarContainer {
    position: relative;
    width: var(--ms-left-sidebar-width);

    .SidebarResizer {
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
  }

  .CentralSpaceContainer {
    flex-grow: 1;
  }
}
</style>
