<template>
  <MSCentralSpaceBanner class="MSRoomMessengerBanner">
    <template #banner-info>
      <div class="MessengerBannerTitleBox">
        <MSUserAvatar :src="room.cover" :size="40" radius="5px" />
        <div class="RoomInfo">
          <div class="RoomBannerName">{{ room.roomname }}</div>
          <div class="RoomBannerStatus">{{ room.desc }}</div>
        </div>
      </div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { BasicRoom } from '../../../../../types/room.type'
import MSUserAvatar from '../../../../ui/MSUserAvatar.vue'
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
import MSButton from '../../../../ui/MSButton.vue'

defineProps({
  room: {
    type: Object as PropType<BasicRoom>,
    required: true
  }
})
</script>

<style lang="scss">
.MSRoomMessengerBanner {
  .MessengerBannerTitleBox {
    display: flex;
    align-items: center;
    height: 100%;

    .RoomInfo {
      margin-left: calc(var(--u-gap) * 1.5);

      .RoomBannerName {
        font-family: var(--f-rb);
      }

      .RoomBannerStatus {
        font-size: 0.95rem;
        color: var(--c-text-2);
      }
    }
  }
}
</style>
