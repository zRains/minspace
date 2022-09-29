<template>
  <div class="MSFriendApplicationPlane">
    <div class="PlaneBanner">New friend application</div>
    <div class="PlaneSketch">
      <div class="EmailIcon">
        <Icon height="24" width="24" icon="tabler:mail" />
      </div>
      <Icon class="ArrowIcon" height="30" width="30" icon="tabler:arrow-narrow-right" />
      <MSUserAvatar :src="currentFriendApplicationReceiver.avatar" :size="36" />
    </div>
    <div class="ApplicationMessage">Say hello to {{ currentFriendApplicationReceiver.username }}</div>
    <div class="ApplicationOptions">
      <MSButton class="SendApplicationBtn">
        <template #text>Send</template>
      </MSButton>
      <MSButton class="CancelBtn" @click="cancelHandle">
        <template #text>Cancel</template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { coreStateKey } from '../../../../states'
import MSButton from '../../../ui/MSButton/MSButton.vue'
import MSUserAvatar from '../../../ui/MSUserAvatar.vue'

const {
  leftSidebar: {
    states: { currentFriendApplicationReceiver },
    mutations: { changeActiveOuterPlane }
  }
} = inject(coreStateKey)!

function cancelHandle() {
  changeActiveOuterPlane(false)
}
</script>

<style lang="scss">
.MSFriendApplicationPlane {
  .PlaneBanner {
    font-family: var(--f-rb);
    font-size: 0.9rem;
    color: var(--c-text-2);
  }

  .PlaneSketch {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(var(--u-gap) * 3) 0;

    .EmailIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      color: var(--c-bg);
      border-radius: 50%;
      background-color: var(--c-green);
    }

    .ArrowIcon {
      margin: 0 calc(var(--u-gap) * 3);
      color: var(--c-green);
    }
  }

  .ApplicationMessage {
    margin-bottom: calc(var(--u-gap) * 3);
    height: 100px;
    line-height: 100px;
    color: var(--c-text-2);
    font-family: var(--f-rb);
    background-color: var(--c-bg-mute);
    text-align: center;
    border-radius: 5px;
  }

  .ApplicationOptions {
    .MSButton {
      width: 100%;
      padding: calc(var(--u-gap) * 0.5);
      text-align: center;
      font-size: 0.9rem;
      border-radius: 5px;

      &.SendApplicationBtn {
        color: var(--c-bg);
        background-color: var(--c-green);
      }

      &.CancelBtn {
        color: var(--c-text-2);
        background-color: var(--c-bg-mute);
      }

      &:not(:last-child) {
        margin-bottom: var(--u-gap);
      }
    }
  }
}
</style>
