<template>
  <div :class="{ MSSearchUserItem: true, active }">
    <div class="UserOverview" @click="$emit('activeUserItem')">
      <MSUserAvatar :src="user.avatar" :size="34" />
      <div class="UserInfo">
        <div class="UserName">{{ user.username }}</div>
        <div class="UserUid">#{{ user.uid }}</div>
      </div>
    </div>
    <MSCollapsibleBox class="UserDetails" :collapsed="!active">
      <div class="UserSign">{{ user.sign || 'Too lazy to sign ' }}</div>
      <div class="UserOptions">
        <MSButton class="ReportUserBtn" no-text>
          <template #right-icon><Icon icon="tabler:alert-triangle" /></template>
        </MSButton>
        <MSButton class="AddFriendBtn" no-text @click="addFriendHandle">
          <template #right-icon><Icon icon="tabler:user-plus" /></template>
        </MSButton>
      </div>
    </MSCollapsibleBox>
  </div>
</template>

<script setup lang="ts">
import { inject, PropType } from 'vue'
import { findUserResultDto } from '../../../../apis/user.api'
import MSUserAvatar from '../../../ui/MSUserAvatar.vue'
import MSCollapsibleBox from '../../../ui/MSCollapsibleBox.vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import { coreStateKey } from '../../../../states'

const {
  leftSidebar: {
    mutations: { changeActiveOuterPlane }
  }
} = inject(coreStateKey)!

defineProps({
  user: {
    type: Object as PropType<findUserResultDto>,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['activeUserItem'])

function addFriendHandle() {
  changeActiveOuterPlane(true)
}
</script>

<style lang="scss">
.MSSearchUserItem {
  border-radius: 5px;
  transition: background-color var(--u-dur);

  .UserOverview {
    display: flex;
    padding: var(--u-gap);
    cursor: pointer;
    transition: background-color calc(var(--u-dur) / 2);

    .UserInfo {
      flex-grow: 1;
      padding: 0 calc(var(--u-gap));

      .UserName {
        line-height: 18px;
        font-size: 0.9rem;
      }

      .UserUid {
        font-size: 0.75rem;
        color: var(--c-text-2);
      }
    }
  }

  .UserDetails {
    .UserSign {
      padding: var(--u-gap);
      font-size: 0.8rem;
    }

    .UserOptions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 var(--u-gap) var(--u-gap) var(--u-gap);

      .MSButton {
        padding: calc(var(--u-gap) * 0.4) var(--u-gap);
        border-radius: 5px;

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

  &:hover {
    background-color: var(--c-bg-mute);
  }

  &.active {
    background-color: var(--c-bg-soft);
  }
}
</style>
