<template>
  <div>

    <!-- 如果想分更多子Tab，也可以再次用 a-tabs 做二级标签页。-->
    {{ userId }}
    <a-tabs>
      <a-tab-pane key="info" tab="基本信息"> {{userinfo}} </a-tab-pane>
      <a-tab-pane key="orders" tab="订单信息"> ... </a-tab-pane>
      <a-tab-pane key="activity" tab="行为分析"> ... </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios'
const props = defineProps({
  //传入用户id
  userId: {
    type: Object,
    required: true
  }
})
const userinfo = {};
onMounted(() => {

   // 例如获取 userId.uid，并发起请求
   const uid = props.userId.uid
 const server = props.userId.server
  axios.get('/api/v1/robot/user/account/', {
    params: {
      region: server,
      account_id: uid,
      language: 'chinese',
      game_type: 'overall'
    }
  })
    .then(res => {
      console.log('用户信息:', res.data)
      this.userinfo = res.data
      // 在这里处理用户信息...
    })
    .catch(err => {
      console.error('获取用户信息出错:', err)
    })
})
</script>