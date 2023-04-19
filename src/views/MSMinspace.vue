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
import { onMounted } from 'vue'
import MSLeftSidebar from '@comp/core/left_sidebar/MSLeftSidebar.vue'
import MSUserDialog from '@comp/template/dialog/MSUserDialog.vue'
import MSToastProvider from '@comp/ui/toast/MSToastProvider.vue'
import MSMainLayout from '@layout/MSMainLayout.vue'
import useSocketStore from '@store/socket.store'

const socketStore = useSocketStore()

onMounted(socketStore.initSocket)
</script>

<style lang="scss"></style>
