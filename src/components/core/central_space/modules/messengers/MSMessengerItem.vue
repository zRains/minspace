<template>
  <div :class="{ MSMessengerItem: true, SelfMessageItem: selfMessage }">
    <!-- User avatar -->
    <div class="MessageAvatar">
      <MSUserAvatar :src="avatar" :alt="userName" />
    </div>

    <!-- Message body -->
    <div class="MessageBody">
      <div class="MessageBanner">
        <div class="MessageSenderName">{{ userName }}</div>
        <div class="MessageBannerSplitDot"></div>
        <div class="MessageSendTime">{{ localSendTime }}</div>
      </div>
      <div class="MessageContent"><slot></slot><span v-if="isSending" class="SendingLoader"></span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'

const props = defineProps({
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
  sendTime: {
    type: [Number, String],
    required: false,
    default: +new Date()
  },
  isSending: {
    type: Boolean,
    required: false,
    default: false
  }
})

const localSendTime = computed(() => {
  return new Date(props.sendTime).toLocaleDateString()
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
      position: relative;
      padding: calc(var(--u-gap) * 0.8) calc(var(--u-gap) * 1.2);
      background-color: var(--c-bg);
      border: 1px solid var(--c-divider-light);
      border-radius: 5px;

      .SendingLoader {
        position: absolute;
        left: calc(-16px - var(--u-gap) * 0.4);
        bottom: 2px;

        width: 12px;
        height: 12px;
        border: 2px solid var(--c-green);
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
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
