import { createI18n } from 'vue-i18n'

// 自定义国际化文件
import zhcn from './locale/zh-cn'
import en from './locale/en'

const i18n = createI18n({
  legacy: false, // Composition API 模式
  globalInjection: true, // 全局注册 $t方法
  // 默认语言
  locale: 'zhcn',
  // 语言库
  messages: {
    zhcn,
    en
  }
})

// 将i18n暴露出去，在main.js中引入挂载
export default i18n
