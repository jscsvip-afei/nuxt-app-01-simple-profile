<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
        <template v-for="(image, index) in displayImages" :key="index">
            <div class="col-span-full md:col-span-2 lg:col-span-1 group">
                <Image :src="image" />
            </div>
        </template>
    </div>
</template>

<script setup>
// 获取环境配置
const config = useRuntimeConfig()
const baseURL = config.public.apiBaseUrl || 'http://127.0.0.1:8000'

// 获取静态配置作为后备
const app = useAppConfig()
const { data: { images: fallbackImages } } = app

// 显示的图片列表
const displayImages = ref(fallbackImages)

// 从API获取图片数据
try {
  const response = await $fetch(`${baseURL}/api/profile.Photo/index`, {
    headers: {
      'server': 'true'
    }
  })
  
  if (response && response.code === 1 && response.data && response.data.list && Array.isArray(response.data.list)) {
    // 处理API返回的图片地址
    displayImages.value = response.data.list.map(item => {
      // 如果图片路径是完整URL，直接使用
      if (item.image.startsWith('http')) {
        return item.image
      }
      // 否则拼接baseURL
      return `${baseURL}${item.image.startsWith('/') ? '' : '/'}${item.image}`
    })
    console.log('成功获取图片列表:', displayImages.value)
  } else {
    console.warn('API响应格式不正确:', response)
  }
} catch (error) {
  // API请求失败时，使用静态图片作为后备
  console.warn('获取图片API失败，使用静态图片:', error)
}
</script>
