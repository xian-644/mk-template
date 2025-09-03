import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  getters: {
    getUser: state => state.user,
    isLoggedIn: state => !!state.user
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
    async login(credentials) {
      try {
        // 这里可以添加实际的登录API调用
        // const response = await api.login(credentials)
        // this.setUser(response.data.user)

        // 模拟登录成功
        this.setUser({
          id: 1,
          username: credentials.username,
          name: '测试用户',
          role: 'user'
        })

        // 存储token
        localStorage.setItem('token', 'mock-token-value')

        return true
      } catch (error) {
        console.error('登录失败:', error)
        return false
      }
    },
    logout() {
      this.clearUser()
      localStorage.removeItem('token')
    }
  }
})
