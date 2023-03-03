import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/quotes', name: 'Quotes', component: () => import('@/views/QuotePage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
