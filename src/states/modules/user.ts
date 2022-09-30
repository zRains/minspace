import { reactive } from 'vue'
import storage from '../../utils/storage'

type UserDto = {
  uid: number
  role: 'USER' | 'OPERATOR' | 'ADMIN'
  sign: string
  email: string
  token: string
  avatar: string
  username: string
  createdAt: string
}

export default function useUserStates() {
  // states
  const currentUser: UserDto = reactive({
    uid: -1,
    role: 'USER',
    sign: '',
    email: '',
    token: '',
    avatar: '',
    username: '',
    createdAt: ''
  })

  // mutations
  const setCurrentUser = (user: UserDto) => {
    Object.assign(currentUser, user)
    storage.set('user', user)
  }

  // actions
  const isAuthenticated = () => {
    if (storage.has('user')) setCurrentUser(storage.get('user'))
    return currentUser.token !== ''
  }

  return {
    states: { currentUser },
    mutations: { setCurrentUser },
    actions: { isAuthenticated }
  }
}
