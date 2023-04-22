<template>
  <div class="MSSettingContainer">
    <!-- 设置侧边栏 -->
    <MSSettingBanner />

    <!-- 设置内容容器 -->
    <div class="MSSettingBox">
      <MSSettingSidebar />
      <div class="MSSettingContent">
        <RouterView v-slot="{ Component }">
          <Transition name="scale" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import MSSettingBanner from './MSSettingBanner.vue'
import MSSettingSidebar from './MSSettingSidebar.vue'
import useSpaceStore from '@store/space.store'

const spaceStore = useSpaceStore()
const route = useRoute()

onBeforeMount(() => {
  const currentTab = route.name === 'setting' ? 'setting_profile' : (route.name as typeof spaceStore.currentSettingTab)
  spaceStore.currentSettingTab = currentTab
})
</script>

<style lang="scss">
.MSSettingContainer {
  height: calc(100% - var(--ms-left-central-banner-height));

  .MSSettingBox {
    display: flex;
    height: 100%;

    .MSSettingContent {
      flex-grow: 1;
      height: calc(100vh - var(--ms-left-central-banner-height));
      overflow-y: auto;
    }
  }
}
</style>
