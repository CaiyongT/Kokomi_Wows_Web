<template>
    <a-layout-sider :style="siderStyle" :collapsed="props.collapsed" :theme="props.theme">
        <div v-if="!props.collapsed" style="height:60px;display: flex;justify-content: center;align-items: center;">
            <h2>我是Logo喵</h2>
        </div>
        <div v-else style="height:60px;display: flex;justify-content: center;align-items: center;">
            <h5>我是Logo喵</h5>
        </div>
        <a-menu mode="inline" :theme="props.theme" 
                :selectedKeys="selectedKeys" 
                :openKeys="openKeys" :items="items"
                @click="onMenuClick" />
    </a-layout-sider>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref, h, onMounted ,computed} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router'
//按需导入图标
import {
    RadarChartOutlined,
    HomeOutlined,
    DotChartOutlined,
    OrderedListOutlined,
    FlagOutlined,
    ToolOutlined,
    InfoCircleOutlined
} from '@ant-design/icons-vue';


// 路由相关
const router = useRouter()

const route = useRoute()
// 记录选中的菜单 key、展开的菜单 key
const selectedKeys = ref([])
const openKeys = ref([])
// 多语言
const { t } = useI18n()

// 点击菜单事件，根据 e.key 跳转
function onMenuClick(e) {
  // e.key 对应 items 数组中的 key
  router.push({ name: e.key })
  selectedKeys.value = [e.key]
}

// 当页面刷新或路由变化时，自动更新高亮选中的菜单项
function updateMenuSelected() {
  const currentName = route.name
  if (currentName) {
    selectedKeys.value = [currentName]
  }
}

// 初次挂载时同步
onMounted(() => {
  updateMenuSelected()
})

const props = defineProps({
    collapsed: {
        default: false
    },
    theme: {
        default: 'light'
    }
});

// 侧边栏菜单项
// key 对应路由 name
// label 使用 t(...) 结合 meta.titleKey
const items = computed(()=>[
  {
    key: 'home', // route.name = "Home"
    icon: () => h(HomeOutlined),
    // 使用 t('router.home.title') 对应 zh.json/en.json 中的 router.home.title
    label: t('router.home.title')
  },
  {
    key: 'clanstatus',
    icon: () => h(RadarChartOutlined),
    label: t('router.clanstatus.title')
  },
  {
    key: 'gamestat',
    icon: () => h(DotChartOutlined),
    label: t('router.gamestat.title')
  },
  {
    key: 'halloffame',
    icon: () => h(OrderedListOutlined),
    label: t('router.halloffame.title')
  },
  {
    key: 'gamingtools',
    icon: () => h(FlagOutlined),
    label: t('router.gamingtools.title')
  },
  {
    key: 'playerstatus',
    icon: () => h(ToolOutlined),
    label: t('router.playerstatus.title')
  },
  {
    key: 'about',
    icon: () => h(InfoCircleOutlined),
    label: t('router.about.title')
  }
])

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    height: '100vh',
    transition: 'width 0.2s'
};



</script>