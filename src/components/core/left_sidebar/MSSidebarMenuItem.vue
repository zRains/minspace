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
  margin: 0 calc(var(--u-gap) * 2);
  padding: var(--u-gap);
  border-radius: 5px;
  line-height: 20px;

  &:hover {
    background-color: var(--c-bg-mute);
  }
}
</style>
