<template>
  <MSMainLayout class="MSMinspace">
    <template #left-sideBar>
      <MSLeftSidebar></MSLeftSidebar>
    </template>
    <template #central-space>
      <MSCentralSpace />
    </template>
  </MSMainLayout>
</template>

<script setup lang="ts">
import MSMainLayout from '../layouts/MSMainLayout.vue'
import MSLeftSidebar from '../components/core/left_sidebar/MSLeftSidebar.vue'
import MSCentralSpace from '../components/core/central_space/MSCentralSpace.vue'
</script>

<style lang="scss"></style>
