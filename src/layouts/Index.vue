<template>
     <a-watermark content="Kokomi_Web_Preview">
        <a-layout style="height: 100vh; width: 100%;">
        <!-- 侧边栏组件 -->
        <Sider v-model:collapsed="collapsed" v-model:theme="theme" />
        <a-layout style="width: 100%;">
            <!-- 头部组件 -->
            <Header :collapsed="collapsed" @toggle="toggleSider" />
            <!-- 内容区域，用于展示 router-view 的页面内容 -->
            <a-layout-content :style="contentStyle">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
    </a-watermark>
   
</template>

<script setup>
import { ref } from 'vue';
import Header from './Header.vue';
import Sider from './Sider.vue';
import { px2remTransformer } from 'ant-design-vue';

const collapsed = ref(false);
const theme = ref('light');
const toggleSider = () => {
    collapsed.value = !collapsed.value;
};

const contentStyle = {
  /* 让内容区域填充剩余空间 */
  flex: 1,
  /* 内边距 */
  padding: '15px',
  /* 外边距 */
  margin:'15px',
  /* 背景色（测试阶段就乱改吧） */
  backgroundColor: '#fff',
  /* 边框 */
  border: '1px solid #ddd',
  /* 阴影 */
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
};
</script>