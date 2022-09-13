import { InjectionKey } from 'vue'

import useToastStates from './modules/toast'

export const coreState = (() => ({
  toast: useToastStates()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
