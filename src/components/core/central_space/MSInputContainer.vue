<template>
  <div class="MSInputContainer">
    <MSButton class="InputEmojiBtn">
      <template #left-icon><Icon height="24" color="var(--c-green)" icon="fluent:emoji-sparkle-24-filled" /></template>
    </MSButton>

    <!-- main input -->
    <input class="SendTextInput" type="text" placeholder="Send..." v-model="sendText" />

    <!-- input options -->
    <div class="InputOptions">
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:window-maximize" /></template>
      </MSButton>
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:file-plus" /></template>
      </MSButton>
      <MSButton>
        <template #left-icon><Icon height="24" icon="tabler:at" /></template>
      </MSButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MSButton from '../../ui/MSButton/MSButton.vue'

const sendText = ref('')
</script>

<style lang="scss">
$input-container-height: 40px;

.MSInputContainer {
  display: flex;
  align-items: center;
  margin: 14px calc(var(--u-gap) * 2);
  padding: var(--u-gap);
  height: $input-container-height;
  background-color: var(--c-bg);
  box-shadow: var(--shadow-2);
  border-radius: 6px;

  .SendTextInput {
    flex-grow: 1;
    outline: none;
    border: none;
    padding: 0;
    margin-left: calc(var(--u-gap) * 1.5);
    height: calc(#{$input-container-height} - var(--u-gap) * 2);
    line-height: calc(#{$input-container-height} - var(--u-gap) * 2);
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
}
</style>
