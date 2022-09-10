<template>
  <Transition>
    <div :class="['MSToast', position]" ref="toastRef" v-show="showToast" @mouseover="toggleTimer(true)" @mouseleave="toggleTimer(false)">
      <div class="TostLeftIcon">
        <slot name="left-icon">
          <Icon v-if="type === 'success'" icon="tabler:circle-check" />
          <Icon v-if="type === 'info'" icon="tabler:info-circle" />
          <Icon v-if="type === 'warning'" icon="tabler:alert-circle" />
          <Icon v-if="type === 'error'" icon="tabler:alert-triangle" />
        </slot>
      </div>

      <div class="ToastBody">
        <div class="ToastTitle">{{ title }}</div>
        <div v-if="content" class="ToastContent">{{ content }}</div>
      </div>

      <div class="TostRightIcon"><slot name="right-icon"> </slot></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PropType, ref, onMounted, render } from 'vue'
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
    default: 3000
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
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
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
</script>

<style lang="scss">
.MSToast {
  display: inline-flex;
  padding: var(--u-gap);
  background-color: var(--c-bg);
  border: 1px solid var(--c-divider-light);
  border-radius: 5px;
  pointer-events: auto;
  transition: transform var(--u-dur) ease;

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
    &.TopLeft {
      transform: translateX(-100%);
    }

    &.TopCenter {
      transform: translateY(-100%);
    }

    &.TopRight {
      transform: translateX(100%);
    }
  }
}
</style>
