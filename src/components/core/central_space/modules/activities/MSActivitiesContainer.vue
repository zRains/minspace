<template>
  <div class="MSActivitiesContainer">
    <MSActivitiesBanner />

    <div class="ActivitiesMainBox">
      <MSResult image="/illustrations/space_activities.svg" tip="No Activities~" :size="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MSActivitiesBanner from './MSActivitiesBanner.vue'
import MSResult from '@comp/ui/MSResult.vue'
</script>

<style lang="scss">
.MSActivitiesContainer {
  height: 100%;

  .ActivitiesMainBox {
    padding-top: 10rem;
    height: calc(100% - var(--ms-left-central-banner-height));
  }
}
</style>
