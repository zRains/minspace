<template>
  <MSButton class="MSSidebarMenuItem">
    <template #left-icon><slot name="icon"></slot></template>
    <template #text><slot name="text"></slot></template>
  </MSButton>
</template>

<script setup lang="ts">
import MSButton from '../../ui/MSButton/MSButton.vue'
</script>

<style lang="scss">
.MSSidebarMenuItem {
  width: 100%;
  padding: var(--u-gap);
  border-radius: 5px;
  line-height: 20px;
  color: var(--c-text-1);
  transition: background-color calc(var(--u-dur) * 0.5), color calc(var(--u-dur) * 0.5);

  &:hover {
    background-color: var(--c-bg-mute);
  }

  &.active {
    background-color: var(--c-green-op);
    color: var(--c-green);
  }
}
</style>
