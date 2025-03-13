//应用全局设置
import { reactive } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'

// 使用 reactive来存储配置信息，便于实时响应
const GlobalConfig = reactive({
  
  // 当前语言包（可调整AntD自带的组件文案，如分页、日期选择器等）
  locale: zhCN,       

  // 组件默认尺寸，可选 'small' | 'middle' | 'large'
  componentSize: 'middle',

  // 是否从右到左（RTL）模式
  direction: 'ltr',  

})

export default GlobalConfig
