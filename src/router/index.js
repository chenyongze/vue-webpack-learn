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
const card = r => require.ensure([], () => r(require('../pages/Card')), 'card')

const testA = r => require.ensure([], () => r(require('../pages/test/A')), 'test')
const testB = r => require.ensure([], () => r(require('../pages/test/B')), 'test')

// sldc
const sldcAddress = r => require.ensure([], () => r(require('../pages/sldc/Address')), 'sldc')
const sldcMe = r => require.ensure([], () => r(require('../pages/sldc/Me')), 'sldc')

Vue.use(Router)


const routes_r =[
  {
    path: '/sldc-address',
    meta: {
      title: 'sldcAddress'
    },
    component: sldcAddress
  },
  {
    path: '/sldc-me',
    meta: {
      title: 'sldcMe'
    },
    component: sldcMe
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Home',
    meta: {
      title: '首页'
    },
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
    meta: {
      title: '我的'
    },
    component: profile,
  },
  {
    path: '/city',
    name: 'city',
    meta: {
      title: 'city'
    },
    component: city,
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单'
    },
    component: order,
  },
  {
    path: '/test/a',
    name: 'test-a',
    meta: {
      title: 'test-a'
    },
    component: testA,
  },
  {
    path: '/test/b',
    name: 'test-b',
    meta: {
      title: 'test-b'
    },
    component: testB,
  },
  {
    path: '/card',
    name: 'card',
    meta: {
      title: 'card'
    },
    component: card,
  },
  {
    path: '/search/:keyword',
    name: 'search',
    meta: {
      title: '搜索'
    },
    component: search,
  },
  {
    path: '*',
    component: Error,
  },
];

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
  routes: routes_r
})
