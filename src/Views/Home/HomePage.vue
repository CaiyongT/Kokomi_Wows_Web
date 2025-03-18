<template>
  <div>
    <!-- 循环展示所有图片按钮 -->
    <div>
      <button
        v-for="img in imageList"
        :key="img.path"
        @click="currentImage = img"
      >
        {{ img.fileName }}
      </button>
    </div>

    <!-- 显示当前选中的图片 -->
    <div v-if="currentImage">
      <h3>当前图片: {{ currentImage.fileName }}</h3>
      <img :src="currentImage.url" alt="selected" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from 'vue';
import { useWowsPng } from '../../util/useWowsPng.js'

// 把加载到的图片数据转成一个数组，便于 v-for 使用
const imageList = Object.entries(useWowsPng).map(([path, mod]) => {
  // path 形如 "../assets/images/a.png"
  // mod.default 是打包后对应的图片URL
  const fileName = path.split('/').pop().replace(/\.\w+$/, ''); // 去掉后缀
  return {
    path,
    fileName,
    url: mod.default
  }
})
console.log(imageList);
// currentImage 记录当前选中的图片，初始值可以是第一个
const currentImage = ref(imageList[0] ?? null)
</script>