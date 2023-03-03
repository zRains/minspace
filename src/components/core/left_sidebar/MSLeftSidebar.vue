<template>
  <div class="MSLeftSidebar">
    <!-- User top nav -->
    <MSSidebarUserNav />

    <!-- Main sidebar container -->
    <MSScroller class="LeftSidebarMenuContainer" height="calc(100vh - var(--ms-left-sidebar-outer-board-height))">
      <div class="CoreMenu">
        <MSCollapsibleBox :collapsed="activeSearch">
          <!-- Add room button -->
          <MSSidebarMenuItem class="AddRoomBtn">
            <template #icon><Icon height="20" width="20" color="var(--c-brand)" icon="akar-icons:circle-plus-fill" /></template>
            <template #text>New room</template>
          </MSSidebarMenuItem>
        </MSCollapsibleBox>

        <!-- Search -->
        <MSSearchContainer />

        <div class="MenuDivider"></div>

        <!-- Back to home button -->
        <MSSidebarMenuItem
          :class="{ ActivitiesBtn: true, active: currentTab === 'activities' }"
          @click="menuNavigationHandle('activities')"
        >
          <template #icon><Icon height="20" width="20" icon="tabler:atom-2-filled" /></template>
          <template #text>Activities</template>
        </MSSidebarMenuItem>

        <!-- All rooms button -->
        <MSSidebarMenuItem :class="{ RoomsBtn: true, active: currentTab === 'rooms' }" @click="menuNavigationHandle('rooms')">
          <template #icon><Icon height="20" width="20" icon="tabler:box" /></template>
          <template #text>Rooms</template>
        </MSSidebarMenuItem>

        <!-- Notifications button -->
        <MSSidebarMenuItem
          :class="{ NotificationsBtn: true, active: currentTab === 'notifications' }"
          @click="menuNavigationHandle('notifications')"
        >
          <template #icon><Icon height="20" width="20" icon="tabler:bell" /></template>
          <template #text>Notifications</template>
        </MSSidebarMenuItem>

        <!-- Setting button -->
        <MSSidebarMenuItem :class="{ SettingsBtn: true, active: currentTab === 'settings' }" @click="menuNavigationHandle('settings')">
          <template #icon><Icon height="20" width="20" icon="tabler:settings" /></template>
          <template #text>Settings</template>
        </MSSidebarMenuItem>
      </div>

      <div class="SpaceMenu">
        <!-- Rooms -->
        <!-- <MSSidebarSpaceMenu class="SidebarSpaceRoomMenu" text="ROOMS"> </MSSidebarSpaceMenu> -->

        <!-- Users -->
        <MSSidebarSpaceMenu class="SidebarSpaceUserMenu" text="Friends"></MSSidebarSpaceMenu>
      </div>
    </MSScroller>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { coreStateKey } from '../../../states'
import MSSidebarUserNav from './MSSidebarUserNav.vue'
import MSSidebarMenuItem from './MSSidebarMenuItem.vue'
import MSSidebarSpaceMenu from './MSSidebarSpaceMenu.vue'
import MSSearchContainer from './search/MSSearchContainer.vue'
import MSScroller from '../../ui/MSScroller.vue'
import MSCollapsibleBox from '../../ui/MSCollapsibleBox.vue'

// Router
import router from '../../../routers'

type TabFromFunc<T extends Function> = T extends (tab: infer TAB) => any ? TAB : never

const {
  leftSidebar: {
    states: { activeSearch },
    mutations: { changeCurrentTab }
  }
} = inject(coreStateKey)!
const currentTab = computed(() => router.currentRoute.value.name || '')

function menuNavigationHandle(tab: TabFromFunc<typeof changeCurrentTab>) {
  changeCurrentTab(tab)
  router.push({ name: tab })
}
</script>

<style lang="scss">
.MSLeftSidebar {
  position: relative;
  height: 100%;
  width: var(--ms-left-sidebar-width);

  .LeftSidebarMenuContainer {
    position: relative;
    padding: calc(var(--u-gap) * 1.5) var(--u-gap);

    .ActivitiesBtn,
    .RoomsBtn,
    .NotificationsBtn,
    .SettingsBtn {
      &:not(:last-child) {
        margin-bottom: calc(var(--u-gap) * 0.5);
      }
    }

    .MenuDivider {
      height: calc(var(--u-gap) * 2);
    }

    .SpaceMenu {
      margin-top: calc(var(--u-gap) * 2);

      & > *:not(:last-child) {
        margin-bottom: calc(var(--u-gap) * 2);
      }
    }
  }
}
</style>
