
import { createApp } from 'vue'
import i18n from '@/i18n'
import App from './App.vue'
import router from '@/router/index'
import 'virtual:windi.css'


createApp(App).use(router)
  .use(i18n)
  .mount('#app')
