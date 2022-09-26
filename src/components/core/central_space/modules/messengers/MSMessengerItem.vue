<template>
  <div :class="{ MSMessengerItem: true, SelfMessageItem: selfMessage }">
    <div class="MessageAvatar">
      <MSUserAvatar :src="avatar" :alt="userName" />
    </div>
    <div class="MessageBody">
      <div class="MessageBanner">
        <div class="MessageSenderName">{{ userName }}</div>
        <div class="MessageBannerSplitDot"></div>
        <div class="MessageSendTime">{{ getRelativeTime(sendTime) }}</div>
      </div>
      <div class="MessageContent">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRelativeTime } from '../../../../../utils/helpers'
import MSUserAvatar from '../../../../ui/MSUserAvatar.vue'

defineProps({
  selfMessage: {
    type: Boolean,
    required: false,
    default: false
  },
  avatar: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sendTime: {
    type: Number,
    required: false,
    default: +new Date()
  }
})
</script>

<style lang="scss">
.MSMessengerItem {
  display: flex;
  margin-top: calc(var(--u-gap) * 2);

  .MessageBody {
    margin-left: var(--u-gap);
    margin-right: calc(32px + var(--u-gap));

    .MessageBanner {
      display: flex;
      margin-bottom: var(--u-gap);
      font-size: 0.9rem;

      .MessageBannerSplitDot {
        margin: 0 calc(var(--u-gap) * 0.8);

        &::after {
          content: 'ꔷ';
          text-align: center;
          color: var(--c-text-2);
        }
      }

      .MessageSendTime {
        color: var(--c-text-2);
      }
    }

    .MessageContent {
      padding: var(--u-gap) calc(var(--u-gap) * 1.5);
      background-color: var(--c-bg);
      border: 1px solid var(--c-divider-light);
      border-radius: 5px;
    }
  }

  &.SelfMessageItem {
    flex-direction: row-reverse;

    .MessageBody {
      margin-left: calc(32px + var(--u-gap));
      margin-right: var(--u-gap);

      .MessageBanner {
        flex-direction: row-reverse;
      }

      .MessageContent {
        float: right;
      }
    }
  }
}
</style>
