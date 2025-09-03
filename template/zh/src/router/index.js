import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // 路由懒加载
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // 如果访问的是登录页，且已有token，则直接跳转到首页
  if (to.path === '/login' && token) {
    next('/')
    return
  }

  // 如果访问的不是登录页，且没有token，则跳转到登录页
  if (to.path !== '/login' && !token) {
    next('/login')
    return
  }

  next()
})

export default router
