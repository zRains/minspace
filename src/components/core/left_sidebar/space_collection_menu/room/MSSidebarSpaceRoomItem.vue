<template>
  <div :class="{ MSSidebarSpaceRoomItem: true, active }" @click="router.push({ name: 'messengers' })">
    <MSUserAvatar :src="cover" :size="40" radius="5px" />

    <div class="RoomInfo">
      <div class="RoomName">{{ roomName }}</div>
      <div class="RoomNewestMsg">2 members online</div>
    </div>

    <div class="RoomStatus">
      <div class="RoomUserCount"><Icon icon="tabler:users" width="15" height="15" />6</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'

// TODO:Test code
import router from '../../../../../routers'

defineProps({
  cover: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss">
.MSSidebarSpaceRoomItem {
  display: flex;
  align-items: center;
  padding: var(--u-gap) calc(var(--u-gap) * 1.2);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color calc(var(--u-dur) * 0.5), color calc(var(--u-dur) * 0.5);

  .RoomInfo {
    flex-grow: 1;
    padding: 0 calc(var(--u-gap) * 1.5);

    .RoomName {
      flex-grow: 1;
      margin-bottom: calc(var(--u-gap) * 0.5);
      font-size: 0.95rem;
    }

    .RoomNewestMsg {
      user-select: none;
      font-size: 0.85rem;
      color: var(--c-text-2);
    }
  }

  .RoomStatus {
    .RoomUserCount {
      font-size: 0.9rem;
      color: var(--c-text-2);

      .iconify {
        margin-right: calc(var(--u-gap) * 0.2);
        vertical-align: -0.15rem;
      }
    }
  }

  &:hover {
    background-color: var(--c-bg-soft);
  }

  &.active {
    background-color: var(--c-green-op);

    .RoomInfo .RoomName {
      color: var(--c-green);
    }

    .RoomStatus {
      color: var(--c-green);
    }
  }
}
</style>
