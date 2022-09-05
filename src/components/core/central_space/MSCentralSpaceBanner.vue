<template>
  <div class="MSCentralSpaceBanner">
    <div class="BannerInfo">
      <slot name="banner-info"></slot>
    </div>
    <div class="BannerOptions">
      <slot name="banner-options"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSCentralSpaceBanner {
  display: flex;
  padding: 14px calc(var(--u-gap) * 2);
  border-bottom: 1px solid var(--c-divider-light);

  .BannerInfo {
    display: flex;
    line-height: 32px;
  }
}
</style>
