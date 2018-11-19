<template>
  <div class="home">
    <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true"></head-top>

    <div class="home_content">
      <ul>
        <li>
          <div class="content_left">
            <img src="../images/activity.png" alt="">
          </div>
          <div class="content_right">
            <div class="content_right_title">
              北京顺义旺泉街道吹响“河长哨”，七分干渠垃圾少了水清了
            </div>
            <div class="content_right_span">
              <span>北京日报客户端</span>
              <span>15:29</span>
            </div>
          </div>
        </li>
      </ul>
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
  .home_content {

  }
  li {
    float: left;
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
      width: 60%;
      .content_right_title {
        font-size: .8rem;
      }
      .content_right_span {
        font-size: .4rem;
      }

    }
  }


</style>
