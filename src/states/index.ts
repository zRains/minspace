import { InjectionKey } from 'vue'

import useToast from './modules/toast'

export const coreState = (() => ({
  toast: useToast()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
