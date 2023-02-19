<template>
  <Transition>
    <div
      :class="['MSToast', position, type]"
      ref="toastRef"
      v-show="showToast"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
    >
      <div class="TostLeftIcon">
        <slot name="left-icon">
          <Icon v-if="type === 'success'" height="18" width="18" icon="tabler:check" />
          <Icon v-if="type === 'info'" height="18" width="18" icon="tabler:bell" />
          <Icon v-if="type === 'warning'" height="18" width="18" icon="tabler:alert-circle" />
          <Icon v-if="type === 'error'" height="18" width="18" icon="tabler:alert-triangle" />
          <MSLoading v-if="type === 'loading'" :size="18" />
        </slot>
      </div>

      <div class="ToastBody">
        <div class="ToastTitle">{{ title }}</div>
        <div v-if="content" class="ToastContent">
          <template v-if="typeof content === 'string'">{{ content }}</template>
          <template v-else-if="content.length === 1">{{ content[0] }}</template>
          <template v-else>
            <ul class="ResetList" v-for="(c, i) in content" :key="c">
              <li>{{ `${i + 1}. ${c}.` }}</li>
            </ul>
          </template>
        </div>
      </div>

      <MSButton class="TostRightIcon" no-text @click="closeToastHandle">
        <template #right-icon>
          <slot name="right-icon"><Icon height="16" width="16" icon="eva:close-fill" /></slot
        ></template>
      </MSButton>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PropType, ref, onMounted, render } from 'vue'
import MSButton from '../MSButton/MSButton.vue'
import MSLoading from '../MSLoading.vue'
import Timer from '../../../utils/timer'

const props = defineProps({
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'error' | 'loading'>,
    required: false,
    default: 'info'
  },
  position: {
    type: String as PropType<'TopLeft' | 'TopCenter' | 'TopRight'>,
    required: false,
    default: 'TopRight'
  },
  duration: {
    type: Number,
    required: false,
    default: 4000
  },
  fastAdd: {
    type: Boolean,
    required: false,
    default: true
  },
  pauseOnHover: {
    type: Boolean,
    required: false,
    default: true
  },
  onClick: {
    type: Function as PropType<() => void>,
    required: false,
    default: () => {}
  },
  onShow: {
    type: Function as PropType<() => void>,
    required: false,
    default: () => {}
  },
  onClosed: {
    type: Function as PropType<() => void>,
    required: false,
    default: () => {}
  },
  closable: {
    type: Boolean,
    required: false,
    default: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: [String, Array] as PropType<string | string[]>,
    required: false
  }
})

let timer: Timer
let fastAddTimer: Timer
const toastRef = ref<HTMLElement>()
const showToast = ref(false)

function processFastAdd() {
  const toastProvider = document.querySelector('.MSToastProvider')!
  return props.fastAdd ? false : toastProvider.childElementCount > 0
}

function toggleTimer(state: boolean) {
  if (!props.pauseOnHover || !timer) return
  // eslint-disable-next-line no-unused-expressions
  state ? timer.pause() : timer.resume()
}

function closeToastHandle() {
  if (timer) timer.stop()
  if (fastAddTimer) fastAddTimer.stop()

  showToast.value = false

  setTimeout(() => {
    render(null, toastRef.value!)
    toastRef.value!.remove()
    props.onClosed()
  }, 200)
}

function showToastHandle() {
  if (processFastAdd()) {
    if (fastAddTimer) fastAddTimer.stop()
    fastAddTimer = new Timer(200, showToastHandle)
    return
  }

  const toastProvider = document.querySelector('.MSToastProvider')!
  const toastContainer = toastRef.value!.parentElement!
  toastProvider.appendChild(toastRef.value!)
  toastContainer.remove()
  showToast.value = true

  timer = new Timer(props.duration, closeToastHandle)
}

onMounted(showToastHandle)

defineExpose({
  closeToastHandle
})
</script>

<style lang="scss">
.MSToast {
  display: inline-flex;
  align-items: center;
  padding: calc(var(--u-gap) * 1.5);
  min-width: 400px;
  max-width: 800px;
  background-color: var(--c-bg);
  border: 1px solid var(--c-divider-light);
  border-radius: 5px;
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
  transition: transform var(--u-dur) ease, opacity var(--u-dur) ease, visibility var(--u-dur) ease;

  .TostLeftIcon,
  .TostRightIcon {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    margin-bottom: auto;

    &.TostRightIcon {
      height: 16px;
      width: 16px;
      color: var(--c-text-2);
      background-color: transparent;
      cursor: pointer;
    }

    &.TostLeftIcon {
      height: 26px;
      width: 26px;
    }
  }

  .ToastBody {
    flex-grow: 1;
    padding: 0 calc(var(--u-gap) * 1.5);

    .ToastTitle {
      font-family: var(--f-rb);
      font-weight: bold;
    }

    .ToastContent {
      padding-top: calc(var(--u-gap) / 1.8);
      font-size: 0.9rem;
    }
  }

  &.TopLeft {
    align-self: flex-start;
    margin: var(--u-gap) 0 0 var(--u-gap);
    transform: translateX(0);
  }

  &.TopCenter {
    align-self: center;
    margin: var(--u-gap) 0 0 var(--u-gap);
    transform: translateY(0);
  }

  &.TopRight {
    align-self: flex-end;
    margin: var(--u-gap) var(--u-gap) 0 0;
    transform: translateX(0);
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
    visibility: hidden;

    &.TopLeft {
      transform: translateX(calc(-100% - var(--u-gap)));
    }

    &.TopCenter {
      transform: translateY(calc(-100% - var(--u-gap)));
    }

    &.TopRight {
      transform: translateX(calc(100% + var(--u-gap)));
    }
  }

  &.success {
    background-color: #f1f8f4;

    .TostLeftIcon {
      background-color: rgba(#2bb44a, 0.15);
      color: #2bb44a;
    }
  }

  &.info {
    background-color: #e6eff9;

    .TostLeftIcon {
      background-color: rgba(#3e71f3, 0.1);
      color: #3e71f3;
    }
  }

  &.warning {
    background-color: #fef9eb;

    .TostLeftIcon {
      background-color: rgba(#ffcc00, 0.15);
      color: #f89e23;
    }
  }

  &.error {
    background-color: #fbefeb;

    .TostLeftIcon {
      background-color: rgba(#eb2833, 0.1);
      color: #eb2833;
    }
  }

  &.loading .TostLeftIcon {
    background-color: var(--c-bg-mute);
  }
}
</style>
