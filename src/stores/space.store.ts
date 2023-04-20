import { defineStore } from 'pinia'

interface State {}

const useSpaceStore = defineStore('space', {
  state: (): State => {
    return {}
  }
})

export default useSpaceStore
