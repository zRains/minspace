<template>
  <div class="MSButton">
    <div class="MSButtonText"><slot name="text"></slot></div>
    <div class="MSButtonIcon"><slot name="icon"></slot></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSButton {
  cursor: pointer;
}
</style>
