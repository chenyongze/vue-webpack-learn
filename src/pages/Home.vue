<template>
  <div class="home">
    <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true"></head-top>

    <div class="home_content">
      <ul>

        <li v-for="item in list">
          <router-link :to="{
          path:'/detail',query:{}
          }">
          <div class="content_left">
            <img :src="item.img_url" alt="">
          </div>
          <div class="content_right">
            <div class="content_right_title">
              {{item.title}}
            </div>
            <div class="content_right_span">
              <span>{{item.comp}}</span>
              <span>{{item.timex}}</span>
            </div>
          </div>
          </router-link>
        </li>

      </ul>
    </div>

    <footer-guild></footer-guild>
  </div>
</template>

<script>
  import headTop from '../components/header/head'
  import footerGuild from '../components/footer/footGuide'
  import {newList} from '../service/getData'
  export default {
    name: 'Home',
    data() {
      return {
        loginWay: false,
        list:[],
      }
    },
    components: {
      headTop,
      footerGuild,
    },
    mounted() {
      newList().then( res => {
        this.list = res.list;
      });
      console.log(this.list)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home_content {

  }
  li {
    float: left;
    margin: .1rem 0;
    .content_left {
      float: left;
      width: 30%;
      img{
        width: 100%;
        height: 5.4rem;
      }

    }
    .content_right {
      float: left;
      width: 65%;
      .content_right_title {
        font-size: .6rem;
      }
      .content_right_span {
        font-size: .4rem;
      }

    }
  }
</style>
