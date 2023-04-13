<template>
  <div class="MSMainLayout">
    <!-- 左侧边栏 -->
    <div class="LeftSideBarContainer">
      <slot name="left-sideBar" />

      <!-- 侧边栏宽度调整器 -->
      <MSResizer :css-prop="'--ms-left-sidebar-width'" />
    </div>

    <!-- 中央区域 -->
    <div class="CentralSpaceContainer">
      <slot name="central-space" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MSResizer from '@comp/mini/MSResizer.vue'
</script>

<style lang="scss">
.MSMainLayout {
  display: flex;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  --resizer-bar-width: 4;

  .LeftSideBarContainer {
    position: relative;
    width: var(--ms-left-sidebar-width);
  }

  .CentralSpaceContainer {
    flex-grow: 1;
  }
}

@media screen and (min-width: 1200px) {
  .MSMainLayout {
    border-left: 1px solid var(--c-divider-light);
    border-right: 1px solid var(--c-divider-light);
  }
}
</style>
