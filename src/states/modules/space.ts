import { ref } from 'vue'

type Tab = 'activities' | 'rooms' | 'notifications' | 'settings' | 'messenger'

export default function useSpace() {
  // states
  const currentTab = ref<Tab>('activities')
  // const utilOptions = reactive({
  //   text: ''
  // })

  // mutations
  const changeCurrentTab = (tab: Tab) => {
    currentTab.value = tab
  }

  // actions

  return {
    states: { currentTab },
    mutations: { changeCurrentTab },
    actions: {}
  }
}
