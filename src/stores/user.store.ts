import { defineStore } from 'pinia'
import storage from '@util/storage'
import useSocketStore from './socket.store'

// Types
import type { User } from '@type/user.type'

interface UserWithToken extends User {
  token: string
}

interface State {
  /** 当前登录用户 */
  currentUser: UserWithToken | null
}

const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      currentUser: null
    }
  },
  actions: {
    /** 设置当前用户 */
    setCurrentUser(user: UserWithToken) {
      storage.set('user', user)
      this.currentUser = user
    },

    /** 验证用户是否携带token */
    hasToken() {
      if (storage.has('user')) {
        this.currentUser = storage.get<UserWithToken>('user')!
      }

      return this.currentUser !== null
    },

    /** 用户退出登录，注意断开socket连接 */
    cleanCurrentUser() {
      const socketStore = useSocketStore()

      storage.del('user')
      this.currentUser = null
      socketStore.closeSocket()
    }
  }
})

export default useUserStore
