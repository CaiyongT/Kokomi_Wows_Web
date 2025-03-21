<template>
  <a-space direction="vertical">
    <!-- 自动补全 搜索用户信息 -->
    <a-auto-complete :focus="onSearchAutoComplete" v-model:value="userId" :options="options" style="width: 400px" @search="onSearchAutoComplete"
      @select="onSelect">
      <a-input-search size="large" placeholder="请输入用户昵称" enter-button />
    </a-auto-complete>

    <!-- 分段选择器 (a-segmented),选择服务器 -->
    <a-segmented v-model:value="server" :options="region">
      <!-- 
        使用 #label 插槽, 每个选项会传 { value, payload }
        在此根据有没有 payload.icon 决定用图标或图片
      -->
      <template #label="{ value: val, payload }">
        <div style="display: flex; flex-direction: column; align-items: center;">

          <!-- 如果有 icon => 显示图标 -->
          <template v-if="payload.iconComp">
            <component :is="payload.iconComp" style="font-size:28px;" />
          </template>

          <!-- 否则 => 显示本地图片 -->
          <template v-else>
            <a-avatar :src="payload.src" :style="payload.style">
              {{ payload.content }}
            </a-avatar>
          </template>

          <!-- 分段选项的文本(如 'asia','cn'等) -->
          <div>{{ val }}</div>
        </div>
      </template>
    </a-segmented>
  </a-space>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import IconCircleFlagsCn from '~icons/circle-flags/cn'

// 导入你的本地图片
import asiaPng from '@/assets/images/wows/region/asia.png'
import cnPng from '@/assets/images/wows/region/cn.png'//图片的CN不符合尺寸，改为使用图标
import euPng from '@/assets/images/wows/region/eu.png'
import naPng from '@/assets/images/wows/region/na.png'
import ruPng from '@/assets/images/wows/region/ru.png'

// 定义 region 数据
// 如果某项要使用 unplugin-icons 的图标，就给 payload.icon 赋值
//   比如 'ant-design-github-filled' => <i-ant-design-github-filled />
const region = reactive([
  {
    value: 'asia',
    payload: {
      src: asiaPng,
      style: {
        backgroundColor: '#f56a00',
      },
    },
  },
  {
    value: 'cn',
    payload: {
      // 使用 unplugin-icons icon
      // 例如 'ant-design-github-filled' => <i-ant-design-github-filled />
      icon: 'circle-flags/cn',
      iconComp: IconCircleFlagsCn,
      style: {
        backgroundColor: '#f56a00',
      }
    },
  },
  {
    value: 'eu',
    payload: {
      src: euPng,
      style: {
        backgroundColor: '#f56a00',
      },
    },
  },
  {
    value: 'na',
    payload: {
      src: naPng,
      style: {
        backgroundColor: '#f56a00',
      },
    },
  },
  {
    value: 'ru',
    payload: {
      src: ruPng,
      style: {
        backgroundColor: '#f56a00',
      },
    },
  },
])

// 默认选中第一个
const server = ref(region[0].value)

// auto-complete 相关
const emits = defineEmits(['onSearch'])
const userId = ref('')
const options = ref([])

/** 当输入变化时，发请求更新 options */
async function onSearchAutoComplete(query) {
  if (!query || query.length < 2) {
    options.value = []
    return
  }
  try {
    const res = await axios.get('/api/v1/platform/search/user/',
      { params: { region: server.value, nickname: query, limit: 10, check: false } })
    if (res.data) {
      const list = res.data.data || []  // 注意：返回值在 data 字段内
      options.value = list.map(item => ({
        label: item.name,      // 显示文本
        value: item.account_id // 实际选中的值
      }))
    }

  } catch (err) {
    console.error('搜索接口出错:', err)
    options.value = []
  }
}

/** 当选中自动补全某项 */
function onSelect(selectedValue, option) {
  emits('onSearch', { name: option.label,uid:option.value,server:server })
}
</script>

<style>
/* 如果你想对某个头像做局部微调，可以用class选择器 */
.avatar-cn .ant-avatar-img {
  object-fit: cover;
  object-position: 30% 20%;
}
</style>
