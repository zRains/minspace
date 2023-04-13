<template>
  <ul class="MSDropdownPop">
    <li v-for="item in items" :key="JSON.stringify(item)" :data-type="item.type">
      <!-- Dropdown item -->
      <MSDropdownItem v-if="item.type === 'click'">
        <template #left-icon><component v-if="'icon' in item" :is="item.icon" /></template>
        <template #text>{{ item.text }}</template>
      </MSDropdownItem>

      <!-- Dropdown toggle item -->
      <MSDropdownItem v-if="item.type === 'toggle'">
        <template #text>{{ item.text }}</template>
      </MSDropdownItem>

      <!-- Dropdown expand item -->
      <MSDropdownExpandItem v-if="item.type === 'expand'" :text="item.text" :items="item.items" />

      <!-- Dropdown group item -->
      <MSDropdownGroupItem v-if="item.type === 'group'" :items="item.items" :label="item.label" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import MSDropdownItem from './MSDropdownItem.vue'
import MSDropdownExpandItem from './MSDropdownExpandItem.vue'
import MSDropdownGroupItem from './MSDropdownGroupItem.vue'

// Types
import type { DropdownOptions } from '@type/ui.type'

defineProps<{
  items: DropdownOptions
}>()

const emits = defineEmits<{
  (e: 'clickOutside', num: number): void
}>()
</script>

<style lang="scss">
.MSDropdownPop {
  position: absolute;
  display: block;
  min-width: 120px;
  margin: 0;
  padding: var(--u-gap);
  top: 100%;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(calc(var(--u-gap) * -0.5));
  background-color: var(--c-bg);
  border: 1px solid var(--c-divider-light);
  line-height: 100%;
  border-radius: 5px;
  z-index: 1;

  transition: opacity calc(var(--u-dur) / 2), visibility calc(var(--u-dur) / 2), transform calc(var(--u-dur) / 2),
    background-color var(--u-dur);

  li {
    list-style: none;

    &[data-type='group'] + li {
      margin-top: var(--u-gap);
      padding-top: var(--u-gap);
      border-top: 1px solid var(--c-divider-light);
    }
  }
}
</style>
