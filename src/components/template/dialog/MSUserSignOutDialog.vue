<template>
  <MSDialog class="MSUserSignOutDialog" v-model:visible="dialogVisible" width="480px">
    <!-- Dialog header -->
    <template #header>
      <h1 class="SignOutDialogHeader"><Icon icon="tabler:alert-triangle-filled" width="24" />Confirm sign out operation</h1>
    </template>

    <!-- Dialog body -->
    <template #body>
      <div class="SignOutDialogDetails">
        <div class="Tip">The local personal information of the following user <strong>will be cleared:</strong></div>
        <div class="UserAvatarBox">
          <MSUserAvatar :src="currentUser.avatar" :alt="currentUser.username" :size="60" />
          <div class="UserInfo">
            <span class="UserName">{{ currentUser.username }} </span>
            <span class="UserId">#{{ currentUser.uid }}</span>
          </div>
        </div>
      </div>
    </template>

    <!-- Dialog operation -->
    <template #operation>
      <div class="SignOutDialogOperations">
        <MSButton class="ConfirmBtn" @click="userSignOutHandle">
          <template #text>Confirm</template>
        </MSButton>
        <MSButton class="CancelBtn" @click="dialogVisible = false">
          <template #text>Cancel</template>
        </MSButton>
      </div>
    </template>
  </MSDialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MSDialog from '@comp/ui/MSDialog.vue'
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'
import MSButton from '@comp/ui/MSButton.vue'
import useUserStore from '@store/user.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:visible'])
const dialogVisible = computed({
  get: () => props.visible,
  set: (v) => emit('update:visible', v)
})
const currentUser = computed(() => userStore.currentUser!)

async function userSignOutHandle() {
  await router.replace({ name: 'auth' })
  userStore.cleanCurrentUser()
}
</script>

<style lang="scss">
.MSUserSignOutDialog .MSDialog {
  margin: 10rem auto auto auto;

  .SignOutDialogHeader {
    margin: 0;
    padding: calc(var(--u-gap) * 2);
    font-size: 1.15rem;
    font-family: var(--f-rb);
    border-bottom: 1px solid var(--c-divider-light);

    .iconify {
      margin-right: var(--u-gap);
      color: var(--c-yellow);
      vertical-align: -0.3rem;
    }
  }

  .SignOutDialogDetails {
    padding: calc(var(--u-gap) * 2);
    border-bottom: 1px solid var(--c-divider-light);

    .Tip strong {
      font-family: var(--f-rbi);
    }

    .UserAvatarBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: calc(var(--u-gap) * 2);

      .UserInfo {
        span {
          display: block;
          text-align: center;
        }

        .UserName {
          margin-top: var(--u-gap);
          font-size: 1.1rem;
          font-family: var(--f-rb);
        }

        .UserId {
          font-size: 1rem;
          font-family: var(--f-b);
          color: var(--c-text-2);
        }
      }
    }
  }

  .SignOutDialogOperations {
    display: flex;
    justify-content: center;
    padding: calc(var(--u-gap) * 2);
    justify-content: center;

    .MSButton {
      padding: calc(var(--u-gap) * 0.7) calc(var(--u-gap) * 6);
      border-radius: 5px;
      font-size: 0.9rem;

      &.ConfirmBtn {
        color: var(--c-white);
        background-color: var(--c-green);
      }

      &.CancelBtn {
        background-color: var(--c-gray-light-4);
      }

      &:not(:last-child) {
        margin-right: var(--u-gap);
      }
    }
  }
}
</style>
