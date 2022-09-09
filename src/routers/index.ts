import { createRouter, createWebHistory } from 'vue-router'

// Router modules
// import useAuthRouters from './auth_routers/index'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Base routers
    {
      path: '/',
      name: 'index-page',
      component: () => import('../App.vue'),
      children: [
        {
          path: 'au',
          name: 'au-page',
          component: () => import('../views/MSAuth.vue')
        },
        {
          path: 'ms',
          name: 'ms-page',
          component: () => import('../views/MSMinspace.vue')
        }
      ]
    }
  ]
})

export default router
