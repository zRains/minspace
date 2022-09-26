import { InjectionKey } from 'vue'

import useSpace from './modules/space'
import useToastStates from './modules/toast'
import useUserStates from './modules/user'

export const coreState = (() => ({
  toast: useToastStates(),
  user: useUserStates(),
  space: useSpace()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
