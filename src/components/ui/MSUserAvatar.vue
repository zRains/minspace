<template>
  <div class="MSUserAvatar" :style="{ height: size + 'px', width: size + 'px' }">
    <img v-if="showUserAvatar && src" :src="src" :alt="alt" @error="showUserAvatar = false" />
    <Icon v-else :height="size" :width="size" icon="tabler:photo-x" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 36
  },
  alt: {
    type: String,
    required: false,
    default: 'user avatar'
  }
})

const showUserAvatar = ref(true)
</script>

<style lang="scss">
.MSUserAvatar {
  display: flex;
  flex-shrink: 0;

  img {
    user-zoom: none;
    user-select: none;
    -webkit-user-drag: none;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    vertical-align: middle;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
}
</style>
