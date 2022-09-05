<template>
  <div class="MSOuterBoard">
    <MSUserAvatar src="https://zrain.fun/favicon.ico" />
    <div class="MSSpaceInfo">
      <MSDropdown class="MSUserInfo" :items="userDropdownOptions" trigger="click">
        <template #trigger>
          <div class="UserName">Buzzfeed</div>
          <Icon icon="tabler:chevron-down" />
        </template>
      </MSDropdown>
      <div class="MSSpaceStatus">45 rooms online</div>
    </div>
    <div class="MSLeftSidebarControl">
      <MSButton>
        <template #left-icon><Icon height="25" width="25" icon="tabler:layout-sidebar-left-collapse" /></template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownOptions } from '../../../types/ui'
import MSUserAvatar from '../../ui/MSUserAvatar.vue'
import MSDropdown from '../../ui/MSDropdown/MSDropdown.vue'
import MSButton from '../../ui/MSButton/MSButton.vue'

const userDropdownOptions: DropdownOptions = [
  {
    type: 'click',
    text: 'View profile',
    onClick: () => {}
  },
  {
    type: 'click',
    text: 'Notification preferences',
    onClick: () => {}
  },
  {
    type: 'expand',
    text: 'Theme setting',
    items: [
      {
        type: 'click',
        text: 'Light Mode',
        onClick: () => {}
      },
      {
        type: 'click',
        text: 'Dark Mode',
        onClick: () => {}
      }
    ]
  },
  {
    type: 'toggle',
    text: 'Undisturbed mode',
    active: true,
    onClick: () => {}
  },
  {
    type: 'group',
    label: 'Danger zone',
    items: [
      {
        type: 'click',
        text: 'Group click test-1',
        onClick: () => {}
      },
      {
        type: 'click',
        text: 'Group click test-2',
        onClick: () => {}
      },
      {
        type: 'expand',
        text: 'Group expand test-1',
        items: [
          {
            type: 'click',
            text: 'Light Mode',
            onClick: () => {}
          },
          {
            type: 'click',
            text: 'Dark Mode',
            onClick: () => {}
          }
        ]
      }
    ]
  },
  {
    type: 'click',
    text: 'Click test-3',
    onClick: () => {}
  }
]
</script>

<style lang="scss">
.MSOuterBoard {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 calc(var(--u-gap) * 2);
  height: var(--ms-left-sidebar-outer-board-height);
  z-index: 2;

  .MSSpaceInfo {
    margin-left: calc(var(--u-gap) * 1.2);
    flex-grow: 1;

    .MSUserInfo {
      font-size: 0.9rem;
      font-family: var(--f-rb);

      .UserName {
        display: inline-block;
        margin-right: calc(var(--u-gap) * 0.5);
      }

      .iconify {
        vertical-align: middle;
      }
    }

    .MSSpaceStatus {
      font-size: 0.85rem;
    }
  }
}
</style>
