<template>
  <div class="MSLeftSidebar">
    <MSOuterBoard />
    <div class="MSCoreMenu">
      <!-- Add room button -->
      <MSSidebarMenuItem class="AddRoomBtn">
        <template #icon><Icon height="20" width="20" color="var(--c-brand)" icon="akar-icons:circle-plus-fill" /></template>
        <template #text>New room</template>
      </MSSidebarMenuItem>

      <!-- Search button -->
      <MSSidebarMenuItem class="SearchBtn">
        <template #icon><Icon height="20" width="20" icon="tabler:search" /></template>
        <template #text>Search</template>
      </MSSidebarMenuItem>

      <div class="MSSidebarDivider"></div>

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

    <div class="MSSidebarDivider"></div>

    <div class="MSSpaceMenu">
      <!-- Rooms -->
      <!-- <MSSidebarSpaceMenu class="SidebarSpaceRoomMenu" text="ROOMS"> </MSSidebarSpaceMenu> -->

      <!-- Users -->
      <MSSidebarSpaceMenu class="SidebarSpaceUserMenu" text="USERS"></MSSidebarSpaceMenu>
    </div>

    <!-- <MSLoading/> -->
    <MSEmpty />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { coreStateKey } from '../../../states'
import MSEmpty from '../../ui/MSEmpty.vue'
import MSOuterBoard from './MSOuterBoard.vue'
import MSSidebarMenuItem from './MSSidebarMenuItem.vue'
import MSSidebarSpaceMenu from './MSSidebarSpaceMenu.vue'

const {
  space: {
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

  .MSSidebarDivider {
    margin: calc(var(--u-gap) * 1.5) 0;
  }

  .MSCoreMenu,
  .MSSpaceMenu {
    position: relative;
    padding: var(--u-gap) 0;
    z-index: 1;
  }

  .MSSpaceMenu > *:not(:last-child) {
    margin-bottom: calc(var(--u-gap) * 2);
  }
}
</style>
