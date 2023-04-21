import { defineStore } from 'pinia'

type SettingTab = 'setting_profile' | 'setting_appearance' | 'setting_notification' | 'setting_accessibility'

interface State {
  currentSettingTab: SettingTab
}

const useSpaceStore = defineStore('space', {
  state: (): State => {
    return {
      currentSettingTab: 'setting_profile'
    }
  }
})

export default useSpaceStore
