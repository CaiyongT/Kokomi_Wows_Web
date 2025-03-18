<template>
    <div class="user-info-page">
      <!-- Ant Design 标签页组件 -->
      <a-tabs 
        :activeKey="activeKey"      
        @change="handleChange"    
        :type="tabsType"           
        tabBarGutter=22           
        style="margin: 16px;"
      >
        <!-- 动态渲染真实标签页 -->
        <a-tab-pane v-for="tab in realTabs" :key="tab.key">
          <!-- 自定义标签头 -->
          <template #tab>
            <span style="margin-right:6px;">{{ tabTitle(tab) }}</span>
            <!-- 关闭按钮（阻止事件冒泡避免触发标签切换） -->
            <CloseOutlined @click.stop="closeTab(tab.key)" />
          </template>
  
          <!-- 内容区域：根据 userData 显示不同内容 -->
          <UserSearchForm 
            v-if="tab.userData === null" 
            @onSearch="handleSearch(tab.key, $event)" 
          />
          <UserDetailTabs v-else :userData="tab.userData" />
        </a-tab-pane>
  
        <!-- 特殊标签页：用于添加新标签的 '+' 按钮,最多允许5个标签页 -->
        <a-tab-pane 
          key="__add__" 
          :disabled="realTabs.length >= 5"
        > 
          <template #tab>
            <a-tooltip :title="realTabs.length >=5 ? '页签达到最大了喵' : '新增标签页'">
              <span>
                <PlusOutlined />
              </span>
            </a-tooltip>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { PlusOutlined, CloseOutlined } from '@ant-design/icons-vue'
  
  // 组件配置 ==============================================
  const tabsType = ref('line') // 标签页样式类型（line | card | editable-card）
  
  // 标签页数据 ============================================
  let uid = 1 // 用于生成唯一 key 的计数器
  const realTabs = ref([      // 标签页数组，每个元素包含：
    { key: 'tab-' + uid++,    // 唯一标识
      userData: null }        // 用户数据（null 表示搜索状态）
  ])
  const activeKey = ref(realTabs.value[0].key) // 当前激活标签页的 key
  
  // 事件处理 ==============================================
  // 标签切换事件
  function handleChange(newKey) {
    if (newKey === '__add__') {  // 点击的是添加按钮
      const createdKey = addTab()
      activeKey.value = createdKey // 自动切换到新标签页
    } else {
      activeKey.value = newKey    // 正常切换
    }
  }
  
  // 新增标签页
  function addTab() {
    const newKey = 'tab-' + uid++
    realTabs.value.push({
      key: newKey,
      userData: null // 初始状态为搜索模式
    })
    return newKey
  }
  
  // 关闭标签页
  function closeTab(key) {
    const idx = realTabs.value.findIndex(t => t.key === key)
    if (idx > -1) {
      realTabs.value.splice(idx, 1)
      
      // 如果关闭的是当前激活标签页
      if (activeKey.value === key) {
        // 切换到最后一个标签页（如果没有则置空）
        const last = realTabs.value[realTabs.value.length - 1]
        activeKey.value = last ? last.key : null
      }
    }
  }
  
  // 搜索回调（当 UserSearchForm 提交时触发）
  function handleSearch(tabKey, userData) {
    const tab = realTabs.value.find(t => t.key === tabKey)
    if (tab) {
      tab.userData = userData // 更新为详情展示模式
      activeKey.value = tabKey // 保持当前标签页激活
    }
  }
  
  // 工具函数 ==============================================
  // 生成标签标题
  function tabTitle(tab) {
    return tab.userData ? tab.userData.name : '搜索' // 根据状态显示不同标题
  }
  </script>