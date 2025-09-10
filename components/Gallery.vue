<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
        <!-- 加载状态 -->
        <div v-if="isLoading" class="col-span-full text-center">
            <p>正在加载图片...</p>
        </div>
        <!-- 图片列表 -->
        <template v-else v-for="image in displayImages" :key="image.id">
            <div class="col-span-full md:col-span-2 lg:col-span-1 group">
                <Image :src="image.src" :alt="`Image ${image.id}`" />
            </div>
        </template>
    </div>
</template>

<script setup>
// 使用usePhotos获取图片数据
const { displayImages, isLoading, fetchPhotoList } = usePhotos()

// 组件挂载时获取图片
onMounted(() => {
  fetchPhotoList()
})
</script>
