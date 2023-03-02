<template>
  <div class="MSMask">
    <div class="MaskContainer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSMask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: var(--mask-z-index);
  background: rgba(0, 0, 0, 0.3);

  .MaskContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
}
</style>
