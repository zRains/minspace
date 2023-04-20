import { defineStore } from 'pinia'
import storage from '@util/storage'

interface State {
  cssVarInject: Record<string, any>
}

const useConfigStore = defineStore('config', {
  state: (): State => {
    if (!storage.has('setting') || !storage.get('setting').cssVarInject) {
      storage.set('setting', {
        cssVarInject: {
          '--ms-left-sidebar-width': '290px'
        }
      })
    }

    return {
      cssVarInject: storage.get('setting').cssVarInject
    }
  },
  actions: {
    setCssVarInject(prop: string, val: any) {
      if (prop.startsWith('--')) this.cssVarInject[prop] = val
    }
  }
})

export default useConfigStore
