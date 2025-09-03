/**
 * 全局配置文件
 */
export default {
  // API基础URL
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',

  // 是否在控制台显示接口请求日志
  showApiLog: true,

  // 路由模式 - hash 或 history
  routerMode: 'history',

  // 是否启用页面标题自动设置
  enableAutoTitle: true,

  // 默认页面标题
  defaultTitle: 'Vue3 应用'
}
