import { createI18n } from 'vue-i18n'
import zh from './zh-CN'
import en from './en-US'
// src/i18n/index.js
const messages = {
  en,
  zh
}
// src/i18n/index.js


const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('language') || 'zh_CN',
  messages,
})
export default i18n
