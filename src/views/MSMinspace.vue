<template>
  <MSMainLayout class="MSMinspace">
    <template #left-sideBar>
      <MSLeftSidebar />
    </template>

    <template #central-space>
      <RouterView />
    </template>
  </MSMainLayout>

  <!-- Dialog groups -->
  <MSUserDialog />

  <!-- Toast provider -->
  <MSToastProvider />
</template>

<script setup lang="ts">
import MSLeftSidebar from '../components/core/left_sidebar/MSLeftSidebar.vue'
import MSToastProvider from '../components/ui/toast/MSToastProvider.vue'
import MSMainLayout from '../layouts/MSMainLayout.vue'

// Dialog
import MSUserDialog from '../components/template/dialog/MSUserDialog.vue'
</script>

<style lang="scss"></style>
