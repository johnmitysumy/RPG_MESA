import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/girardado',
      name: 'girardado',
      component: () => import('../views/GirarDado.vue')
    }
  ]
})

export default router
