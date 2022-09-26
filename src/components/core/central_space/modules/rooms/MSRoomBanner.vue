<template>
  <MSCentralSpaceBanner class="MSRoomBanner">
    <template #banner-info>
      <div class="SettingText">Rooms</div>
    </template>

    <template #banner-options>
      <div class="UtilBannerOptions">
        <MSButton>
          <template #text>New Room</template>
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
.MSRoomBanner {
  .SettingText {
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
