<template>
  <div class="MSSidebarUserNav">
    <Transition name="scale" mode="out-in">
      <div v-if="socketStore.isSocketOpen" class="SidebarUserNavMainContainer">
        <MSUserAvatar
          :src="currentUser.avatar"
          :size="40"
          :on-click="() => router.push({ name: 'user', params: { uid: currentUser.uid } })"
        />

        <!-- 用户信息主要展示 -->
        <div class="MSSpaceInfo">
          <!-- 下拉菜单 -->
          <MSDropdown class="PreferencesDropdown" :items="userDropdownOptions" trigger="click">
            <template #trigger>
              <div class="DropdownTriggerText">
                <div class="UserName">{{ currentUser.username }}</div>
                <Icon icon="tabler:chevron-down" />
              </div>
            </template>
          </MSDropdown>

          <!-- 当前房间在线信息 -->
          <div class="MSSpaceStatus">45 rooms online</div>
        </div>
      </div>

      <!-- Socket连接中展示 -->
      <div v-else class="SocketConnecting">
        <MSLoading :size="32" />
        <div class="ConnectingTip">Connecting...</div>
      </div>
    </Transition>

    <!-- 侧边栏状态按钮 -->
    <div class="MSLeftSidebarControl">
      <MSButton>
        <template #left-icon><Icon height="25" width="25" icon="tabler:layout-sidebar-left-collapse" /></template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'
import MSDropdown from '@comp/ui/MSDropdown/MSDropdown.vue'
import MSButton from '@comp/ui/MSButton.vue'
import MSLoading from '@comp/ui/MSLoading.vue'
import useUserStore from '@store/user.store'
import useSocketStore from '@store/socket.store'

// Types
import type { DropdownOptions } from '@type/ui.type'

const socketStore = useSocketStore()
const userStore = useUserStore()
const router = useRouter()
const currentUser = computed(() => userStore.currentUser!)
const userDropdownOptions: DropdownOptions = [
  {
    type: 'click',
    text: 'View profile',
    onClick: () => {
      router.push({ name: 'user', params: { uid: currentUser.value.uid } })
    }
  },
  {
    type: 'expand',
    text: 'Theme mode',
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
.MSSidebarUserNav {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 calc(var(--u-gap) * 2);
  height: var(--ms-left-sidebar-outer-board-height);

  .SidebarUserNavMainContainer {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .MSSpaceInfo {
      margin-left: calc(var(--u-gap) * 1.2);
      flex-grow: 1;

      .PreferencesDropdown {
        width: fit-content;

        .DropdownTriggerText {
          display: inline-flex;
          align-items: center;

          .UserName {
            font-family: var(--f-rb);
            margin-right: calc(var(--u-gap) * 0.5);
          }

          .iconify {
            vertical-align: middle;
          }
        }
      }

      .MSSpaceStatus {
        user-select: none;
        font-size: 0.85rem;
      }
    }
  }

  .SocketConnecting {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .ConnectingTip {
      margin-left: calc(var(--u-gap) * 1.5);
      font-size: 1.1rem;
      font-family: var(--f-rb);
    }
  }
}
</style>
