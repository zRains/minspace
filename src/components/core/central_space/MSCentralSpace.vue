<template>
  <div class="MSCentralSpace">
    <MSMessengerContainer v-if="currentTab === 'messenger'" />
    <MSSettingContainer v-if="currentTab === 'settings'" />
    <MSNotificationContainer v-if="currentTab === 'notifications'" />
    <MSRoomContainer v-if="currentTab === 'rooms'" />
    <MSActivitiesContainer v-if="currentTab === 'activities'" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import MSMessengerContainer from './modules/messengers/MSMessengerContainer.vue'
import MSSettingContainer from './modules/settings/MSSettingContainer.vue'
import MSNotificationContainer from './modules/notifications/MSNotificationContainer.vue'
import MSRoomContainer from './modules/rooms/MSRoomContainer.vue'
import MSActivitiesContainer from './modules/activities/MSActivitiesContainer.vue'
import { coreStateKey } from '../../../states'

const {
  space: {
    states: { currentTab }
  }
} = inject(coreStateKey)!
</script>

<style lang="scss">
.MSCentralSpace {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
