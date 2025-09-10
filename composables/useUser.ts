import { apiEndpoints } from '~/api/endpoints'
import type { UserItem, UserResponse } from '~/types'

export const useUser = () => {
  const { get } = useApi()
  const { apiBaseUrl } = useRuntimeConfig().public

  // State
  const userInfo = useState<UserItem | null>('userInfo', () => null)
  const isLoading = useState<boolean>('isUserLoading', () => false)

  // Fetches user information from the API
  const fetchUserInfo = async () => {
    if (userInfo.value) {
      return
    }
    isLoading.value = true
    try {
      const response = await get<UserResponse>(apiEndpoints.user.info)
      if (response.data && response.data.list && response.data.list.length > 0) {
        const user = response.data.list[0]
        // Prepend base URL to photo path if it's not an absolute URL
        if (user.photo && !user.photo.startsWith('http')) {
          user.photo = `${apiBaseUrl}${user.photo}`
        }
        userInfo.value = user
      }
    }
    catch (error) {
      console.error('Failed to fetch user info:', error)
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    userInfo,
    isLoading,
    fetchUserInfo,
  }
}
