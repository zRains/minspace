<template>
  <div class="MSButton">
    <div class="LeftButtonIcon"><slot name="left-icon"></slot></div>
    <div class="ButtonText"><slot name="text"></slot></div>
    <div class="RightButtonIcon"><slot name="right-icon"></slot></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSButton {
  user-select: none;
  cursor: pointer;

  .ButtonText {
    white-space: nowrap;
  }

  .LeftButtonIcon,
  .RightButtonIcon {
    .iconify {
      vertical-align: middle;
    }
  }
}
</style>
