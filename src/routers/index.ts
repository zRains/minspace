import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@store/user.store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
                  path: 'new_room',
                  name: 'new_room',
                  component: () => import('../components/core/central_space/modules/rooms/MSNewRoomContainer.vue')
                },
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
                  component: () => import('../components/core/central_space/modules/settings/MSSettingContainer.vue'),
                  children: [
                    {
                      path: 'setting_profile',
                      name: 'setting_profile',
                      component: () => import('../components/core/central_space/modules/settings/pages/MSSettingProfilePage.vue')
                    },
                    {
                      path: 'setting_appearance',
                      name: 'setting_appearance',
                      component: () => import('../components/core/central_space/modules/settings/pages/MSSettingAppearancePage.vue')
                    },
                    {
                      path: 'setting_notification',
                      name: 'setting_notification',
                      component: () => import('../components/core/central_space/modules/settings/pages/MSSettingNotificationPage.vue')
                    },
                    {
                      path: 'setting_accessibility',
                      name: 'setting_accessibility',
                      component: () => import('../components/core/central_space/modules/settings/pages/MSSettingAccessibilityPage.vue')
                    }
                  ]
                },
                {
                  // TODO 待改进：添加动态参数
                  path: 'user/:uid(\\d+)',
                  name: 'user',
                  component: () => import('../components/core/central_space/modules/users/MSUserContainer.vue'),
                  beforeEnter(to, from, next) {
                    // const {
                    //   leftSidebar: {
                    //     states: { activeUserCache }
                    //   }
                    // } = coreState
                    // if (activeUserCache.uid === -1) {
                    //   next({ name: 'activities' })
                    //   return
                    // }
                    next()
                  }
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

/** 全局路由守卫 */
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // 是否需要验证
  if (to.meta.authRequired) {
    if (!userStore.hasToken()) {
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
