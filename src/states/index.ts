import useToast from './modules/toast'

export const coreState = (() => ({
  toast: useToast()
}))()

export const coreStateKey = Symbol('coreState')
