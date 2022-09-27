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

    <div class="SearchResultContainer">
      <div class="SearchOption">
        <MSButton class="CancelSearchBtn" @click="changeActiveSearch(false)">
          <template #left-icon><Icon icon="tabler:zoom-cancel" /></template>
          <template #text>Cancel Search</template>
        </MSButton>
      </div>
      <ul class="UserResult ResetList">
        <li v-for="user in searchResult.user" :key="user.uid"><MSSearchUserItem :user="user" /></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import MSInput from '../../../ui/MSInput.vue'
import MSSidebarMenuItem from '../MSSidebarMenuItem.vue'
import MSSearchUserItem from './MSSearchUserItem.vue'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import { searchUser } from '../../../../apis/user.api'
import type { findUserResultDto } from '../../../../apis/user.api'
import { coreStateKey } from '../../../../states'

const {
  space: {
    states: { activeSearch },
    mutations: { changeActiveSearch }
  }
} = inject(coreStateKey)!

const inputRef = ref<HTMLElement & { focusInput: () => {} }>()
const searchValue = ref('')
const searchResult = reactive<{ user: findUserResultDto[] }>({
  user: []
})

function activeSearchHandle() {
  changeActiveSearch(true)
  setTimeout(() => {
    inputRef.value!.focusInput()
  }, 100)
}

async function searchHandle() {
  if (searchValue.value.length > 0) {
    // User search
    const { succeed: isFindUserSucceed, data: findUserData } = await searchUser({ keyword: searchValue.value })

    // Room search

    if (isFindUserSucceed) searchResult.user = findUserData
  } else changeActiveSearch(false)
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
