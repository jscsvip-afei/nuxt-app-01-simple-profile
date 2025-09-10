export interface Data {
  name: string;
  photo: string;
  title: string;
  bio: string;
  email: string;
  website: string;
  phone: string;
  x: string;
  facebook: string;
  instagram: string;
  github: string;
  tiktok: string;
  images: string[];
}

// 图片相关类型定义
export interface PhotoItem {
  id: number
  image: string
  create_time: string
  update_time: string
  remark: string
  weigh: number
}

export interface PhotoResponse {
  code: number
  msg: string
  time: number
  data: {
    list: PhotoItem[]
    total: number
    remark: string
  }
}

// API响应通用类型
export interface ApiResponse<T = any> {
  code: number
  msg: string
  time: number
  data: T
}
