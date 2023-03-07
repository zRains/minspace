import { reactive, ref } from 'vue'
import type { findUserResultDto } from '../../apis/user.api'
import router from '../../routers'
import storage from '../../utils/storage'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

// 当前查看用户信息缓存
const activeUserCache = reactive(
  storage.getPatcher<findUserResultDto>('activeUserCache', {
    uid: -1,
    email: '',
    username: '',
    avatar: '',
    sign: ''
  })
)

// 当前激活的左侧菜单路由
const currentTab = ref<string>(String(router.currentRoute.value.name))
// const currentTab = ref<string>('')

export default function leftSidebar() {
  // states
  // 是否激活左侧搜索组件
  const activeSearch = ref(false)
  // 是否激活用户信息展示面板（搜索用户信息查看，用户信息查看等）
  const activeUserDialog = ref(false)

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
