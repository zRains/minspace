import { reactive } from 'vue'
import storage from '../../utils/storage'

true &&
  (function init() {
    if (!storage.has('setting') || !storage.get('setting').cssVarInject) {
      storage.set('setting', {
        cssVarInject: {
          '--ms-left-sidebar-width': '290px'
        }
      })
    }
  })()

const cssVarInject = reactive(storage.get('setting').cssVarInject as Record<string, any>)

export default function useToastStates() {
  // states

  // mutations
  function setCssVarInject(prop: string, val: any) {
    if (prop.startsWith('--')) cssVarInject[prop] = val
  }

  // actions

  return {
    states: { cssVarInject },
    mutations: { setCssVarInject },
    actions: {}
  }
}
