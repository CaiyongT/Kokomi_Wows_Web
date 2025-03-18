<template>
    <div>
      <a-input 
        v-model:value="keyword"
        placeholder="请输入用户关键词"
        style="width: 200px; margin-right: 8px;"
      />
      <a-button type="primary" @click="searchUser">
        搜索
      </a-button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 定义组件事件, 父组件会用 @onSearch 监听
  const emits = defineEmits(['onSearch'])
  
  const keyword = ref('')
  
  function searchUser() {
    // 示例：模拟异步搜索
    setTimeout(() => {
      // 假设搜到用户信息
      const userData = {
        name: '张三', // 你可以塞更多字段
        age: 20
      }
      // 通过自定义事件把搜索结果返回给父组件
      emits('onSearch', userData)
    }, 800)
  }
  </script>
  