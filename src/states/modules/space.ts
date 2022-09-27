import { ref } from 'vue'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function useSpace() {
  // states
  const currentTab = ref<Tab>('activities')
  const activeSearch = ref(false)
  // const utilOptions = reactive({
  //   text: ''
  // })

  // mutations
  const changeCurrentTab = (tab: Tab) => {
    currentTab.value = tab
  }

  const changeActiveSearch = (val: boolean) => {
    activeSearch.value = val
  }

  // actions

  return {
    states: { currentTab, activeSearch },
    mutations: { changeCurrentTab, changeActiveSearch },
    actions: {}
  }
}
