/**
 * 全局配置文件
 */
export default {
  // 是否启用多语言支持
  enableI18n: true,

  // 默认语言
  defaultLanguage: 'zh-CN',

  // 支持的语言列表
  supportedLanguages: ['zh-CN', 'en-US'],

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
