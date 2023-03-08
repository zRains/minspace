import { InjectionKey } from 'vue'

// 状态管理模块集
import useLeftSidebar from './modules/leftSidebar'
import useSocketStates from './modules/socket'
import useToastStates from './modules/toast'
import useUserStates from './modules/user'
import useSetting from './modules/setting'

export const coreState = (() => ({
  toast: useToastStates(),
  socket: useSocketStates(),
  user: useUserStates(),
  leftSidebar: useLeftSidebar(),
  setting: useSetting()
}))()

export const coreStateKey: InjectionKey<typeof coreState> = Symbol('coreState')
