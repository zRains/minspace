import { InjectionKey } from 'vue'

import useLeftSidebar from './modules/leftSidebar'
import useSocketStates from './modules/socket'
import useToastStates from './modules/toast'
import useUserStates from './modules/user'

export const coreState = (() => ({
  toast: useToastStates(),
  socket: useSocketStates(),
  user: useUserStates(),
  leftSidebar: useLeftSidebar()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
