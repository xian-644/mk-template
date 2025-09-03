import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送前做一些处理，例如添加 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    // 根据自定义错误码处理错误
    if (res.code && res.code !== 200) {
      ElMessage({
        message: res.message || '请求失败',
        type: 'error',
        duration: 5 * 1000
      })

      // 处理特定错误码，例如 401 未授权
      if (res.code === 401) {
        // 可以在这里处理登出逻辑
      }

      return Promise.reject(new Error(res.message || '请求失败'))
    } else {
      return res
    }
  },
  error => {
    console.error('响应错误：', error)
    ElMessage({
      message: error.message || '请求失败',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 封装 GET 请求
export function get(url, params) {
  return service({
    url,
    method: 'get',
    params
  })
}

// 封装 POST 请求
export function post(url, data) {
  return service({
    url,
    method: 'post',
    data
  })
}

// 封装 POST JSON 请求，自动设置Content-Type并直接返回JSON数据
export function postJson(url, data) {
  return service({
    url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(res => res.data || res)
}

// 封装 PUT 请求
export function put(url, data) {
  return service({
    url,
    method: 'put',
    data
  })
}

// 封装 DELETE 请求
export function del(url, params) {
  return service({
    url,
    method: 'delete',
    params
  })
}

export const instance = service // 导出实例，方便在其他地方使用

export default service
