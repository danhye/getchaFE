import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/views/GoodsList.vue'),
    },
    {
      path: '/goods/:id',
      name: 'goods-detail',
      component: () => import('@/views/GoodsDetail.vue'),
    },
    {
      path: '/goods/register',
      name: 'goods-register',
      component: () => import('@/views/GoodsRegister.vue'),
    },
    {
      path: '/goods/:id/edit',
      name: 'goods-edit',
      component: () => import('@/views/GoodsEdit.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('@/views/Mypage.vue'),
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('@/views/Landing.vue'),
    },
  ],
})

export default router

