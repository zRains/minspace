<template>
  <div :class="{ MSCollapsibleBox: true, collapsed, disable }" :style="collapsibleBoxStyles">
    <div class="BoxContent" ref="boxContentRef"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  boxHeight: {
    type: Number,
    required: false
  },
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  },
  disable: {
    type: Boolean,
    required: false,
    default: false
  }
})

const boxContentRef = ref<HTMLElement>()
const collapsibleBoxHeight = ref(props.boxHeight)
const boxObserver = new ResizeObserver(() => {
  const updateBoxHeight = boxContentRef.value ? boxContentRef.value.clientHeight : 0
  // collapsibleBoxHeight.value = Math.abs(collapsibleBoxHeight.value! - updateBoxHeight) <= 2 ? collapsibleBoxHeight.value : updateBoxHeight
  collapsibleBoxHeight.value = updateBoxHeight
})
const collapsibleBoxStyles = computed(() => ({ '--collapsible-box-height': props.collapsed ? '0px' : `${collapsibleBoxHeight.value}px` }))

onMounted(() => {
  if (!props.disable) boxObserver.observe(boxContentRef.value!)
})
</script>

<style lang="scss">
.MSCollapsibleBox {
  height: var(--collapsible-box-height);
  opacity: 1;
  visibility: visible;
  transition: height var(--u-dur), opacity var(--u-dur), visibility var(--u-dur);

  &.collapsed {
    opacity: 0;
    visibility: hidden;
  }

  &.disable {
    transition: none;
  }
}
</style>
