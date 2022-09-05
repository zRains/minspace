<template>
  <div class="MSCentralSpace">
    <MSUserBanner
      avatar="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      user-name="Jeff"
    />

    <MSMessageContainer />
  </div>
</template>

<script setup lang="ts">
import MSUserBanner from './MSUserBanner.vue'
import MSMessageContainer from './MSMessageContainer.vue'
</script>

<style lang="scss">
.MSCentralSpace {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
