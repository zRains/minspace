<template>
  <div class="MSMainLayout">
    <!-- Left sidebar -->
    <div class="LeftSideBarContainer">
      <slot name="left-sideBar" />

      <!-- Sidebar resizer -->
      <div class="SidebarResizer" ref="resizerRef"></div>
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
import { ref } from 'vue'
import useMouseMoveX from '../composes/mouseMoveX'

const resizerRef = ref<HTMLElement>()

const mo = useMouseMoveX(resizerRef)
</script>

<style lang="scss">
.MSMainLayout {
  display: flex;
  min-height: 100vh;
  --resizer-bar-width: 8;

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
        transition-property: transform;
        transition-duration: calc(var(--u-dur) * 0.8);
        transform-origin: center;
        transform: scale(1, 1);
      }

      &:hover {
        cursor: ew-resize;

        &::after {
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
