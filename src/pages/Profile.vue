<template>
  <div class="user_center">
    <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true"></head-top>
    {{msg}}
    <footer-guild></footer-guild>
  </div>
</template>

<script>
  import headTop from '../components/header/head'
  import footerGuild from '../components/footer/footGuide'
    export default {
        name: "profile",
        data() {
          return {
            'msg': "userCenter"
          }
        },
      components: {
        headTop,
        footerGuild,
      },
    }
</script>

<style scoped>

</style>
