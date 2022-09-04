<template>
  <MSButton class="MSDropdownItem">
    <template #left-icon><slot name="left-icon"></slot></template>
    <template #text><slot name="text"></slot></template>
    <template #right-icon><slot name="right-icon"></slot></template>
  </MSButton>
</template>

<script setup lang="ts">
import MSButton from '../MSButton/MSButton.vue'
</script>

<style lang="scss">
.MSDropdownItem {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  font-family: var(--f-r);
  font-size: 0.95rem;

  .ButtonText {
    flex-grow: 1;
  }

  &:hover,
  &.active {
    background-color: var(--c-bg-mute);
  }
}
</style>
