<template>
  <div class="MSScroller styled-scrollbars" :style="scrollerStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    required: false,
    default: 'vertical'
  },
  height: {
    type: [String, Number],
    required: false,
    default: '100%'
  },
  vertical: {
    type: [String, Number],
    required: false,
    default: 8
  },
  horizontal: {
    type: [String, Number],
    required: false,
    default: 8
  },
  trackColor: {
    type: String,
    required: false,
    default: 'transparent'
  },
  thumbColor: {
    type: String,
    required: false,
    default: 'var(--c-divider-light)'
  }
})

const scrollerStyles = computed(() => ({
  height: typeof props.height === 'string' ? props.height : `${props.height}px`,
  '--scroller-thumb-color': props.thumbColor,
  '--scroller-track-color': props.trackColor,
  '--scroller-vertical-size': typeof props.vertical === 'string' ? props.vertical : `${props.vertical}px`,
  '--scroller-horizontal-size': typeof props.horizontal === 'string' ? props.horizontal : `${props.horizontal}px`
}))
</script>

<style lang="scss">
.MSScroller {
  overflow: auto;
  scrollbar-color: var(--scroller-thumb-color) var(--scroller-track-color);

  &::-webkit-scrollbar {
    width: var(--scroller-vertical-size);
    height: var(--scroller-horizontal-size);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroller-thumb-color);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--scroller-track-color);
  }
}
</style>
