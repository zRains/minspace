<template>
  <div class="MSSidebarSpaceMenu">
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
      <!-- <MSSidebarSpaceUserItem
        avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        user-name="Jeff"
      /> -->
      <MSSidebarSpaceUserItem
        avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        user-name="Jeff"
        @click="changeCurrentTab('messenger')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import MSButton from '../../ui/MSButton/MSButton.vue'
import MSSidebarSpaceUserItem from './MSSidebarSpaceUserItem.vue'
import { coreStateKey } from '../../../states'

const {
  space: {
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

.MSSidebarSpaceMenu {
  .MenuBanner {
    display: flex;
    height: $banner-height;
    line-height: $banner-height;
    font-size: 0.8rem;
    color: var(--c-text-2);

    .BannerText {
      flex-grow: 1;
      font-family: var(--f-rb);
    }

    .BannerOptions > .MSButton {
      height: $banner-height;
      line-height: $banner-height;
      padding: 0 calc(var(--u-gap) * 0.8);
      background-color: var(--c-bg-mute);
      border-radius: 3px;

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
