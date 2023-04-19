<template>
  <MSMessengerItem
    :avatar="roomTextMessageItem.user.avatar"
    :user-name="roomTextMessageItem.user.username"
    :send-time="roomTextMessageItem.message.createdAt"
    :self-message="uid === roomTextMessageItem.user.uid"
    :status="roomTextMessageItem.status"
    class="MSTextMessengerItem"
  >
    {{ roomTextMessageItem.message.content }}
  </MSMessengerItem>
</template>

<script setup lang="ts">
import storage from '@util/storage'
import MSMessengerItem from '../MSMessengerItem.vue'

// Types
import type { PropType } from 'vue'
import type { RoomTextMessageItem } from '@type/message.type'
import type { findUserResultScheme } from '@type/user.type'

defineProps({
  roomTextMessageItem: {
    type: Object as PropType<RoomTextMessageItem>,
    required: true
  }
})

const { uid } = storage.get<findUserResultScheme>('user')!
</script>
