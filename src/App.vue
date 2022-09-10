<template>
  <RouterView />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { coreState, coreStateKey } from './states'

provide(coreStateKey, coreState)
</script>

<style lang="scss"></style>
