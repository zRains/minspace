<template>
  <div :class="{ MSSidebarOuterPlane: true, active: activeOuterPlane }">
    <MSFriendApplicationPlane />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { coreStateKey } from '../../../../states'
import MSFriendApplicationPlane from './MSFriendApplicationPlane.vue'

const {
  leftSidebar: {
    states: { activeOuterPlane }
  }
} = inject(coreStateKey)!
</script>

<style lang="scss">
.MSSidebarOuterPlane {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: calc(var(--ms-left-sidebar-width) - 1px);
  padding: calc(var(--ms-left-sidebar-outer-board-height) + var(--u-gap)) calc(var(--u-gap) * 2) 0 calc(var(--u-gap) * 2);
  background-color: var(--c-bg);
  z-index: 2;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: background-color var(--u-dur), transform var(--u-dur), opacity var(--u-dur), visibility var(--u-dur);

  &.active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
