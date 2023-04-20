import { defineStore } from 'pinia'

// Types
type Tab = 'activities' | 'rooms' | 'notifications' | 'setting_profile' | 'messenger' | 'new_room'

interface State {
  /** 当前激活主菜单路由名 */
  currentTab: Tab

  /** 是否激活搜索组件 */
  isActiveSearchComponent: boolean

  /** 是否展示简易用户信息面板 */
  isActiveUserDialog: boolean
}

const useLeftSidebarStore = defineStore('leftSidebar', {
  state: (): State => {
    return {
      currentTab: 'activities',
      isActiveSearchComponent: false,
      isActiveUserDialog: false
    }
  }
})

export default useLeftSidebarStore
