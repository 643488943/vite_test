
import { createApp } from 'vue'
import i18n from '@/i18n'
import App from './App.vue'
import router from '@/router/index'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/assets/styles/index.scss'


createApp(App).use(router)
  .use(i18n)
  .mount('#app')
