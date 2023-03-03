import { createRouter, createWebHistory } from 'vue-router'
import { coreState } from '../states'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Base routers
    {
      path: '/',
      name: 'index',
      children: [
        {
          path: 'auth',
          name: 'auth',
          component: () => import('../views/MSAuth.vue')
        },
        {
          path: 'space',
          component: () => import('../views/MSMinspace.vue'),
          meta: {
            authRequired: true
          },
          children: [
            {
              path: '',
              component: () => import('../components/core/central_space/MSCentralSpace.vue'),
              redirect: { name: 'activities' },
              children: [
                {
                  path: 'activities',
                  name: 'activities',
                  component: () => import('../components/core/central_space/modules/activities/MSActivitiesContainer.vue')
                },
                {
                  path: 'rooms',
                  name: 'rooms',
                  component: () => import('../components/core/central_space/modules/rooms/MSRoomContainer.vue')
                },
                {
                  path: 'notifications',
                  name: 'notifications',
                  component: () => import('../components/core/central_space/modules/notifications/MSNotificationContainer.vue')
                },
                {
                  path: 'settings',
                  name: 'settings',
                  component: () => import('../components/core/central_space/modules/settings/MSSettingContainer.vue')
                },
                {
                  path: 'users',
                  name: 'users',
                  component: () => import('../components/core/central_space/modules/users/MSUserContainer.vue')
                },
                {
                  path: 'messengers',
                  name: 'messengers',
                  component: () => import('../components/core/central_space/modules/messengers/MSMessengerContainer.vue')
                }
              ]
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
        name: 'auth',
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
