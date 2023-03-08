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
        cover: 'https://deno.land/images/deno_logo_4.gif?__frsh_c=hxjaqfs9beag',
        status: 1,
        createdAt: new Date('2023-03-06T00:59:35.743Z'),
        editAt: new Date('2023-03-06T00:59:35.743Z')
      }"
    />

    <!-- Main -->
    <MSScroller class="MessageBox">
      <MSMessengerItem
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
      <MSMessengerItem :self-message="true" avatar="https://zrain.fun/favicon.ico" user-name="zRain" message="https://zrain.fun/" />
    </MSScroller>

    <!-- Input -->
    <MSMessengerInput v-model:content="inputContent" :enter-key-binding="seedRoomMessageHandle" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { MessageType } from '../../../../../types/message.type'
import MSFriendMessengerBanner from './MSFriendMessengerBanner.vue'
import MSRoomMessengerBanner from './MSRoomMessengerBanner.vue'
import MSMessengerInput from './MSMessengerInput.vue'
import MSMessengerItem from './MSMessengerItem.vue'
import MSScroller from '../../../../ui/MSScroller.vue'
import { coreStateKey } from '../../../../../states'

// TODO
const {
  socket: {
    mutations: { seedRoomMessage }
  }
} = inject(coreStateKey)!
const inputContent = ref('')

function seedRoomMessageHandle() {
  // seedRoomMessage(1, inputContent.value, MessageType.TEXT)
}
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
