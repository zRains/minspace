<template>
  <div class="MSSettingContainer">
    <MSSettingBanner />
    <div class="MSSettingBox">
      <MSSettingSidebar />
      <div class="MSSettingContent">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MSSettingBanner from './MSSettingBanner.vue'
import MSSettingSidebar from './MSSettingSidebar.vue'
</script>

<style lang="scss">
.MSSettingContainer {
  height: 100%;

  .MSSettingBox {
    display: flex;
    height: calc(100% - var(--ms-left-central-banner-height));

    .MSSettingContent {
      flex-grow: 1;
    }
  }
}
</style>
