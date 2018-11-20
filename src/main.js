// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import {routerMode} from './config/env'

// add rem
import './config/rem'
import FastClick from 'fastclick'
//延迟点击事件
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


Vue.config.productionTip = false

// 页面 title 处理
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store:store,
  components: { App },
  template: '<App/>'
})
