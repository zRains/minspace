<template>
  <div class="MSSidebarSpaceFriendItem">
    <MSUserAvatar :src="avatar" :size="40" />

    <div class="FriendInfo">
      <div class="FriendName">{{ friendName }}</div>
      <div class="FriendMessagePreview">Lorem Ipsum is simply</div>
    </div>

    <div class="ItemStatus">
      <div class="ItemTime">12:13</div>
      <div class="ItemMark"><Icon hight="16" width="16" color="var(--c-brand)" icon="tabler:checks" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MSUserAvatar from '../../../../ui/MSUserAvatar.vue'

defineProps({
  avatar: {
    type: String,
    required: true
  },
  friendName: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.MSSidebarSpaceFriendItem {
  display: flex;
  align-items: center;
  padding: var(--u-gap) calc(var(--u-gap) * 1.2);
  border-radius: 5px;
  cursor: pointer;

  .FriendInfo {
    flex-grow: 1;
    padding: 0 calc(var(--u-gap) * 1.5);

    .FriendName {
      flex-grow: 1;
      margin-bottom: calc(var(--u-gap) * 0.5);
      font-size: 0.95rem;
    }

    .FriendMessagePreview {
      user-select: none;
      font-size: 0.85rem;
      color: var(--c-text-2);
    }
  }

  .ItemStatus {
    .ItemTime {
      line-height: 18px;
      font-size: 0.75rem;
      color: var(--c-text-2);
    }

    .ItemMark {
      height: 16px;
      text-align: end;
    }
  }

  &:hover {
    background-color: var(--c-bg-mute);
  }
}
</style>
