<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
        <!-- 加载状态：骨架屏 -->
        <template v-if="isLoading">
            <div v-for="n in 8" :key="n" class="col-span-full md:col-span-2 lg:col-span-1">
                <div class="relative w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <!-- Shimmer Effect -->
                    <div class="shimmer-effect"></div>
                    <!-- Loading Icon -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 text-gray-400 dark:text-gray-500" />
                    </div>
                </div>
            </div>
        </template>
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

<style scoped>
.shimmer-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 1.5s infinite;
  transform: translateX(-100%);
}

.dark .shimmer-effect {
    background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
