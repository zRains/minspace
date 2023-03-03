<template>
  <MSCentralSpaceBanner class="MSMessengerBanner">
    <template #banner-info>
      <div class="MessengerInfo">
        <MSUserAvatar :src="avatar" />
        <div class="UserBannerName">{{ userName }}</div>
      </div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSUserAvatar from '../../../../ui/MSUserAvatar.vue'
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'

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
.MSMessengerBanner {
  .MessengerInfo {
    display: flex;
    align-items: center;
    height: 100%;

    .UserBannerName {
      margin-left: calc(var(--u-gap) * 2);
      font-family: var(--f-rb);
    }
  }
}
</style>
