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
import { useRouter } from 'vue-router'
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'

// Types
import type { PropType } from 'vue'
import type { findUserResultScheme } from '@type/user.type'

const router = useRouter()
const props = defineProps({
  user: {
    type: Object as PropType<findUserResultScheme>,
    required: true
  }
})

function activeUserHandle() {
  router.push({ name: 'user', params: { uid: props.user.uid } })
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
