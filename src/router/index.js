import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../About.vue')
    },
    {
      path: '/select-dropdown',
      name: 'SelectLayout',
      component: () => import('@/pages/SelectLayout.vue')
    }
  ]
})

export default router
