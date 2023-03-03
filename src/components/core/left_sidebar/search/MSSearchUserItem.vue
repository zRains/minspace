<template>
  <div class="MSSearchUserItem">
    <div class="UserOverview" @click="activeUserHandle">
      <MSUserAvatar :src="user.avatar" :size="34" />
      <div class="UserInfo">
        <div class="UserName">{{ user.username }}</div>
        <div class="UserUid">#{{ user.uid }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type PropType } from 'vue'
import { findUserResultDto } from '../../../../apis/user.api'
import MSUserAvatar from '../../../ui/MSUserAvatar.vue'
import { coreStateKey } from '../../../../states'

// Router
import router from '../../../../routers'

const {
  leftSidebar: {
    mutations: { changeActiveUserDialog, changeActiveUserCache }
  }
} = inject(coreStateKey)!

const props = defineProps({
  user: {
    type: Object as PropType<findUserResultDto>,
    required: true
  }
})

function activeUserHandle() {
  changeActiveUserCache(props.user)
  router.push({ name: 'users' })
  // changeActiveUserDialog(true)
}
</script>

<style lang="scss">
.MSSearchUserItem {
  border-radius: 5px;
  transition: background-color calc(var(--u-dur) / 2);

  .UserOverview {
    display: flex;
    padding: var(--u-gap);
    cursor: pointer;
    transition: background-color calc(var(--u-dur) / 2);

    .UserInfo {
      flex-grow: 1;
      padding: 0 calc(var(--u-gap));

      .UserName {
        line-height: 18px;
        font-size: 0.9rem;
      }

      .UserUid {
        font-size: 0.75rem;
        color: var(--c-text-2);
      }
    }
  }

  &:hover {
    background-color: var(--c-bg-mute);
  }
}
</style>
