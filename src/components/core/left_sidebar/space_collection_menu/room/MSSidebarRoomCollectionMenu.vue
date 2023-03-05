<template>
  <MSSidebarCollectionMenu class="SidebarSpaceUserMenu" text="Rooms">
    <MSSidebarSpaceRoomItem cover="https://avatars.githubusercontent.com/u/42048915?s=200&v=4" room-name="Deno land" active />
    <!-- <MSSidebarSpaceRoomItem cover="https://avatars.githubusercontent.com/u/9950313?s=200&v=4" room-name="Art of Node" /> -->
  </MSSidebarCollectionMenu>
</template>

<script setup lang="ts">
import MSSidebarSpaceRoomItem from './MSSidebarSpaceRoomItem.vue'
import MSSidebarCollectionMenu from '../MSSidebarCollectionMenu.vue'
</script>

<style lang="scss"></style>
