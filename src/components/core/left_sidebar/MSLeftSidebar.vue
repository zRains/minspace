<template>
  <div class="MSLeftSidebar">
    <MSSidebarUserNav />
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
        <MSSidebarMenuItem class="ActivitiesBtn" @click="changeCurrentTab('activities')">
          <template #icon><Icon height="20" width="20" icon="tabler:box" /></template>
          <template #text>Activities</template>
        </MSSidebarMenuItem>

        <!-- All rooms button -->
        <MSSidebarMenuItem class="RoomsBtn" @click="changeCurrentTab('rooms')">
          <template #icon><Icon height="20" width="20" icon="tabler:box-model" /></template>
          <template #text>Rooms</template>
        </MSSidebarMenuItem>

        <!-- Notifications button -->
        <MSSidebarMenuItem class="NotificationsBtn" @click="changeCurrentTab('notifications')">
          <template #icon><Icon height="20" width="20" icon="tabler:bell" /></template>
          <template #text>Notifications</template>
        </MSSidebarMenuItem>

        <!-- Setting button -->
        <MSSidebarMenuItem class="SettingsBtn" @click="changeCurrentTab('settings')">
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
    <MSSidebarOuterPlane />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { coreStateKey } from '../../../states'
import MSSidebarUserNav from './MSSidebarUserNav.vue'
import MSSidebarMenuItem from './MSSidebarMenuItem.vue'
import MSSidebarSpaceMenu from './MSSidebarSpaceMenu.vue'
import MSSearchContainer from './search/MSSearchContainer.vue'
import MSScroller from '../../ui/MSScroller.vue'
import MSCollapsibleBox from '../../ui/MSCollapsibleBox.vue'
import MSSidebarOuterPlane from './outer_plane/MSSidebarOuterPlane.vue'

const {
  leftSidebar: {
    states: { activeSearch },
    mutations: { changeCurrentTab }
  }
} = inject(coreStateKey)!
</script>

<style lang="scss">
.MSLeftSidebar {
  position: relative;
  height: 100%;
  width: var(--ms-left-sidebar-width);
  border-right: 1px solid var(--c-divider-light);

  .LeftSidebarMenuContainer {
    position: relative;

    .MenuDivider {
      margin: calc(var(--u-gap) * 1.5) 0;
    }

    .CoreMenu,
    .SpaceMenu {
      position: relative;
      margin-top: calc(var(--u-gap) * 1.5);
      padding: 0 calc((var(--u-gap)) * 2 - var(--scrollable-patch)) 0 calc((var(--u-gap)) * 2);
      background-color: var(--c-bg);
      z-index: 1;
    }

    .SpaceMenu > *:not(:last-child) {
      margin-bottom: calc(var(--u-gap) * 2);
    }
  }
}
</style>
