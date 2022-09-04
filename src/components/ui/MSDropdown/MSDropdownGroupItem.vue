<template>
  <div class="MSDropdownGroupItem">
    <div v-if="label" class="GroupItemLabel">{{ label }}</div>
    <ul>
      <li v-for="item in items" :key="JSON.stringify(item)">
        <!-- Dropdown item -->
        <MSDropdownItem v-if="item.type === 'click'">
          <template #left-icon><component v-if="'icon' in item" :is="item.icon" /></template>
          <template #text>{{ item.text }}</template>
        </MSDropdownItem>

        <!-- Dropdown toggle item -->
        <MSDropdownItem v-if="item.type === 'toggle'">
          <template #left-icon><Icon v-if="item.active" icon="tabler:check" /></template>
          <template #text>{{ item.text }}</template>
        </MSDropdownItem>

        <!-- Dropdown expand item -->
        <MSDropdownExpandItem v-if="item.type === 'expand'" :text="item.text" :items="item.items" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { DropdownExpandItem, DropdownItem, DropdownToggleItem } from '../../../types/ui'
import MSDropdownItem from './MSDropdownItem.vue'
import MSDropdownExpandItem from './MSDropdownExpandItem.vue'

defineProps<{
  label?: string
  items: (DropdownItem | DropdownToggleItem | DropdownExpandItem)[]
}>()
</script>

<style lang="scss">
.MSDropdownGroupItem {
  .GroupItemLabel {
    user-select: none;
    margin: var(--u-gap) 0;
    font-family: var(--f-r);
    font-size: 0.85rem;
    color: var(--c-text-2);
  }

  ul {
    padding: 0;
  }
}
</style>
