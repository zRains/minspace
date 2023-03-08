import { Icon } from '@iconify/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './styles/global.scss'

const MinspaceAPP = createApp(App)

// eslint-disable-next-line vue/multi-word-component-names
MinspaceAPP.component('Icon', Icon)
MinspaceAPP.use(router)
MinspaceAPP.mount('#MSRoot')
