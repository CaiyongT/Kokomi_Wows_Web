<template>
    <a-layout-header theme="light" :style="headerStyle" style="display: flex;">
        <a-row justify="space-between" align="middle" style="width: 100%;">
            <!-- 左侧内容 -->
            <a-col style="display: flex; align-items: center;justify-content: flex-start;">
                <icon-ant-design-menu-unfold-outlined v-if="collapsed" class="navIcon" @click="toggle" />
                <icon-ant-design-menu-fold-outlined v-else class="navIcon" @click="toggle" />
                <icon-ant-design-reload-outlined class="navIcon" @click="refresh" />
                <a-breadcrumb>
                    <a-breadcrumb-item>首页</a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <a href="">首页</a>
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </a-col>

            <!-- 右侧内容 -->
            <a-col style="display: flex; align-items: center; justify-content: flex-end;">
                <icon-ant-design-github-filled class="navIcon" @click="handleGit" />
                <icon-ant-design-setting-outlined class="navIcon" @click="handleSetting" />
            </a-col>
        </a-row>
    </a-layout-header>
</template>

<script setup>
import { flexProps } from 'ant-design-vue/es/flex/interface';
import { defineProps, defineEmits } from 'vue';

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
</script>

<style>
.navIcon {
    color: rgb(0, 0, 0);
    font-size: 20px;
    margin-right: 15px;
}
</style>