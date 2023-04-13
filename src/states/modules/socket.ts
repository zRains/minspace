import { ref } from 'vue'
import storage from '@util/storage'
import Ws from '@util/socket'

const isSocketOpen = ref(false)

export default function useSocket() {
  // states

  // actions
  function initSocket() {
    const wsInstance = Ws.getInstance({
      onError() {
        isSocketOpen.value = false
      },
      onClose() {
        isSocketOpen.value = false
      }
    })

    wsInstance.send({
      event: 'init',
      data: {
        uid: storage.get('user').uid,
        token: storage.get('user').token
      }
    })

    wsInstance.subscribeOnce('init', ({ succeed }) => {
      if (succeed) isSocketOpen.value = true
    })
  }

  return {
    states: {
      isSocketOpen,
      get ws() {
        return isSocketOpen.value ? Ws.getInstance() : null
      }
    },
    mutations: {},
    actions: { initSocket }
  }
}
