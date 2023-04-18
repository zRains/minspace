import { defineStore } from 'pinia'
import storage from '@util/storage'

// Types
import type { User } from '@type/user.type'

interface UserWithToken extends User {
  token: string
}

interface State {
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
    }
  }
})

export default useUserStore
