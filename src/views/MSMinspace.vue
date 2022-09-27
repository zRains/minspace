<template>
  <MSMainLayout class="MSMinspace">
    <template #left-sideBar>
      <MSLeftSidebar />
    </template>
    <template #central-space>
      <RouterView />
    </template>
  </MSMainLayout>
  <MSToastProvider />
</template>

<script setup lang="ts">
import MSMainLayout from '../layouts/MSMainLayout.vue'
import MSLeftSidebar from '../components/core/left_sidebar/MSLeftSidebar.vue'
import MSToastProvider from '../components/ui/toast/MSToastProvider.vue'
</script>

<style lang="scss"></style>
