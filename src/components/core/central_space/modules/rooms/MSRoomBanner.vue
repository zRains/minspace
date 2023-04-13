<template>
  <MSCentralSpaceBanner class="MSRoomBanner">
    <template #banner-info>
      <div class="BannerText">Rooms</div>
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
import MSButton from '@comp/ui/MSButton.vue'
import MSCentralSpaceBanner from '../../MSCentralSpaceBanner.vue'
</script>

<style lang="scss">
.MSRoomBanner {
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
