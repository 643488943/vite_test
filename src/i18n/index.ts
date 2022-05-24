import { createI18n } from 'vue-i18n'
import zh from './locales/zh-CN.json'
import en from './locales/en.json'
// src/i18n/index.js
const messages = {
  en,
  zh
}
// src/i18n/index.js


const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('language') || 'zh',
  messages,
})
export default i18n
