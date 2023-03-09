import { ref } from 'vue'
import storage from '../../utils/storage'
import Ws from '../../utils/socket'

const isSocketOpen = ref(false)

export default function useSocket() {
  // states

  // actions
  function initSocket() {
    const ws = Ws.getInstance({
      onError() {
        isSocketOpen.value = false
      },
      onClose() {
        isSocketOpen.value = false
      }
    })

    ws.send({
      event: 'init',
      data: {
        uid: storage.get('user').uid,
        token: storage.get('user').token
      }
    })

    ws.subscribeOnce('init', ({ succeed }) => {
      if (succeed) isSocketOpen.value = true
    })
  }

  return {
    states: {
      isSocketOpen,
      ws: Ws.getInstance()
    },
    mutations: {},
    actions: { initSocket }
  }
}
