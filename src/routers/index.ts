import { createRouter, createWebHistory } from 'vue-router'
import { coreState } from '../states'

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
          path: 'auth',
          name: 'auth-page',
          component: () => import('../views/MSAuth.vue')
        },
        {
          path: 'space',
          name: 'space-page',
          component: () => import('../views/MSMinspace.vue'),
          meta: {
            authRequired: true
          },
          children: [
            {
              path: '',
              name: 'activities-page',
              component: () => import('../components/core/central_space/MSCentralSpace.vue')
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const {
    user: {
      actions: { isAuthenticated }
    }
  } = coreState

  if (to.meta.authRequired) {
    if (!isAuthenticated()) {
      next({
        name: 'auth-page',
        query: { authType: 'login', redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
