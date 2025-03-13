// 从 Vue 包中引入 createApp 方法，用于创建 Vue 应用实例
import { createApp } from 'vue'

// 引入全局样式文件
import './style.css'

// 引入路由实例（Vue Router 配置文件）
import router from './router/Index'

// 引入根组件 App.vue
import App from './App.vue'

// 引入 i18n 实例（vue-i18n 配置文件，用于国际化）
import i18n from './I18n'

// 引入全局配置对象，通常用于控制 Ant Design Vue 的全局配置（如语言、尺寸、方向等）
import GlobalConfig from '../src/config/GlobalConfig'

// 创建应用实例，并依次挂载 i18n、路由、全局配置，再挂载到页面上的 #app 节点
createApp(App)
  .use(i18n)                          // 安装 vue-i18n，用于多语言支持
  .use(router)                        // 安装 Vue Router，实现页面导航
  .provide('GlobalConfig', GlobalConfig) // 全局注入 GlobalConfig 对象，方便子组件通过 inject 获取
  .mount('#app')                      // 挂载应用到 id 为 app 的 DOM 元素上
