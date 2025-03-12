<template>
    <a-layout-sider :style="siderStyle" :collapsed="props.collapsed" :theme="props.theme">
        <div v-if="!props.collapsed" style="height:60px;display: flex;justify-content: center;align-items: center;">
            <h2>我是Logo喵</h2>
        </div>
        <div v-else style="height:60px;display: flex;justify-content: center;align-items: center;">
            <h5>我是Logo喵</h5>
        </div>
        <a-menu 
            v-model:selectedKeys="selectedKeys" 
            v-model:openKeys="openKeys" 
            :items="items" 
            theme="props.theme"
            mode="inline">
        </a-menu>
    </a-layout-sider>
</template>

<script setup>
import { px2remTransformer, theme } from 'ant-design-vue';
import { defineProps } from 'vue';
import { ref, h } from 'vue';
import {
    RadarChartOutlined,
    HomeOutlined,
    DotChartOutlined,
    OrderedListOutlined,
    FlagOutlined,
    ToolOutlined,
    InfoCircleOutlined
} from '@ant-design/icons-vue';
// 在模板中直接使用 props.collapsed 进行判断

const selectedKeys = ref(['1']);
const props = defineProps({
    collapsed: {
        default: false
    },
    theme: {
        default: 'light'
    }
});
const openKeys = ref([])
const items = ref([
    {
        key: '1',
        icon: () =>
            h(HomeOutlined),
        label: '主页',
        title: '主页',
    },
    {
        key: '2',
        icon: () => h(RadarChartOutlined),
        label: '玩家数据',
        title: '查看单个玩家数据',
    },
    {
        key: '3',
        icon: () => h(DotChartOutlined),
        label: '工会数据',
        title: '查看工会数据',
    },
    {
        key: '4',
        icon: () => h(OrderedListOutlined),
        label: '排行榜',
        title: '查看Kokomi排行榜',
    },
    {
        key: '5',
        icon: () => h(FlagOutlined),
        label: '对局数据',
        title: '查看对局详情',
    },
    {
        key: '6',
        icon: () => h(ToolOutlined),
        label: '小工具',
        title: '查看kokomi小工具',
    },
    {
        key: '7',
        icon: () => h(InfoCircleOutlined),
        label: '关于',
        title: '关于Kokomi_Web项目',
    },


])
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    height: '100vh',
    transition: 'width 0.2s'
};

const collapsedStyle = {
    width: '80px' // 当折叠时的宽度
};

</script>