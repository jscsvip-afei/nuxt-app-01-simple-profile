import type { PhotoResponse } from '~/types'
import { apiEndpoints } from './endpoints'
/**
 * 图片相关的API接口
 */
export const photoApi = {
  /**
   * 获取图片列表
   * @returns Promise<PhotoResponse>
   */
  getPhotoList: (): Promise<PhotoResponse> => {
    const { get } = useApi()
    return get<PhotoResponse>(apiEndpoints.photos.list)
  },
}
