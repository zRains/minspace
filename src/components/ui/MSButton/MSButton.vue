<template>
  <button class="MSButton">
    <div :class="{ ButtonLeftIcon: true, noText }"><slot name="left-icon"></slot></div>
    <div class="ButtonText"><slot name="text"></slot></div>
    <div :class="{ ButtonRightIcon: true, noText }"><slot name="right-icon"></slot></div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  noText: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss">
.MSButton {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  background-color: var(--c-bg);
  transition: background-color calc(var(--u-dur) / 2);

  .ButtonText {
    white-space: nowrap;
  }

  .ButtonLeftIcon,
  .ButtonRightIcon {
    display: flex;
    align-items: center;

    &.ButtonLeftIcon:not(.noText) {
      & > *:last-child {
        margin-right: calc(var(--u-gap) / 1.2);
      }
    }

    &.ButtonRightIcon:not(.noText) {
      & > *:first-child {
        margin-left: calc(var(--u-gap) / 1.2);
      }
    }
  }
}
</style>
