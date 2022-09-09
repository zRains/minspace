<template>
  <div class="MSEmpty">
    <!-- Icon -->
    <div class="MSEmpty">
      <slot name="icon"><Icon :height="size" :width="size" :color="color" icon="tabler:3d-cube-sphere" /></slot>
    </div>

    <!-- Tip -->
    <div class="EmptyTip">
      <slot name="tip">There's nothing here</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 60
  },
  color: {
    type: String,
    required: false,
    default: 'var(--c-text-2)'
  }
})
</script>

<style lang="scss">
.MSEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;

  .EmptyTip {
    color: var(--c-text-2);
    margin-top: var(--u-gap);
  }
}
</style>
