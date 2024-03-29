/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
// TODO：这个是 vuetify 的布局特性与路由自动注册，目前搞不清先注释掉
// import { setupLayouts } from 'virtual:generated-layouts'

// TODO： 路由应该是自动导入的
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/content/bottom-sheet',
      component: () => import('../pages/bottom-sheet/page-bottom-sheet.vue')
    },
    {
      path: '/content/btn',
      component: () => import('../pages/btn/page-btn.vue')
    },
    {
      path: '/content/border-radius',
      component: () => import('../pages/border-radius/border-radius.vue')
    },
    {
      path: '/content/box-shaow',
      component: () => import('../pages/box-shaow/box-shaow.vue')
    },
    {
      path: '/content/skeleton-loaders',
      component: () => import('../pages/skeleton-loaders/skeleton-loaders.vue')
    },
    {
      path: '/content/grid-layout',
      component: () => import('../pages/grid-layout/grid-layout.vue')
    },
    {
      path: '/content/page-animation',
      component: () => import('../pages/page-animation/page-animation.vue')
    },
    {
      path: '/content/cpt-test',
      component: () => import('../pages/cpt-test/cpt-test.vue')
    },
    {
      path: '/content/card-show',
      component: () => import('../pages/card-show/card-show.vue')
    }

  ]
  // extendRoutes: setupLayouts,
})

export default router
