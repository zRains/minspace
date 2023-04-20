<template>
  <div class="MSCentralSpace">
    <RouterView v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSCentralSpace {
  height: 100%;
}
</style>
