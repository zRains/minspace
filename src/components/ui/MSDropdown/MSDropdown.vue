<template>
  <div
    class="MSDropdown"
    ref="MSDropdownRef"
    @mouseleave="trigger === 'hover' && (isActivated = false)"
    @mouseenter="trigger === 'hover' && (isActivated = true)"
  >
    <MSButton
      class="Trigger"
      aria-haspopup="true"
      :aria-expanded="isActivated"
      :aria-label="label || 'MS dropdown'"
      @click="isActivated = !isActivated"
    >
      <template #text><slot name="trigger"></slot></template>
    </MSButton>

    <MSDropdownPop :items="items" @click="() => clickToClose && (isActivated = !isActivated)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useClickOutside from '@cos/clickOutside'
import MSButton from '@comp/ui/MSButton.vue'
import MSDropdownPop from './MSDropdownPop.vue'

// Types
import type { DropdownOptions } from '@type/ui.type'

defineProps<{
  items: DropdownOptions
  trigger: 'click' | 'hover'
  label?: string
  clickToClose?: boolean
}>()

const isActivated = ref(false)
const MSDropdownRef = ref<HTMLElement>()

useClickOutside(MSDropdownRef, isActivated, () => {
  isActivated.value = false
})
</script>

<style lang="scss">
.MSDropdown {
  position: relative;

  .Trigger {
    &[aria-expanded='true'] {
      & + .MSDropdownPop {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
      }
    }
  }
}
</style>
