<template>
  <div class="MSMessengerContainer">
    <!-- Banner -->
    <!-- <MSFriendMessengerBanner
      avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      user-name="Jeff"
    /> -->
    <MSRoomMessengerBanner
      :room="{
        rid: 1,
        roomname: 'Deno land',
        desc: 'The easiest, most secure JavaScript runtime.',
        cover: 'https://zrain.fun/avatar.png',
        status: 1,
        createdAt: new Date('2023-03-06T00:59:35.743Z'),
        editAt: new Date('2023-03-06T00:59:35.743Z')
      }"
    />

    <!-- Main -->
    <MSScroller class="MessageBox">
      <!-- <MSMessengerItem
        avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        user-name="Jeff"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting."
      />
      <MSMessengerItem
        :self-message="true"
        avatar="https://zrain.fun/favicon.ico"
        user-name="zRain"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <MSMessengerItem :self-message="true" avatar="https://zrain.fun/favicon.ico" user-name="zRain" message="https://zrain.fun/" /> -->
      <MSTextMessengerItem v-for="msg in roomMessages.collection" :key="msg.message.rmid" :room-text-message-item="msg" />
    </MSScroller>

    <!-- Input -->
    <MSMessengerInput v-model:content="inputContent" :activated="socketStore.isSocketOpen" :enter-key-binding="seedRoomMessageHandle" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import MSFriendMessengerBanner from './MSFriendMessengerBanner.vue'
import storage from '@util/storage'
import MSRoomMessengerBanner from './MSRoomMessengerBanner.vue'
import MSMessengerInput from './MSMessengerInput.vue'
import MSScroller from '@comp/ui/MSScroller.vue'
import MSTextMessengerItem from './template/MSTextMessengerItem.vue'
import useSocketStore from '@store/socket.store'

// Types
import { type RoomTextMessageItem, MessageType, MessageStatus } from '@type/message.type'
import type { User } from '@type/user.type'

const socketStore = useSocketStore()
const inputContent = ref('')
const roomMessages = reactive<{
  collection: RoomTextMessageItem[]
}>({
  collection: []
})

// TODO 待完善：测试本地发送
function seedRoomMessageHandle() {
  const ws = socketStore.ws!
  const now = Date.now()
  const { uid, role, avatar, username, status }: Pick<User, 'uid' | 'role' | 'avatar' | 'username' | 'status'> = storage.get('user')!

  /** 预显示 */
  roomMessages.collection.push({
    user: {
      uid,
      role,
      avatar,
      username,
      status
    },
    message: {
      uid,
      rid: 1,
      /** 注意：rmid需要成功发送后再设置，预显示统一定义为-1 */
      rmid: -1,
      content: inputContent.value,
      createdAt: now,
      type: MessageType.TEXT
    },
    status: MessageStatus.SENDING
  })

  ws.send({
    event: 'send-room-message',
    data: {
      uid: storage.get('user').uid,
      rid: 1,
      content: inputContent.value,
      createdAt: now,
      type: MessageType.TEXT
    }
  })
}

onMounted(() => {
  // TODO 待设计：是否需要取消事件订阅
  socketStore.ws!.subscribe('send-room-message', (data) => {
    if (data.succeed) {
      const { succeed, ...meta } = data

      if (succeed) {
        for (let idx = 0; idx < roomMessages.collection.length; idx += 1) {
          if (roomMessages.collection[idx].message.createdAt === new Date(meta.message.createdAt).getTime()) {
            /** 注意： 在此设置rmid */
            roomMessages.collection[idx].message.rid = meta.message.rmid
            roomMessages.collection[idx].status = MessageStatus.SUCCESS

            break
          }
        }
      }
    }
  })

  socketStore.ws!.subscribe('receive-room-message', ({ message, user }) => {
    roomMessages.collection.push({
      user,
      message,
      status: MessageStatus.SUCCESS
    })
  })
})
</script>

<style lang="scss">
.MSMessengerContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fafbfd;
  height: 100vh;

  .MessageBox {
    padding: 0 calc(var(--u-gap) * 2);
    margin-bottom: calc(var(--ms-space-input-container-height) + 4 * var(--u-gap));
    flex-grow: 1;
  }
}
</style>
