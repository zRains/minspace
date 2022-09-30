import { reactive, ref } from 'vue'
import type { findUserResultDto } from '../../apis/user.api'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function leftSidebar() {
  // states
  const currentTab = ref<Tab>('activities')
  const activeSearch = ref(false)
  const activeOuterPlane = ref(false)
  const currentFriendApplicationReceiver = reactive<findUserResultDto>({
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

  const changeActiveOuterPlane = (val: boolean) => {
    activeOuterPlane.value = val
  }

  const changeCurrentFriendApplicationReceiver = (receiver: findUserResultDto) => {
    Object.assign(currentFriendApplicationReceiver, receiver)
  }

  // actions

  return {
    states: { currentTab, activeSearch, activeOuterPlane, currentFriendApplicationReceiver },
    mutations: { changeCurrentTab, changeActiveSearch, changeActiveOuterPlane, changeCurrentFriendApplicationReceiver },
    actions: {}
  }
}
