<template>
  <div class="MSUserInfo">
    <section class="UserAvatarBox">
      <img class="UserAvatar" :src="activeUserCache.avatar" :alt="activeUserCache.username" />
      <div class="UserDesc">
        <section>{{ activeUserCache.username }}</section>
        <section>
          <span>@{{ activeUserCache.username }}</span>
        </section>
      </div>
      <div class="UserOption">
        <MSButton class="SendApplicationBtn">
          <template #left-icon><Icon icon="tabler:mail-forward" height="18" /></template>
          <template #text>Send application</template>
        </MSButton>
        <MSButton class="ReportBtn">
          <template #text>Block or Report</template>
        </MSButton>
        <MSButton class="CopyIdBtn">
          <template #left-icon><Icon icon="tabler:id" /></template>
          <template #text>#{{ activeUserCache.uid }}</template>
        </MSButton>
      </div>
    </section>

    <div class="UserDialogBodyBox">
      <div class="UserSelfDesc">
        <p>👋 Hello</p>
        <p>
          {{ activeUserCache.sign }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount } from 'vue'
import MSButton from '@comp/ui/MSButton.vue'
import storage from '@util/storage'
import { coreStateKey } from '../../../../../states'

const {
  leftSidebar: {
    states: { activeUserCache }
  }
} = inject(coreStateKey)!

onBeforeUnmount(() => {
  storage.del('activeUserCache')
})
</script>

<style lang="scss">
.MSUserInfo {
  display: flex;
  flex-direction: column;
  height: 100%;
  --avatar-height: 100px;
  --avatar-box-height: calc(var(--avatar-height) * 0.5 + var(--avatar-box-bg-height));
  --avatar-box-bg-height: 80px;

  .UserAvatarBox {
    position: relative;
    height: var(--avatar-box-height);
    flex-shrink: 0;

    .UserAvatar {
      position: absolute;
      bottom: 0;
      left: calc(var(--avatar-box-bg-height) - var(--avatar-height) * 0.5);
      height: var(--avatar-height);
      width: var(--avatar-height);
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .UserDesc {
      position: absolute;
      display: flex;
      text-align: center;
      width: 100%;
      top: calc(var(--avatar-box-bg-height) - 24px - var(--u-gap));
      padding-left: calc(var(--avatar-box-bg-height) + var(--avatar-height) * 0.5 + var(--u-gap) * 1.5);

      section:nth-child(1) {
        font-family: var(--f-rb);
        font-size: 1.5rem;
        line-height: 100%;
      }

      section:nth-child(2) {
        margin-left: var(--u-gap);
        color: var(--c-text-2);
        font-size: 0.95rem;
        line-height: 100%;

        span {
          vertical-align: -0.4rem;
        }
      }
    }

    .UserOption {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      top: calc(var(--avatar-box-bg-height) + var(--u-gap));
      padding-left: calc(var(--avatar-box-bg-height) + var(--avatar-height) * 0.5 + var(--u-gap) * 1.5);

      .ReportBtn,
      .CopyIdBtn {
        font-size: 0.85rem;
        color: var(--c-text-2);

        &:hover {
          text-decoration: underline;
        }
      }

      .CopyIdBtn {
        font-family: var(--f-rb);
        margin-left: auto;
        padding: 0 calc(var(--u-gap) * 2);
      }

      .SendApplicationBtn {
        margin-right: calc(var(--u-gap) * 1.5);
        padding: calc(var(--u-gap) * 0.6) calc(var(--u-gap) * 2);
        background-color: var(--c-green);
        font-size: 0.9rem;
        border-radius: 5px;
        color: var(--c-bg);
      }
    }

    &::before {
      box-sizing: border-box;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: var(--avatar-box-bg-height);
      width: 100%;
      border-bottom: 1px solid var(--c-divider-light);
      background-color: var(--c-bg-soft);
      background-image: url('/illustrations/user_info.svg');
      background-size: 180px 120px;
      background-repeat: no-repeat;
      background-position: right -20px;
      z-index: -1;
      pointer-events: none;
    }
  }

  .UserDialogBodyBox {
    box-sizing: content-box;
    padding: 0 calc(var(--u-gap) * 2);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    flex-grow: 1;

    .UserSelfDesc {
      p {
        margin: 0;

        &:nth-child(1) {
          margin-bottom: var(--u-gap);
          font-family: var(--f-rb);
          font-size: 1.3rem;
        }

        &:nth-child(2) {
          font-size: 0.95rem;
        }
      }
    }
  }
}
</style>
