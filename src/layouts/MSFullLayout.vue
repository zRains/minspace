<template>
  <div class="MSFullLayout">
    <slot></slot>
    <MSToastProvider />
  </div>
</template>

<script setup lang="ts">
import MSToastProvider from '../components/ui/toast/MSToastProvider.vue'
</script>

<style lang="scss">
.MSFullLayout {
  min-height: 100vh;
}
</style>
