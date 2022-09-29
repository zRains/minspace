<template>
  <div :class="{ MSSearchContainer: true, activeSearch }">
    <MSSidebarMenuItem @click="activeSearchHandle">
      <template #icon><Icon height="20" width="20" icon="tabler:search" /></template>
      <template #text>Search</template>
    </MSSidebarMenuItem>

    <MSInput
      v-model:value="searchValue"
      @keydown.enter="searchHandle"
      input-type="search"
      size="large"
      placeholder="Search user..."
      cleanable
      ref="inputRef"
      background-color="var(--c-bg-mute)"
      border-color="var(--c-bg-mute)"
    />

    <MSCollapsibleBox class="SearchResultContainer" :collapsed="!activeSearch" :disable="!searchResultCollapsible">
      <div class="SearchOption">
        <MSButton class="CancelSearchBtn" @click="cancelSearchHandle">
          <template #left-icon><Icon icon="tabler:zoom-cancel" /></template>
          <template #text>Cancel</template>
        </MSButton>
      </div>

      <MSResult v-if="initialize" :size="40" :icon="'tabler:user-search'" :tip="'Get your new friends'" />
      <MSResult v-else-if="searching" :size="40" :tip="'Searching...'" result-type="loading" />
      <MSResult v-else-if="!initialize && searchResult.user.length === 0" :size="40" result-type="empty" :tip="'No such user(s)'" />
      <MSUserResult :users="searchResult.user" />
    </MSCollapsibleBox>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import MSInput from '../../../ui/MSInput.vue'
import MSSidebarMenuItem from '../MSSidebarMenuItem.vue'
import MSUserResult from './MSUserResult.vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import MSResult from '../../../ui/MSResult.vue'
import { searchUser } from '../../../../apis/user.api'
import type { findUserResultDto } from '../../../../apis/user.api'
import { coreStateKey } from '../../../../states'
import MSCollapsibleBox from '../../../ui/MSCollapsibleBox.vue'

const {
  leftSidebar: {
    states: { activeSearch },
    mutations: { changeActiveSearch }
  }
} = inject(coreStateKey)!

const inputRef = ref<HTMLElement & { focusInput: () => {} }>()
const searchValue = ref('')
const searching = ref(false)
const initialize = ref(true)
const searchResultCollapsible = ref(true)
const searchResult = reactive<{ user: findUserResultDto[] }>({
  user: []
})

function activeSearchHandle() {
  searchResultCollapsible.value = true
  changeActiveSearch(true)
  setTimeout(() => {
    inputRef.value!.focusInput()
  }, 100)
}

async function searchHandle() {
  searchResultCollapsible.value = true
  initialize.value = false
  if (searchValue.value.length > 0) {
    searching.value = true
    // User search
    const { succeed: isFindUserSucceed, data: findUserData } = await searchUser({ keyword: searchValue.value })

    // Room search

    if (isFindUserSucceed) searchResult.user = findUserData

    if (findUserData.length !== 0) {
      setTimeout(() => {
        searchResultCollapsible.value = false
      }, 200)
    }

    searching.value = false
  } else changeActiveSearch(false)
}

function cancelSearchHandle() {
  searchResultCollapsible.value = true
  changeActiveSearch(false)
  setTimeout(() => {
    initialize.value = true
    searchValue.value = ''
    searchResult.user = []
  }, 200)
}
</script>

<style lang="scss">
.MSSearchContainer {
  position: relative;

  .MSSidebarMenuItem {
    width: 100%;
    margin: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity var(--u-dur), visibility var(--u-dur);
  }

  .MSInput {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--u-dur), visibility var(--u-dur);
  }

  .SearchResultContainer {
    .SearchOption {
      padding: 0 var(--u-gap);

      .MSButton {
        background-color: transparent;
        font-size: 0.8rem;
        color: var(--c-text-2);
      }
    }

    .MSResult {
      padding: calc(var(--u-gap) * 2);
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
