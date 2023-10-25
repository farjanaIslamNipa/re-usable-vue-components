import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Home.vue'
import Career from '../career.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../About.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../Career.vue')
    }
  ]
})

export default router
