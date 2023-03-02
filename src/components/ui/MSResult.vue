<template>
  <div class="MSResult">
    <!-- Icon -->
    <div class="ResultIcon" :style="{ color }">
      <img v-if="image" :src="image" :alt="image" :style="{ width: '50%', height: 'auto' }" />
      <MSLoading v-else-if="resultType === 'loading'" :size="props.size * 0.85" />
      <Icon v-else :height="size" :width="size" :icon="icon || predefinedRef[resultType].icon" />
    </div>

    <!-- Tip -->
    <div class="ResultTip" :style="{ fontSize: `calc(16px * ${props.size / 60} * 1.3)` }">
      {{ tip ? tip : resultType === 'loading' ? 'Processing' : predefinedRef[resultType].tip }}
    </div>

    <!-- Options -->
    <div class="ResultOptions"></div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import MSLoading from './MSLoading.vue'

const props = defineProps({
  resultType: {
    type: String as PropType<'empty' | 'error' | 'default' | 'loading'>,
    required: false,
    default: 'default'
  },
  image: {
    type: String,
    required: false
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
</script>

<style lang="scss">
.MSResult {
  display: flex;
  flex-direction: column;
  align-items: center;

  .ResultTip {
    text-align: center;
    color: var(--c-text-2);
  }

  .ResultIcon {
    text-align: center;
  }
}
</style>
