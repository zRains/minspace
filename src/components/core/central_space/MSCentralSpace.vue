<template>
  <div class="MSCentralSpace">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import { coreStateKey } from '../../../states'

const {
  leftSidebar: {
    states: { currentTab }
  }
} = inject(coreStateKey)!
</script>

<style lang="scss">
.MSCentralSpace {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
