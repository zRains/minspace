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
    margin: auto calc(var(--u-gap) * 2);
    font-size: 1.1rem;
    font-family: var(--f-rb);
    text-transform: uppercase;
  }

  .UtilBannerOptions {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
