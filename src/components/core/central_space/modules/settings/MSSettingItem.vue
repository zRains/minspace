<template>
  <div class="MSSettingItem">
    <div class="SettingProperty">{{ property }}</div>
    <div class="SettingContent">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  property: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.MSSettingItem {
  .SettingProperty {
    position: relative;
    margin-bottom: calc(var(--u-gap) * 2);
    padding-left: 12px;
    font-size: 0.95rem;
    font-family: var(--f-rb);

    &::before {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 6px;
      height: 90%;
      border-radius: 2px;
      background-color: var(--c-green);
    }
  }
}
</style>
