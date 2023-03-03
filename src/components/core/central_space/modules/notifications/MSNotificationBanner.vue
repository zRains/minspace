<template>
  <MSCentralSpaceBanner class="MSNotificationBanner">
    <template #banner-info>
      <div class="BannerText">Notifications</div>
    </template>

    <template #banner-options>
      <div class="UtilBannerOptions">
        <MSButton>
          <template #text>Save</template>
        </MSButton>
      </div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
import MSButton from '../../../../ui/MSButton/MSButton.vue'
</script>

<style lang="scss">
.MSNotificationBanner {
  .BannerText {
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
