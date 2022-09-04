<template>
  <div class="MSDropdownExpandItem">
    <MSDropdownItem>
      <template #right-icon><Icon icon="tabler:chevron-right" /></template>
      <template #text>{{ text }}</template>
    </MSDropdownItem>
    <ul class="ExpandPop">
      <li v-for="item in items" :key="item.text">
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
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { DropdownItem, DropdownToggleItem } from '../../../types/ui'
import MSDropdownItem from './MSDropdownItem.vue'

defineProps<{
  text: string
  items: (DropdownItem | DropdownToggleItem)[]
}>()
</script>

<style lang="scss">
@import '../../../styles/vars.scss';

.MSDropdownExpandItem {
  position: relative;

  .ExpandPop {
    position: absolute;
    min-width: 130px;
    margin: 0;
    padding: var(--u-gap);
    top: 0px;
    left: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: var(--c-bg);
    border: 1px solid var(--c-divider-light);
    box-shadow: var(--shadow-2);
    line-height: 100%;
    border-radius: 5px;
    color: var(--c-black);
    transition: opacity calc(var(--u-dur) / 2), visibility calc(var(--u-dur) / 2), background-color var(--u-dur);

    li {
      list-style: none;
    }
  }

  &:hover .ExpandPop {
    visibility: visible;
    opacity: 1;
  }
}
</style>
