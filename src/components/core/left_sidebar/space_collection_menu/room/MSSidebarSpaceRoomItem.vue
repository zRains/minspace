<template>
  <div :class="{ MSSidebarSpaceRoomItem: true, active }" @click="router.push({ name: 'messengers' })">
    <MSUserAvatar :src="cover" :size="40" />

    <div class="RoomInfo">
      <div class="RoomName">{{ roomName }}</div>
      <div class="RoomStatus">45 users online</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import MSUserAvatar from '../../../../ui/MSUserAvatar.vue'

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

function initSocket() {
  const socket = new WebSocket('ws://localhost:3001', ['zrain'])

  socket.addEventListener('open', (event) => {
    socket.send(
      JSON.stringify({
        event: 'zrr'
      })
    )
  })

  // ws.onopen((ws:any,e:any)=>{
  //   console.log(ws);

  // })
}

onMounted(initSocket)
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
      line-height: 18px;
      font-size: 0.95rem;
    }

    .RoomStatus {
      user-select: none;
      line-height: 16px;
      font-size: 0.85rem;
      color: var(--c-text-2);
    }
  }

  &:hover {
    background-color: var(--c-bg-mute);
  }

  &.active {
    background-color: var(--c-green-op);

    .RoomInfo .RoomName {
      color: var(--c-green);
    }
  }
}
</style>
