<template>
  <MSCentralSpaceBanner class="MSUserBanner">
    <template #banner-info>
      <MSUserAvatar :src="avatar" />
      <div class="UserBannerName">{{ userName }}</div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSUserAvatar from '../../ui/MSUserAvatar.vue'
import MSCentralSpaceBanner from './MSCentralSpaceBanner.vue'

defineProps({
  avatar: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.MSUserBanner {
  .UserBannerName {
    margin-left: calc(var(--u-gap) * 2);
  }
}
</style>
