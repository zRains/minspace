<template>
  <MSCentralSpaceBanner class="MSActivitiesBanner">
    <template #banner-info>
      <div class="SettingText">Activities</div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
</script>

<style lang="scss">
.MSActivitiesBanner {
  .SettingText {
    margin: auto var(--u-gap);
    font-size: 1.1rem;
    font-family: var(--f-rb);
  }

  .UtilBannerOptions {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
