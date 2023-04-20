<template>
  <div class="AppCssVarInjector" :style="configStore.cssVarInject">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import useConfigStore from '@store/config.store'

const configStore = useConfigStore()
</script>
