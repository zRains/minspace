<template>
  <div class="MSMask">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSMask {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: var(--mask-z-index);
  background: rgba(0, 0, 0, 0.3);
}
</style>
