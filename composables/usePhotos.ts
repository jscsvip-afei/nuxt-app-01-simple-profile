import { photoApi } from '~/api/photo'

// 图片相关的API接口
export const usePhotos = () => {
  const displayImages = ref<{ id: number; src: string }[]>([])
  const isLoading = ref(true)
  
  // 获取环境配置和API方法
  const config = useRuntimeConfig()
  const { get } = useApi()
  const baseURL = config.public.apiBaseUrl || 'http://127.0.0.1:8000'

  // 请求图片列表的函数
  const fetchPhotoList = async () => {
    isLoading.value = true
    try {
      const response = await photoApi.getPhotoList()
      
      if (response && response.code === 1 && response.data && response.data.list) {
        // 处理API返回的图片地址
        displayImages.value = response.data.list.map(item => {
          let imageUrl = item.image.replace(/['"]/g, '') // 清理URL
          
          // 返回包含id和src的对象
          return {
            id: item.id,
            src: imageUrl.startsWith('http') ? imageUrl : `${baseURL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
          }
        }).filter(item => item.src) // 过滤掉无效的URL
        
        console.log('成功获取图片列表 (from usePhotos):', displayImages.value)
      } else {
        console.warn('API响应格式不正确:', response)
      }
    } catch (error) {
      console.warn('获取图片API失败:', error)
    } finally {
      isLoading.value = false
    }
  }

  // 返回响应式状态和方法
  return {
    displayImages,
    isLoading,
    fetchPhotoList
  }
}
