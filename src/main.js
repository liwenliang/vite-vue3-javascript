import 'virtual:windi.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 增加多语言支持
import i18n from './lang'

// 这里是demo
import './style/style.css'

// svg icon
import 'virtual:svg-icons-register'

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
