import type { RouteRecordRaw } from 'vue-router'

const authRouters: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index-page',
    component: () => import('../../App.vue'),
    children: [
      {
        path: 'auth',
        component: () => import('../../views/MSAuth.vue')
      }
    ]
  }
]

export default authRouters
