<template>
  <div class="MSLeftSidebar">
    <MSOuterBoardVue />
  </div>
</template>

<script setup lang="ts">
import MSOuterBoardVue from './MSOuterBoard.vue'
</script>

<style lang="scss">
.MSLeftSidebar {
  height: 100%;
  width: var(--ms-left-sidebar-width);
  background-color: var(--c-bg-mute);
}
</style>
