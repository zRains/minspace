<template>
  <button :class="{ MSButton: true, MSButtonLoading: loading }" :disabled="disabled">
    <div class="ButtonWarper">
      <div :class="{ ButtonLeftIcon: true, noText }"><slot name="left-icon"></slot></div>
      <div class="ButtonText"><slot name="text"></slot></div>
      <div :class="{ ButtonRightIcon: true, noText }"><slot name="right-icon"></slot></div>
    </div>
    <div v-if="loading" class="ButtonLoading"><MSLoading :size="20" /></div>
  </button>
</template>

<script setup lang="ts">
import MSLoading from '../MSLoading.vue'

defineProps({
  noText: {
    type: Boolean,
    required: false,
    default: false
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss">
.MSButton {
  position: relative;
  padding: 0;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  background-color: var(--c-bg);
  transition: background-color calc(var(--u-dur) / 2);
  user-select: none;
  cursor: pointer;

  .ButtonWarper {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    visibility: visible;
    transition: opacity var(--u-dur), visibility var(--u-dur);

    .ButtonText {
      flex-grow: 1;
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

  .ButtonLoading {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--u-dur), visibility var(--u-dur);
  }

  &.MSButtonLoading {
    .ButtonWarper {
      opacity: 0;
      visibility: hidden;
    }

    .ButtonLoading {
      opacity: 1;
      visibility: visible;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
