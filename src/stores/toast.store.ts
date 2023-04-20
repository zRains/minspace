import { defineStore } from 'pinia'

const closeHandles: Array<() => void> = []

const useToastStore = defineStore('toast', {
  actions: {
    addCloseHandle(handle: () => void) {
      closeHandles.push(handle)
    },
    closeAllToast() {
      closeHandles.forEach((h) => h())
      closeHandles.length = 0
    }
  }
})

export default useToastStore
