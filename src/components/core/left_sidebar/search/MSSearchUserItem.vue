<template>
  <div class="MSSearchUserItem">
    <MSUserAvatar :src="user.avatar" :size="32" />
    <div class="UserInfo">
      <div class="UserName">{{ user.username }}</div>
      <div class="UserUid">#{{ user.uid }}</div>
    </div>
    <div class="UserOptions">
      <MSButton class="ReportUserBtn" no-text>
        <template #right-icon><Icon icon="tabler:alert-triangle" /></template>
      </MSButton>
      <MSButton class="AddFriendBtn" no-text>
        <template #right-icon><Icon icon="tabler:user-plus" /></template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { findUserResultDto } from '../../../../apis/user.api'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import MSUserAvatar from '../../../ui/MSUserAvatar.vue'

defineProps({
  user: {
    type: Object as PropType<findUserResultDto>,
    required: true
  }
})
</script>

<style lang="scss">
.MSSearchUserItem {
  height: 32px;
  display: flex;

  .UserInfo {
    flex-grow: 1;
    padding: 0 calc(var(--u-gap));
    line-height: 100%;

    .UserName {
      font-size: 0.9rem;
    }

    .UserUid {
      font-size: 0.75rem;
      color: var(--c-text-2);
    }
  }

  .UserOptions {
    display: flex;
    align-items: center;

    .MSButton {
      padding: calc(var(--u-gap) * 0.5) var(--u-gap);
      border-radius: 3px;

      &.ReportUserBtn {
        background-color: var(--c-red-op);
        color: var(--c-red);
      }

      &.AddFriendBtn {
        background-color: var(--c-green-op);
        color: var(--c-green);
      }

      &:not(:last-child) {
        margin-right: var(--u-gap);
      }
    }
  }
}
</style>
