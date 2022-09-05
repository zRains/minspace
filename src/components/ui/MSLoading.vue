<template>
  <div class="MSLoading" :style="{ height: size + 'px', width: size + 'px' }">
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M229.9 70.8a.1.1 0 0 1-.1-.1a16.2 16.2 0 0 0-6-5.9l-88-49.5a16 16 0 0 0-15.6 0l-88 49.5a16.2 16.2 0 0 0-6 5.9a.1.1 0 0 1-.1.1v.2a15 15 0 0 0-2.1 7.7v98.6a16.1 16.1 0 0 0 8.2 14l88 49.5a16.5 16.5 0 0 0 7.2 2h1.4a16.1 16.1 0 0 0 7-2l88-49.5a16.1 16.1 0 0 0 8.2-14V78.7a15.6 15.6 0 0 0-2.1-7.9Zm-101 48L48.4 74L128 29.2L207.7 74Zm87.1 58.5l-79.9 45l.8-89.6l79.1-45Z"
        fill="var(--c-text-1)"
      />
      <path d="M 136.646 132.643 L 216.154 87.133 L 216.809 177.59 L 135.937 222.891 L 136.646 132.643 Z" />
      <path d="M 39.518 177.6 L 119.026 223.11 L 119.681 132.653 L 38.809 87.352 L 39.518 177.6 Z" />
      <path d="M 47.997 74.049 L 129.122 119.25 L 208.202 74.078 L 128.005 28.956 L 47.997 74.049 Z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 30
  }
})
</script>

<style lang="scss">
.MSLoading {
  path:not(:first-child) {
    fill: var(--c-bg);
  }
  path:nth-child(2) {
    animation: loading 1.5s 1s infinite;
  }

  path:nth-child(4) {
    animation: loading 1.5s 0.5s infinite;
  }

  path:nth-child(3) {
    animation: loading 1.5s 0s infinite;
  }

  @keyframes loading {
    0% {
      fill: var(--c-bg);
    }
    50% {
      fill: var(--c-text-1);
    }
    100% {
      fill: var(--c-bg);
    }
  }
}
</style>
