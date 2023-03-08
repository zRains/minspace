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
  flex-shrink: 0;
  height: var(--ms-left-central-banner-height);
  border-bottom: 1px solid var(--c-divider-light);
  background-color: var(--c-bg);

  .BannerInfo {
    margin-left: calc(var(--u-gap) * 2);
  }

  .BannerOptions {
    margin-left: auto;
  }
}
</style>
