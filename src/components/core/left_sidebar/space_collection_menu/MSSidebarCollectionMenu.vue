<template>
  <div class="MSSidebarCollectionMenu">
    <div class="MenuBanner" aria-haspopup="true" :aria-expanded="isExpand" :aria-label="(text || 'MS dropdown') + 'space menu'">
      <div class="BannerText">{{ text }}</div>
      <div class="BannerOptions">
        <MSButton class="SidebarSpaceMenuFold" @click="isExpand = !isExpand" no-text>
          <template #left-icon><Icon :class="{ isExpand }" icon="tabler:chevron-down" /></template>
        </MSButton>
        <MSButton class="SidebarSpaceMenuAdd">
          <template #left-icon><Icon icon="tabler:plus" /></template>
          <template #text>Add</template>
        </MSButton>
      </div>
    </div>
    <div class="MenuContainer">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import { coreStateKey } from '../../../../states'

const {
  leftSidebar: {
    mutations: { changeCurrentTab }
  }
} = inject(coreStateKey)!

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Undefined'
  },
  expand: {
    type: Boolean,
    required: false,
    default: true
  }
})

const isExpand = ref(props.expand)
</script>

<style lang="scss">
$banner-height: 22px;

.MSSidebarCollectionMenu {
  .MenuBanner {
    display: flex;
    height: $banner-height;
    line-height: $banner-height;

    .BannerText {
      font-size: 0.9rem;
      color: var(--c-text-2);
      flex-grow: 1;
      font-family: var(--f-rb);
    }

    .BannerOptions > .MSButton {
      height: $banner-height;
      line-height: $banner-height;
      padding: 0 calc(var(--u-gap) * 0.8);
      background-color: var(--c-bg-mute);
      border-radius: 3px;
      font-size: 0.8rem;

      &.SidebarSpaceMenuAdd {
        color: var(--c-green);
        background-color: var(--c-green-op);
      }

      &.SidebarSpaceMenuFold .iconify {
        transform: rotate(0);
        transition: transform var(--u-dur);

        &.isExpand {
          transform: rotate(180deg);
        }
      }

      &:not(:last-child) {
        margin-right: calc(var(--u-gap) * 0.8);
      }
    }
  }

  .MenuContainer {
    padding: var(--u-gap) 0;
  }
}
</style>
