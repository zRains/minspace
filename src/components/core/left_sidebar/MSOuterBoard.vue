<template>
  <div class="MSOuterBoard">
    <MSUserAvatar src="https://zrain.fun/favicon.ico" />
    <div class="MSSpaceInfo">
      <MSDropdown class="MSUserInfo">
        <template #trigger>
          <div class="UserName">Buzzfeed</div>
          <Icon icon="tabler:chevron-down" />
        </template>
      </MSDropdown>
      <div class="MSSpaceStatus">45 rooms online</div>
    </div>
    <div class="MSLeftSidebarControl"><Icon height="25" width="25" icon="tabler:layout-sidebar-left-collapse" /></div>
  </div>
</template>

<script setup lang="ts">
import MSUserAvatar from '../../ui/MSUserAvatar.vue'
import MSDropdown from '../../ui/MSDropdown.vue'
</script>

<style lang="scss">
.MSOuterBoard {
  display: flex;
  align-items: center;
  padding: 0 calc(var(--u-gap) * 2);
  height: var(--ms-left-sidebar-outer-board-height);

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
