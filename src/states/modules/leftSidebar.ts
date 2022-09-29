import { ref } from 'vue'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function leftSidebar() {
  // states
  const currentTab = ref<Tab>('activities')
  const activeSearch = ref(false)
  const activeOuterPlane = ref(false)

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

  // actions

  return {
    states: { currentTab, activeSearch, activeOuterPlane },
    mutations: { changeCurrentTab, changeActiveSearch, changeActiveOuterPlane },
    actions: {}
  }
}
