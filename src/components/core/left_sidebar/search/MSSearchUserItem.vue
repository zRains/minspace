<template>
  <div class="MSSearchUserItem">
    <MSUserAvatar src="https://www.deelter.com/images/logo.png" :size="32" />
    <div class="UserInfo">
      <div class="UserName">Deelter</div>
      <div class="UserUid">#1543</div>
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
import MSUserAvatar from '../../../ui/MSUserAvatar.vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'
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
      padding: 4px 8px;
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
