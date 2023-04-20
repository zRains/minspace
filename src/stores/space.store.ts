import { defineStore } from 'pinia'

// Types

interface State {}

const useSpaceStore = defineStore('space', {
  state: (): State => {
    return {}
  }
})

export default useSpaceStore
