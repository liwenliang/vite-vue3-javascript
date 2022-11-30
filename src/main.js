import { createApp } from 'vue';

// 全量引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue';
import store from './store';
import router from './router';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');