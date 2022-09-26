<template>
  <div :class="{ MSSearchContainer: true, activeSearch }">
    <MSSidebarMenuItem @click="activeSearchHandle">
      <template #icon><Icon height="20" width="20" icon="tabler:search" /></template>
      <template #text>Search</template>
    </MSSidebarMenuItem>

    <MSInput
      v-model:value="searchValue"
      input-type="search"
      size="large"
      placeholder="Search user..."
      cleanable
      ref="inputRef"
      background-color="var(--c-bg-mute)"
      border-color="var(--c-bg-mute)"
    />

    <div class="SearchResultContainer">
      <div class="SearchOption">
        <MSButton class="CancelSearchBtn" @click="activeSearch = false">
          <template #left-icon><Icon icon="tabler:zoom-cancel" /></template>
          <template #text>Cancel Search</template>
        </MSButton>
      </div>
      <ul class="UserResult ResetList">
        <li><MSSearchUserItem /></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSInput from '../../../ui/MSInput.vue'
import MSSidebarMenuItem from '../MSSidebarMenuItem.vue'
import MSSearchUserItem from './MSSearchUserItem.vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'

const inputRef = ref<HTMLElement & { focusInput: () => {} }>()
const searchValue = ref('')
const activeSearch = ref(false)

function activeSearchHandle() {
  activeSearch.value = true
  setTimeout(() => {
    inputRef.value!.focusInput()
  }, 100)
}
</script>

<style lang="scss">
.MSSearchContainer {
  position: relative;
  margin: calc(var(--u-gap) * 1.5) 0;
  padding: 0 calc(var(--u-gap) * 2);
  height: 200px;

  .MSSidebarMenuItem {
    width: 100%;
    margin: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity var(--u-dur), visibility var(--u-dur);
  }

  .MSInput {
    position: absolute;
    left: calc(var(--u-gap) * 2);
    right: calc(var(--u-gap) * 2);
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--u-dur), visibility var(--u-dur);
  }

  .SearchResultContainer {
    padding: 0 calc(var(--u-gap) * 0.5);

    .SearchOption {
      .MSButton {
        font-size: 0.8rem;
        color: var(--c-text-2);
      }
    }

    .UserResult {
      padding: var(--u-gap) 0;

      li:not(:last-child) {
        margin-bottom: var(--u-gap);
      }
    }
  }

  &.activeSearch {
    .MSSidebarMenuItem {
      opacity: 0;
      visibility: hidden;
    }

    .MSInput {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
