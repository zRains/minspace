<template>
  <div class="AppCssVarInjector" :style="cssVarInject">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { coreState, coreStateKey } from '@/states'

provide(coreStateKey, coreState)

const { cssVarInject } = coreState.setting.states
</script>
