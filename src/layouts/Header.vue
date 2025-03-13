<template>
    <a-layout-header theme="light" :style="headerStyle" style="display: flex;">
        <a-row justify="space-between" align="middle" style="width: 100%;">
            <!-- 左侧内容 -->
            <a-col style="display: flex; align-items: center;justify-content: flex-start;">
                <icon-ant-design-menu-unfold-outlined v-if="collapsed" class="navIcon" @click="toggle" />
                <icon-ant-design-menu-fold-outlined v-else class="navIcon" @click="toggle" />
                <icon-ant-design-reload-outlined class="navIcon" @click="refresh" />
                <a-col>
                    <a-breadcrumb>
                        <a-breadcrumb-item v-for="(record, index) in matchedRecords" :key="index">
                            <router-link :to="record.path">
                                {{  t(record.meta.titleKey) }}
                            </router-link>
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </a-col>
            </a-col>

            <!-- 右侧内容 -->
            <a-col style="display: flex; align-items: center; justify-content: flex-end;">
                <a-select  style="width: 120px"  :value="currentLang"   @change="handleLangChange">
                    <a-select-option value="zh">中文</a-select-option>
                    <a-select-option value="en">English</a-select-option>
                </a-select>
                <icon-ant-design-github-filled class="navIcon" @click="handleGit" />
                <icon-ant-design-setting-outlined class="navIcon" @click="handleSetting" />
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script setup>
import { defineProps, defineEmits, inject, computed,ref } from 'vue';
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

// 注入全局配置
const globalConfig = inject('GlobalConfig')
// 拿到当前路由信息
const route = useRoute()
// 多语言 API
const { locale, t } = useI18n()
//  AntD组件文案也随语言切换
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
// 用于 <a-select> 的当前选中的值
const currentLang = ref(locale.value)
// 监听 <a-select> 改变事件
 function handleLangChange(newVal) {
  currentLang.value = newVal
  // 更新 i18n
  locale.value = newVal
  // 更新 AntD 文案
  if (newVal === 'en') {
    globalConfig.locale = enUS
  } else {
    globalConfig.locale = zhCN
  }
}
const props = defineProps({
    collapsed: Boolean,
});
const emit = defineEmits(['toggle']);

const toggle = () => {
    emit('toggle');
};
const refresh = () => {
    console.log('刷新喵');
}
const handleSetting = () => {
    console.log('打开设置喵');
}
const handleGit = () => {
    console.log('打开Git仓库喵');
}
const headerStyle =
{
    color: '#000',
    height: '64px',
    lineHeight: '64px',
    backgroundColor: '#fff',
    padding: '0px 15px',
};

// 只保留有 titleKey 的路由
const matchedRecords = computed(() =>
  route.matched.filter(r => r.meta && r.meta.titleKey)
)
</script>

<style>
.navIcon {
    color: rgb(0, 0, 0);
    font-size: 20px;
    margin-right: 15px;
}
</style>