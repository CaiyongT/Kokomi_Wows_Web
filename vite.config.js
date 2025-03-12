// vite.config.js

// 引入 Vite 的配置辅助函数
import { defineConfig } from 'vite'

// 引入 Vue 插件，支持 Vue 单文件组件
import vue from '@vitejs/plugin-vue'

// 引入 unplugin-vue-components 插件，用于按需自动导入 Vue 组件
import Components from 'unplugin-vue-components/vite'

// 引入 Ant Design Vue 组件解析器，帮助自动导入 Ant Design Vue 组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 引入 unplugin-icons 插件，用于按需自动导入图标组件
import Icons from 'unplugin-icons/vite'

// 引入 unplugin-icons 的解析器，自动解析各图标集合中的图标组件
import IconsResolver from 'unplugin-icons/resolver'

// 导出 Vite 配置
export default defineConfig({
  plugins: [
    vue(), // 启用 Vue 插件，处理 .vue 文件

    // 配置自动组件导入插件
    Components({
      resolvers: [
        // 自动解析 Ant Design Vue 组件，
        // 自配置项 importStyle 为 false 表示使用 CSS in JS 模式
        AntDesignVueResolver({
          importStyle: false,
        }),
        // 自动解析图标组件
        // 设置 prefix 为 'icon'，组件名称格式为 <icon-集合前缀-图标名称 />
        // 启用 mdi（Material Design Icons）和 ant-design（Ant Design Icons）图标集合
        //若需引入其他图标包，请查阅：https://icones.js.org/ 
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['mdi', 'ant-design'],
        }),
      ],
    }),

    // 启用 unplugin-icons 插件，
    // autoInstall 设置为 true 时如果缺少图标库会自动安装
    Icons({
      autoInstall: true,
    }),
  ],
})
