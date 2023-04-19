import { defineStore } from 'pinia'
import Ws from '@util/socket'
import storage from '@util/storage'

interface State {
  /** 是否成功建立socket连接 */
  isSocketOpen: boolean

  /** 连接的socket实例 */
  ws: Ws | null
}

const useSocketStore = defineStore('socket', {
  state: (): State => {
    return {
      isSocketOpen: false,
      get ws() {
        return this.isSocketOpen ? Ws.getInstance() : null
      }
    }
  },
  actions: {
    initSocket() {
      const selfStore = this
      const wsInstance = Ws.getInstance({
        onError() {
          selfStore.isSocketOpen = false
        },
        onClose() {
          selfStore.isSocketOpen = false
        }
      })

      /**
       * 注意：这个store只会在全局路由拦截器验证通过后才会使用，
       * 因此可以保证`storage.get('user')`不为空
       */
      wsInstance.send({
        event: 'init',
        data: {
          uid: storage.get('user').uid,
          token: storage.get('user').token
        }
      })

      wsInstance.subscribeOnce('init', ({ succeed }) => {
        if (succeed) selfStore.isSocketOpen = true
      })
    }
  }
})

export default useSocketStore
