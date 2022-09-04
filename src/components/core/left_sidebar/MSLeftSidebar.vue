<template>
  <div class="MSLeftSidebar">
    <MSOuterBoardVue />
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

      <div class="MSSidebarMenuDivider"></div>

      <!-- Back to home button -->
      <MSSidebarMenuItem class="BackToHomeBtn">
        <template #icon><Icon height="20" width="20" icon="tabler:home" /></template>
        <template #text>Home</template>
      </MSSidebarMenuItem>

      <!-- All rooms button -->
      <MSSidebarMenuItem class="AllRoomsBtn">
        <template #icon><Icon height="20" width="20" icon="tabler:box" /></template>
        <template #text>All rooms</template>
      </MSSidebarMenuItem>

      <!-- Notifications button -->
      <MSSidebarMenuItem class="NotificationsBtn">
        <template #icon><Icon height="20" width="20" icon="tabler:bell" /></template>
        <template #text>Notifications</template>
      </MSSidebarMenuItem>

      <!-- Setting button -->
      <MSSidebarMenuItem class="SettingBtn">
        <template #icon><Icon height="20" width="20" icon="tabler:settings" /></template>
        <template #text>Setting</template>
      </MSSidebarMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import MSOuterBoardVue from './MSOuterBoard.vue'
import MSSidebarMenuItem from './MSSidebarMenuItem.vue'
</script>

<style lang="scss">
.MSLeftSidebar {
  height: 100%;
  width: var(--ms-left-sidebar-width);

  .MSCoreMenu {
    padding: var(--u-gap) 0;

    .MSSidebarMenuDivider {
      margin: calc(var(--u-gap) * 1.5) 0;
    }
  }
}
</style>
