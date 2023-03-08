<template>
  <MSMainLayout class="MSMinspace">
    <template #left-sideBar>
      <!-- 侧边栏 -->
      <MSLeftSidebar />
    </template>

    <template #central-space>
      <RouterView />
    </template>
  </MSMainLayout>

  <!-- 模态框组件组 -->
  <MSUserDialog />

  <!-- Toast提示组件 -->
  <MSToastProvider />
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue'
import MSLeftSidebar from '../components/core/left_sidebar/MSLeftSidebar.vue'
import MSToastProvider from '../components/ui/toast/MSToastProvider.vue'
import MSMainLayout from '../layouts/MSMainLayout.vue'
import { coreStateKey } from '../states'

// Dialog
import MSUserDialog from '../components/template/dialog/MSUserDialog.vue'

const {
  socket: {
    actions: { initSocket }
  }
} = inject(coreStateKey)!

onMounted(initSocket)
</script>

<style lang="scss"></style>
