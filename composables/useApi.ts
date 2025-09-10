// 公共请求方法配置
export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl || 'http://127.0.0.1:8000'

  // 通用请求方法
  const request = async <T = any>(url: string, options: any = {}): Promise<T> => {
    const defaultOptions = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'server': 'true',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await $fetch<T>(url, defaultOptions)
      return response
    } catch (error) {
      console.error(`请求失败 [${url}]:`, error)
      throw error
    }
  }

  // GET 请求
  const get = <T = any>(url: string, options: any = {}): Promise<T> => {
    return request<T>(url, { method: 'GET', ...options })
  }

  // POST 请求
  const post = <T = any>(url: string, data?: any, options: any = {}): Promise<T> => {
    return request<T>(url, { method: 'POST', body: data, ...options })
  }

  // PUT 请求
  const put = <T = any>(url: string, data?: any, options: any = {}): Promise<T> => {
    return request<T>(url, { method: 'PUT', body: data, ...options })
  }

  // DELETE 请求
  const del = <T = any>(url: string, options: any = {}): Promise<T> => {
    return request<T>(url, { method: 'DELETE', ...options })
  }

  return {
    request,
    get,
    post,
    put,
    delete: del,
    baseURL
  }
}
