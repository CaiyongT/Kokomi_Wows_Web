<template>
    <div>

      <!-- 如果想分更多子Tab，也可以再次用 a-tabs 做二级标签页。-->
      
      <a-tabs>
        <a-tab-pane key="info" tab="基本信息"> ... </a-tab-pane>
        <a-tab-pane key="orders" tab="订单信息"> ... </a-tab-pane>
        <a-tab-pane key="activity" tab="行为分析"> ... </a-tab-pane>
      </a-tabs>
     
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    userData: {
      type: Object,
      required: true
    }
  })
  </script>
  