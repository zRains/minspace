<template>
  <MSDialog class="MSUserDialog" v-model:visible="showUserDialog" width="560px">
    <!-- Dialog header -->
    <template #header>
      <div class="UserAvatarBox">
        <img class="UserAvatar" src="https://zrain.fun/avatar.png" alt="zRain" />
        <div class="UserDesc">
          <section>zRain</section>
          <section>@zRains_</section>
        </div>
      </div>
    </template>

    <!-- Dialog body -->
    <template #body>
      <div class="UserDialogBodyBox">
        <div class="UserSelfDesc">
          My name is Jeff. I also go by JD if there are too many other Jeffs around. I've been writing software for a long time and have
          spent a good while in the dev tool space. I think a ton about how us developers do our jobs and how we can improve our tools to
          make better software quicker.
        </div>
      </div>
    </template>

    <!-- Dialog operation -->
    <template #operation>
      <div class="UserDialogOperationBox">
        <MSButton class="ReportBtn">
          <template #text>Block or Report</template>
        </MSButton>

        <MSButton class="SendApplicationBtn">
          <template #left-icon><Icon icon="tabler:mail-forward" height="18" /></template>
          <template #text>Send application</template>
        </MSButton>
      </div>
    </template>
  </MSDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSDialog from '../../ui/MSDialog.vue'
import MSButton from '../../ui/MSButton/MSButton.vue'

const showUserDialog = ref(true)
</script>

<style lang="scss">
.MSUserDialog {
  padding-top: 10rem;

  .UserAvatarBox {
    display: flex;
    align-items: center;
    padding: calc(var(--u-gap) * 2);
    border-bottom: 1px solid var(--c-divider-light);
    background-image: url('illustrations/user_info.svg');
    background-size: 180px 120px;
    background-repeat: no-repeat;
    background-position: right top;

    .UserAvatar {
      display: block;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    .UserDesc {
      margin-left: calc(var(--u-gap) * 1.5);
      flex-grow: 1;

      section:nth-child(1) {
        font-family: var(--f-rb);
        font-size: 1.2rem;
      }

      section:nth-child(2) {
        color: var(--c-text-2);
        font-size: 0.95rem;
      }
    }
  }

  .UserDialogBodyBox {
    padding: calc(var(--u-gap) * 3) calc(var(--u-gap) * 2);
    border-bottom: 1px solid var(--c-divider-light);

    .UserSelfDesc {
      font-size: 0.95rem;
    }
  }

  .UserDialogOperationBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: calc(var(--u-gap) * 2);

    .ReportBtn {
      margin-right: calc(var(--u-gap) * 1.5);
      font-size: 0.85rem;
      color: var(--c-text-2);

      &:hover {
        text-decoration: underline;
      }
    }

    .SendApplicationBtn {
      padding: calc(var(--u-gap) * 0.8) calc(var(--u-gap) * 2);
      background-color: var(--c-green);
      border-radius: 5px;
      color: var(--c-bg);
    }
  }
}
</style>
