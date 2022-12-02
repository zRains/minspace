<template>
  <MSMainLayout class="MSMinspace">
    <template #left-sideBar>
      <MSLeftSidebar />
    </template>
    <template #central-space>
      <RouterView />
    </template>
  </MSMainLayout>

  <!-- Left sidebar search result details dialog -->
  <!-- <MSDialog v-model:visible="testVisible" /> -->
  <MSToastProvider />
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import MSLeftSidebar from '../components/core/left_sidebar/MSLeftSidebar.vue'
import MSToastProvider from '../components/ui/toast/MSToastProvider.vue'
import useToast from '../composes/toast'
import MSMainLayout from '../layouts/MSMainLayout.vue'
import { coreStateKey } from '../states'

// import MSDialog from '../components/ui/MSDialog.vue'

const {
  socket: {
    mutations: { connectSocket }
  }
} = inject(coreStateKey)!

// const Toast = useToast()

// const testVisible = ref(true)

onMounted(() => {
  // connectSocket((socket) =>
  //   socket.on('exception', (data) => {
  //     const { errors } = data
  //     Toast.error('Error', {
  //       content: Array.isArray(errors) ? errors.map((e: Record<string, string>) => e.message) : errors.message,
  //       duration: 5000
  //     })
  //   })
  // )
})
</script>

<style lang="scss"></style>
