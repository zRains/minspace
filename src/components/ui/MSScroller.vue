<template>
  <div class="MSScroller" :style="scrollerStyles" ref="scrollerRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue'

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
    type: Number,
    required: false,
    default: 8
  },
  horizontal: {
    type: Number,
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

const scrollerRef = ref<HTMLElement>()
const scrollable = ref(false)
const scrollerStyles = computed(() => ({
  height: typeof props.height === 'string' ? props.height : `${props.height}px`,
  '--scroller-thumb-color': props.thumbColor,
  '--scroller-track-color': props.trackColor,
  '--scroller-vertical-size': `${props.vertical}px`,
  '--scroller-horizontal-size': `${props.horizontal}px`,
  '--scrollable-patch': scrollable.value ? `${props.direction === 'vertical' ? props.vertical : props.horizontal}px` : '0px'
}))

onMounted(() => {
  const el = scrollerRef.value!

  scrollable.value = el.scrollHeight > el.clientHeight

  new ResizeObserver(() => {
    scrollable.value = el.scrollHeight > el.clientHeight
  }).observe(el)
})
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
