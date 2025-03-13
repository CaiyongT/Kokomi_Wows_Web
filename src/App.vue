<template>
  <!-- 在外层使用 ConfigProvider 提供全局配置 -->
  <a-config-provider
    :locale="globalConfig.locale"
    :component-size="globalConfig.componentSize"
    :direction="globalConfig.direction"
  >
    <!-- 用 router-view 的 slot 把组件传给 <component :is="Component"> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-config-provider>
</template>

<script setup>
import { inject } from 'vue'

// 注入全局配置对象
const globalConfig = inject('GlobalConfig')
</script>

<style scoped>
/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
