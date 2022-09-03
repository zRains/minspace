import { createApp } from 'vue'

// Components
import { Icon } from '@iconify/vue'
import App from './App.vue'

// Styles
import './styles/global.scss'

const MinspaceAPP = createApp(App)

// eslint-disable-next-line vue/multi-word-component-names
MinspaceAPP.component('Icon', Icon)

MinspaceAPP.mount('#MSRoot')
