<template>
  <div class="home">
    <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true">
      <!-- <div slot="changeLogin" class="change_login" @click="changeLoginWay">{{loginWay? "密码登录":"短信登录"}}</div> -->
    </head-top>

      <ul>
        <li><router-link to="/city">city</router-link></li>
        <li><router-link to="/user-center">user-center</router-link></li>
        <li><router-link to="/detail">Detail</router-link></li>
        <li>{{msg}}</li>
        <li>{{msg}}</li>
      </ul>

    <div class="content">
      <div class="left-index">

      </div>
      <div class="right-index">

      </div>
    </div>

    <footer-guild></footer-guild>
  </div>
</template>

<script>
  import headTop from '../components/header/head'
  import footerGuild from '../components/footer/footGuide'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginWay: false,
    }
  },
  components: {
    headTop,
    footerGuild,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .home{
    color: gray;
  }

  .content{
    /*float: left;*/
    .left-index{
      border: red 1px solid;
      width: 120px;
      height: 130px;
      float: left;
    }
    .right-index{
      border: yellow 1px solid;
      width: 120px;
      height: 130px;
      float: left;
    }
  }
footer{
  margin: 400px 130px;
  position: absolute;
  /*float: none;*/
  text-align: center;
}
</style>
