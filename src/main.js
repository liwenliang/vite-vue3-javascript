import 'virtual:windi.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 这里是demo
import './style/style.css'

createApp(App).use(router).use(store).mount('#app')
