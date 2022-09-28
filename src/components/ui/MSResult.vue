<template>
  <div class="MSResult">
    <!-- Icon -->
    <div class="ResultIcon" :style="{ height: `${size}px`, color }">
      <template v-if="icon">
        <Icon :height="size" :width="size" :icon="icon" />
      </template>
      <PredefinedIcon v-else />
    </div>

    <!-- Tip -->
    <div class="ResultTip" :style="{ fontSize: `calc(16px * ${props.size / 60} * 1.2)` }">
      {{ tip ? tip : resultType === 'loading' ? 'Processing' : predefinedRef[resultType].tip }}
    </div>

    <!-- Options -->
    <div class="ResultOptions"></div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, h, PropType } from 'vue'
import MSLoading from './MSLoading.vue'

const props = defineProps({
  resultType: {
    type: String as PropType<'empty' | 'error' | 'default' | 'loading'>,
    required: false,
    default: 'default'
  },
  icon: {
    type: String,
    required: false
  },
  tip: {
    type: String,
    required: false
  },
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

const predefinedRef = {
  empty: { icon: 'tabler:3d-cube-sphere', tip: 'Nothing here' },
  default: { icon: 'tabler:box', tip: 'Welcome minspace' },
  error: { icon: 'tabler:alert-triangle', tip: 'Some errors occurred' }
}

const PredefinedIcon = computed(() =>
  props.resultType === 'loading'
    ? h(MSLoading, { size: props.size * 0.85 })
    : h(Icon, { icon: predefinedRef[props.resultType].icon, height: props.size, width: props.size })
)
</script>

<style lang="scss">
.MSResult {
  display: flex;
  flex-direction: column;
  align-items: center;

  .ResultTip {
    height: 20px;
    line-height: 20px;
    color: var(--c-text-2);
  }
}
</style>
