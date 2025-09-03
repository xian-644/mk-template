import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/main.less'
import config from './config'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

// 将配置注入全局属性
app.config.globalProperties.$config = config

app.mount('#app')
