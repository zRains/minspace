import { InjectionKey } from 'vue'

import useToastStates from './modules/toast'
import useUserStates from './modules/user'

export const coreState = (() => ({
  toast: useToastStates(),
  user: useUserStates()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
