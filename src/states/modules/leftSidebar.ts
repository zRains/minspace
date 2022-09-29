import { ref } from 'vue'
import type { findUserResultDto } from '../../apis/user.api'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function leftSidebar() {
  // states
  const currentTab = ref<Tab>('activities')
  const activeSearch = ref(false)
  const activeOuterPlane = ref(false)
  const currentFriendApplicationReceiver = ref<findUserResultDto>({
    uid: '',
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
    currentFriendApplicationReceiver.value = receiver
  }

  // actions

  return {
    states: { currentTab, activeSearch, activeOuterPlane, currentFriendApplicationReceiver },
    mutations: { changeCurrentTab, changeActiveSearch, changeActiveOuterPlane, changeCurrentFriendApplicationReceiver },
    actions: {}
  }
}
