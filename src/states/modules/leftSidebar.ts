import { reactive, ref } from 'vue'
import type { findUserResultDto } from '../../apis/user.api'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function leftSidebar() {
  // states
  // 当前激活的左侧菜单路由
  const currentTab = ref<Tab>('activities')
  // 是否激活左侧搜索组件
  const activeSearch = ref(false)
  // 是否激活用户信息展示面板（搜索用户信息查看，用户信息查看等）
  const activeUserDialog = ref(false)
  // 当前查看用户信息缓存
  const activeUserCache = reactive<findUserResultDto>({
    uid: -1,
    email: '',
    username: '',
    avatar: '',
    sign: ''
  })

  // mutations
  const changeCurrentTab = (tab: Tab) => {
    currentTab.value = tab
  }

  const changeActiveSearch = (val: boolean) => {
    activeSearch.value = val
  }

  const changeActiveUserDialog = (val: boolean) => {
    activeUserDialog.value = val
  }

  const changeActiveUserCache = (receiver: findUserResultDto) => {
    Object.assign(activeUserCache, receiver)
  }

  // actions

  return {
    states: { currentTab, activeSearch, activeUserDialog, activeUserCache },
    mutations: {
      changeCurrentTab,
      changeActiveSearch,
      changeActiveUserDialog,
      changeActiveUserCache
    },
    actions: {}
  }
}
