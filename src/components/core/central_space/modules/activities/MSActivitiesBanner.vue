<template>
  <MSCentralSpaceBanner class="MSActivitiesBanner">
    <template #banner-info>
      <div class="BannerText">Activities</div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
</script>

<style lang="scss">
.MSActivitiesBanner {
  .BannerText {
    display: flex;
    align-items: center;
    height: 100%;
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
