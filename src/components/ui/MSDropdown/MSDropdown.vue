<template>
  <div
    class="MSDropdown"
    ref="MSDropdown"
    @mouseenter="trigger === 'hover' && (isActivated = true)"
    @mouseleave="trigger === 'hover' && (isActivated = false)"
  >
    <div
      class="Trigger"
      aria-haspopup="true"
      :aria-expanded="isActivated"
      :aria-label="label || 'MS dropdown'"
      @click="isActivated = !isActivated"
    >
      <slot name="trigger"></slot>
    </div>

    <MSDropdownPop :items="items" @click="() => clickToClose && (isActivated = !isActivated)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownOptions } from '../../../types/ui'
import MSDropdownPop from './MSDropdownPop.vue'
import useClickOutside from '../../../composes/clickOutside'

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
@use 'sass:math';
@import '../../../styles/vars.scss';

.MSDropdown {
  position: relative;

  .Trigger {
    cursor: pointer;
    user-select: none;

    &[aria-expanded='true'] {
      & + .MSDropdownPop {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}
</style>
