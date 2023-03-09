<template>
  <div class="MSMessengerInput">
    <MSButton class="InputEmojiBtn">
      <template #left-icon><Icon height="24" icon="fluent:emoji-sparkle-24-filled" /></template>
    </MSButton>

    <!-- Main input -->
    <input
      class="SendTextInput"
      type="text"
      placeholder="Send..."
      :value="content"
      @keyup.enter="enterKeyBinding"
      @input="$emit('update:content', ($event.target as HTMLInputElement).value)"
    />

    <!-- Input options -->
    <div class="InputOptions">
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:at" /></template>
      </MSButton>
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:file-plus" /></template>
      </MSButton>
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:window-maximize" /></template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import MSButton from '../../../../ui/MSButton.vue'

defineProps({
  enterKeyBinding: {
    type: Function as PropType<() => void>,
    required: false,
    default: () => {}
  },
  content: {
    type: String,
    required: true
  }
})

defineEmits<{
  (e: 'update:content', v: string): void
}>()
</script>

<style lang="scss">
.MSMessengerInput {
  position: absolute;
  display: flex;
  align-items: center;
  left: calc(var(--u-gap) * 2);
  padding: var(--u-gap);
  height: var(--ms-space-input-container-height);
  width: calc(100% - var(--u-gap) * 4);
  background-color: var(--c-bg);
  box-shadow: var(--shadow-2);
  border-radius: 5px;
  animation: inputAnime var(--u-dur) forwards;

  .SendTextInput {
    flex-grow: 1;
    outline: none;
    border: none;
    padding: 0;
    margin: 0 calc(var(--u-gap) * 1.5);
    height: calc(var(--ms-space-input-container-height) - var(--u-gap) * 2);
    line-height: calc(var(--ms-space-input-container-height) - var(--u-gap) * 2);
    background-color: var(--c-bg);
    font-family: var(--f-r);
    font-size: 0.9rem;
  }

  .InputOptions {
    display: flex;

    .MSButton:not(:last-child) {
      margin-right: var(--u-gap);
    }
  }

  @keyframes inputAnime {
    0% {
      bottom: 0;
    }

    100% {
      bottom: calc(var(--u-gap) * 2);
    }
  }
}
</style>
