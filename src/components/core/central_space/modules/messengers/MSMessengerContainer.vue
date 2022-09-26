<template>
  <div class="MSMessengerContainer">
    <!-- Banner -->
    <MSMessengerBanner
      avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      user-name="Jeff"
    />

    <!-- Main -->
    <div class="Message">
      <MSMessengerItem
        avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        user-name="Jeff"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting."
      />
      <MSMessengerItem
        :self-message="true"
        avatar="https://zrain.fun/favicon.ico"
        user-name="zRain"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <MSMessengerItem :self-message="true" avatar="https://zrain.fun/favicon.ico" user-name="zRain" message="https://zrain.fun/" />
    </div>

    <!-- Input -->
    <MSMessengerInput />
  </div>
</template>

<script setup lang="ts">
import MSMessengerBanner from './MSMessengerBanner.vue'
import MSMessengerInput from './MSMessengerInput.vue'
import MSMessengerItem from './MSMessengerItem.vue'
</script>

<style lang="scss">
.MSMessengerContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fafbfd;

  .Message {
    margin: 0 calc(var(--u-gap) * 2);
    flex-grow: 1;
  }
}
</style>
