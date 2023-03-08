<template>
  <MSMessengerItem
    :avatar="roomTextMessageItem.user.avatar"
    :user-name="roomTextMessageItem.user.username"
    :send-time="roomTextMessageItem.message.createdAt"
    :self-message="uid === roomTextMessageItem.user.uid"
    class="MSTextMessengerItem"
  >
    {{ roomTextMessageItem.message.content }}
  </MSMessengerItem>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RoomTextMessageItem } from '../../../../../../types/message.type'
import MSMessengerItem from '../MSMessengerItem.vue'
import storage from '../../../../../../utils/storage'

defineProps({
  roomTextMessageItem: {
    type: Object as PropType<RoomTextMessageItem>,
    required: true
  }
})

const uid = storage.get('user')!.uid as number
</script>
