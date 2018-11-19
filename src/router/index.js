import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import UserCenter from '@/components/UserCenter'
import {routerMode} from '@/config/env'

Vue.use(Router)

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/user-center',
      name: 'UserCenter',
      component: UserCenter,
    },
  ]
})
