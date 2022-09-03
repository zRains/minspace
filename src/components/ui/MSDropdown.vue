<template>
  <div class="MSDropdown">
    <div class="trigger">
      <slot name="trigger">
        <Icon icon="tabler:chevron-down" />
      </slot>
    </div>
    <div class="pane"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSDropdown {
  position: relative;
  cursor: pointer;

  .pane {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
