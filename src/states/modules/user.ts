import { reactive } from 'vue'

type UserDto = {
  uid: string
  role: 'USER' | 'OPERATOR' | 'ADMIN'
  sign: string
  email: string
  avatar: string
  username: string
}

export default function useUserStates() {
  // states
  const currentUser: UserDto = reactive({
    uid: '',
    role: 'USER',
    sign: '',
    email: '',
    avatar: '',
    username: ''
  })

  // mutations
  const setCurrentUser = (user: UserDto) => {
    Object.assign(currentUser, user)
  }

  // actions

  return {
    states: { currentUser },
    mutations: { setCurrentUser },
    actions: {}
  }
}
