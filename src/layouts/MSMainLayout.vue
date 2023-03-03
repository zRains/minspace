<template>
  <div class="MSMainLayout">
    <!-- Left sidebar -->
    <div class="LeftSideBarContainer">
      <slot name="left-sideBar" />

      <!-- Sidebar resizer -->
      <MSResizer :css-prop="'--ms-left-sidebar-width'" />
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
import MSResizer from '../components/mini/MSResizer.vue'
</script>

<style lang="scss">
.MSMainLayout {
  display: flex;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid var(--c-divider-light);
  border-right: 1px solid var(--c-divider-light);
  --resizer-bar-width: 4;

  .LeftSideBarContainer {
    position: relative;
    width: var(--ms-left-sidebar-width);
  }

  .CentralSpaceContainer {
    flex-grow: 1;
  }
}
</style>
