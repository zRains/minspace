<template>
  <div :class="{ MSCollapsibleBox: true, collapsed }" :style="collapsibleBoxStyles">
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
  }
})

const boxContentRef = ref<HTMLElement>()
const collapsibleBoxHeight = ref(props.boxHeight)
const collapsibleBoxStyles = computed(() => {
  const expectHeight = collapsibleBoxHeight.value ? `${collapsibleBoxHeight.value}px` : 'unset'

  return { '--collapsible-box-height': props.collapsed ? '0px' : expectHeight }
})

onMounted(() => {
  collapsibleBoxHeight.value = boxContentRef.value!.clientHeight
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
}
</style>
