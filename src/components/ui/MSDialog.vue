<template>
  <Transition>
    <MSMask v-if="dialogVisible" class="MSDialogMask">
      <div class="MSDialog" aria-modal="true" role="dialog" :style="{ width }">
        <!-- Dialog header -->
        <section class="DialogHeader">
          <slot name="header">
            <div class="HearderPresets">
              <h3>Some basic dialog {{ visible }}</h3>
            </div>
          </slot>
        </section>

        <!-- Dialog body -->
        <section class="DialogBody">
          <slot name="body"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised.</slot
          >
        </section>

        <!-- Dialog operation -->
        <section class="DialogOperation">
          <slot name="operation">
            <div class="OperationPresets">
              <MSButton class="ConfirmBtn">
                <template #text>{{ confirmText }}</template>
              </MSButton>
              <MSButton class="CancelBtn">
                <template #text>{{ cancelText }}</template>
              </MSButton>
            </div>
          </slot>
        </section>
      </div>
    </MSMask>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MSButton from './MSButton/MSButton.vue'
import MSMask from './MSMask.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: false,
    default: false
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  cancelText: {
    type: String,
    required: false,
    default: 'Cancel'
  },
  confirmText: {
    type: String,
    required: false,
    default: 'Confirm'
  },
  showHeader: {
    type: Boolean,
    required: false,
    default: true
  },
  showFooter: {
    type: Boolean,
    required: false,
    default: true
  },
  showClose: {
    type: Boolean,
    required: false,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    required: false,
    default: true
  },
  showConfirmButton: {
    type: Boolean,
    required: false,
    default: true
  },
  width: {
    type: String,
    required: false,
    default: 'auto'
  }
})

const emit = defineEmits(['update:visible'])

const dialogVisible = computed({
  get: () => props.visible,
  set: (v) => emit('update:visible', v)
})
</script>

<style lang="scss">
$dialog-min-height: 200px;
$dialog-min-width: 300px;
$dialog-max-width: 600px;

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.MSDialogMask {
  .MSDialog {
    display: inline-flex;
    flex-direction: column;
    min-height: $dialog-min-height;
    min-width: $dialog-min-width;
    max-width: $dialog-max-width;
    background-color: var(--c-bg);
    border-radius: 8px;
    animation: fade-in calc(var(--u-dur) * 1.5) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

    .DialogHeader {
      .HearderPresets {
        margin-bottom: calc(var(--u-gap) * 2);

        h3 {
          font-family: var(--f-rb);
          margin: 0;
        }
      }
    }

    .DialogBody {
      flex-grow: 1;
    }

    .DialogOperation {
      .OperationPresets {
        display: flex;
        flex-wrap: nowrap;

        .MSButton {
          padding: calc(var(--u-gap) * 0.7) calc(var(--u-gap) * 2);
          border-radius: 5px;
          font-size: 0.9rem;

          &.ConfirmBtn {
            color: var(--c-white);
            background-color: var(--c-green);
          }

          &.CancelBtn {
            color: var(--c-text-2);
            background-color: var(--c-gray-light-4);
          }

          &:not(:last-child) {
            margin-right: var(--u-gap);
          }
        }
      }
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(-16px);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }
    }
  }
}
</style>
