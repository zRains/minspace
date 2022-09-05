<template>
  <div class="MSMainLayout">
    <!-- Left sidebar -->
    <div class="LeftSideBarContainer">
      <slot name="LeftSideBar" />
    </div>

    <!-- Central space -->
    <div class="CentralSpaceContainer">
      <slot name="CentralSpace" />
    </div>

    <!-- Right sidebar -->
    <div class="RightSideBarContainer">
      <slot name="RightSideBar" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSMainLayout {
  display: flex;
  min-height: 100vh;

  .LeftSideBarContainer {
    width: var(--ms-left-sidebar-width);
  }

  .CentralSpaceContainer {
    flex-grow: 1;
  }
}
</style>
