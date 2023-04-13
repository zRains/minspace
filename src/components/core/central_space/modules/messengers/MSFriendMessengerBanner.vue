<template>
  <MSCentralSpaceBanner class="MSFriendMessengerBanner">
    <template #banner-info>
      <div class="MessengerBannerTitleBox">
        <MSUserAvatar :src="avatar" />
        <div class="UserBannerName">{{ userName }}</div>
      </div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'
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
.MSFriendMessengerBanner {
  .MessengerBannerTitleBox {
    display: flex;
    align-items: center;
    height: 100%;

    .UserBannerName {
      margin-left: calc(var(--u-gap) * 1.5);
      font-family: var(--f-rb);
    }
  }
}
</style>
