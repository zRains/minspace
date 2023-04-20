<template>
  <div class="MSSettingSidebar">
    <!-- 用户信息配置 -->
    <MSButton class="SettingNavBtn activated">
      <template #text>Profile</template>
      <template #left-icon><Icon icon="tabler:user-circle" width="20" /></template>
    </MSButton>

    <!-- 应用外观配置 -->
    <MSButton class="SettingNavBtn">
      <template #text>Appearance</template>
      <template #left-icon><Icon icon="tabler:brush" width="20" /></template>
    </MSButton>

    <!-- 消息通知配置 -->
    <MSButton class="SettingNavBtn">
      <template #text>Notification</template>
      <template #left-icon><Icon icon="tabler:bell" width="20" /></template>
    </MSButton>

    <!-- 用户隐私配置 -->
    <MSButton class="SettingNavBtn">
      <template #text>Accessibility</template>
      <template #left-icon><Icon icon="tabler:accessible" width="20" /></template>
    </MSButton>
  </div>
</template>

<script setup lang="ts">
import MSButton from '@comp/ui/MSButton.vue'
</script>

<style lang="scss">
.MSSettingSidebar {
  --setting-sidebar-width: 220px;

  padding: var(--u-gap);
  flex-shrink: 0;
  height: 100%;
  width: var(--setting-sidebar-width);
  border-right: 1px solid var(--c-divider-light);

  .SettingNavBtn {
    margin: 0 auto;
    padding: calc(var(--u-gap) * 0.7) 0;
    padding-left: calc(var(--u-gap) * 1.5);
    width: 100%;
    border-radius: 5px;
    font-size: 0.95rem;
    transition: background-color calc(var(--u-dur) * 0.5);

    .iconify {
      color: var(--c-text-2);
    }

    &.activated {
      font-family: var(--f-rb);
      background-color: var(--c-bg-mute);
    }

    &:hover {
      background-color: var(--c-bg-mute);
    }

    &:not(:last-child) {
      margin-bottom: calc(var(--u-gap) * 0.5);
    }
  }
}
</style>
