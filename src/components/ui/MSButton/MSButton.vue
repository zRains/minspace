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
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: background-color calc(var(--u-dur) / 2);

  .ButtonText {
    white-space: nowrap;
  }

  .LeftButtonIcon,
  .RightButtonIcon {
    display: flex;
    align-items: center;
  }
}
</style>
