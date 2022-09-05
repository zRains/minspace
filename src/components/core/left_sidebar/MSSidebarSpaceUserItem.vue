<template>
  <div class="MSSidebarSpaceUserItem">
    <MSUserAvatar :src="avatar" :size="24" />
    <div class="MSUserName">{{ userName }}</div>
  </div>
</template>

<script setup lang="ts">
import MSUserAvatar from '../../ui/MSUserAvatar.vue'

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
$user-avatar-height: 24px;

.MSSidebarSpaceUserItem {
  display: flex;
  align-items: center;
  margin: 0 calc(var(--u-gap) * 2);
  padding: 6px var(--u-gap);
  border-radius: 5px;
  cursor: pointer;

  .MSUserName {
    flex-grow: 1;
    line-height: $user-avatar-height;
    font-size: 0.95rem;
    margin-left: calc(var(--u-gap) * 2);
  }

  &:hover {
    background-color: var(--c-bg-mute);
  }
}
</style>
