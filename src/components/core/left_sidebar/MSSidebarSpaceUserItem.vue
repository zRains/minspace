<template>
  <div class="MSSidebarSpaceUserItem">
    <MSUserAvatar :src="avatar" :size="34" />

    <div class="UserInfo">
      <div class="UserName">{{ userName }}</div>
      <div class="UserMessagePreview">Lorem Ipsum is simply</div>
    </div>

    <div class="ItemStatus">
      <div class="ItemTime">12:13</div>
      <div class="ItemMark"><Icon hight="16" width="16" color="var(--c-brand)" icon="tabler:checks" /></div>
    </div>
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
.MSSidebarSpaceUserItem {
  display: flex;
  align-items: center;
  margin: 0 calc(var(--u-gap) * 2);
  padding: var(--u-gap);
  border-radius: 5px;
  cursor: pointer;

  .UserInfo {
    flex-grow: 1;
    padding: 0 calc(var(--u-gap) * 1.2);

    .UserName {
      flex-grow: 1;
      line-height: 18px;
      font-size: 0.9rem;
    }

    .UserMessagePreview {
      user-select: none;
      line-height: 16px;
      font-size: 0.8rem;
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
