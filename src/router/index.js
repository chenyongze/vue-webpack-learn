import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

import Error from '../pages/Error'


// 按需加载
const detail = r => require.ensure([], () => r(require('../pages/Detail')), 'detail')
const home = r => require.ensure([], () => r(require('../pages/Home')), 'home')
const order = r => require.ensure([], () => r(require('../pages/Order')), 'order')
const profile = r => require.ensure([], () => r(require('../pages/Profile')), 'profile')
const search = r => require.ensure([], () => r(require('../pages/Search')), 'search')
const city = r => require.ensure([], () => r(require('../pages/City')), 'city')

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
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail,
      meta: {
        title: "详情页面",
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile,
    },
    {
      path: '/city',
      name: 'city',
      component: city,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/search/:keyword',
      name: 'search',
      component: search,
    },
    {
      path: '*',
      component: Error,
    },
  ]
})
