<template>
  <div class="MSUserAvatar" :style="{ height: size + 'px', width: size + 'px', borderRadius: radius }">
    <img v-if="showUserAvatar && src" :src="optimizedSrc" :alt="alt" @error="showUserAvatar = false" />
    <Icon v-else :height="size" :width="size" icon="tabler:photo-x" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { optimizeSVG } from '@util/helpers'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 36
  },
  radius: {
    type: String,
    required: false,
    default: '50%'
  },
  alt: {
    type: String,
    required: false,
    default: 'user avatar'
  }
})

const showUserAvatar = ref(true)
const optimizedSrc = computed(() => optimizeSVG(props.src))
</script>

<style lang="scss">
.MSUserAvatar {
  display: flex;
  flex-shrink: 0;
  background-color: var(--c-bg);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;

  img {
    user-zoom: none;
    user-select: none;
    -webkit-user-drag: none;
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }
}
</style>
