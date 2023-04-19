import { ref } from 'vue'
import storage from '@util/storage'
import Ws from '@util/socket'

const isSocketOpen = ref(false)

export default function useSocket() {
  // states

  // actions

  return {
    states: {
      isSocketOpen,
      get ws() {
        return isSocketOpen.value ? Ws.getInstance() : null
      }
    },
    mutations: {},
    actions: {}
  }
}
