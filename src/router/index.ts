import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/Login.vue'),
    meta: {
      title: '',
      icon: '',
    }, // 建议进行路由懒加载，优化访问性能
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/components/register.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
