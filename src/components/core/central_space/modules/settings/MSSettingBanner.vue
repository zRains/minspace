<template>
  <MSCentralSpaceBanner class="MSSettingBanner">
    <template #banner-info>
      <div class="BannerText">Settings</div>
    </template>

    <template #banner-options>
      <div class="UtilBannerOptions">
        <MSButton class="SaveBtn">
          <template #text>Save</template>
        </MSButton>
      </div>
    </template>
  </MSCentralSpaceBanner>
</template>

<script setup lang="ts">
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
import MSButton from '../../../../ui/MSButton.vue'
</script>

<style lang="scss">
.MSSettingBanner {
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
    margin-right: calc(var(--u-gap) * 2);
    height: 100%;

    .SaveBtn {
      padding: calc(var(--u-gap) * 0.5) calc(var(--u-gap) * 2);
      background-color: var(--c-green);
      color: var(--c-bg);
      border-radius: 3px;
      font-size: 0.9rem;
    }
  }
}
</style>
