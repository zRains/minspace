import { InjectionKey } from 'vue'

import useLeftSidebar from './modules/leftSidebar'
import useToastStates from './modules/toast'
import useUserStates from './modules/user'

export const coreState = (() => ({
  toast: useToastStates(),
  user: useUserStates(),
  leftSidebar: useLeftSidebar()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
