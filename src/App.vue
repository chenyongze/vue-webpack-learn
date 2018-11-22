<template>
  <div id="app">
    <!--<img src="@/assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  // 引入组件
  // import WeuiVue from 'weui-vue'
  // 引入样式
  // import 'weui-vue/weui.css'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  /*@import './style/common';*/
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: .1rem .2rem ;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
