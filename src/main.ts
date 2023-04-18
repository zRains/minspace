import router from '@/routers'
import { Icon } from '@iconify/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/global.scss'

const MinspaceAPP = createApp(App)
const pinia = createPinia()

// eslint-disable-next-line vue/multi-word-component-names
MinspaceAPP.component('Icon', Icon)
MinspaceAPP.use(router)
MinspaceAPP.use(pinia)
MinspaceAPP.mount('#MSRoot')
