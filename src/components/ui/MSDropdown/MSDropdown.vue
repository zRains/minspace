<template>
  <div
    class="MSDropdown"
    ref="MSDropdown"
    @mouseenter="trigger === 'hover' && (isActivated = true)"
    @mouseleave="trigger === 'hover' && (isActivated = false)"
  >
    <MSButton
      class="Trigger"
      aria-haspopup="true"
      :aria-expanded="isActivated"
      :aria-label="label || 'MS dropdown'"
      @click="isActivated = !isActivated"
    >
      <template #text> <slot name="trigger"></slot></template>
    </MSButton>

    <MSDropdownPop :items="items" @click="() => clickToClose && (isActivated = !isActivated)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownOptions } from '../../../types/ui'
import MSDropdownPop from './MSDropdownPop.vue'
import useClickOutside from '../../../composes/clickOutside'
import MSButton from '../MSButton/MSButton.vue'

defineProps<{
  items: DropdownOptions
  trigger: 'click' | 'hover'
  label?: string
  clickToClose?: boolean
}>()

const isActivated = ref(false)
const MSDropdown = ref<HTMLElement>()

useClickOutside(MSDropdown, () => {
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
