import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Profile from '@/pages/Profile'
import City from '@/pages/City'

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
      meta: {
        title: "详情页面",
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/city',
      name: 'city',
      component: City,
    },
  ]
})
