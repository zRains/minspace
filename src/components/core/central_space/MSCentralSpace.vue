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
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.2s ease;
  }
  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.996);
  }
}
</style>
