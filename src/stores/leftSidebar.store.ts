import { defineStore } from 'pinia'

// Types
type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

interface State {
  /** 当前激活主菜单路由名 */
  currentTab: Tab

  /** 是否激活搜索组件 */
  activeSearchComponent: boolean

  /** 是否展示简易用户信息面板 */
  activeUserDialog: boolean
}

const useLeftSidebar = defineStore('leftSidebar', {
  state: (): State => {
    return {
      currentTab: 'activities',
      activeSearchComponent: false,
      activeUserDialog: false
    }
  }
})

export default useLeftSidebar
