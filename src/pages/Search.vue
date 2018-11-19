<template>
    <div class="order">
      <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true"></head-top>

      {{msg}}

      <footer-guild></footer-guild>
    </div>
</template>

<script>
  import headTop from '../components/header/head'
  import footerGuild from '../components/footer/footGuide'
    export default {
        name: "search",
      data() {
          return {
            msg: 'search',
            loginWay: false,

          }
      },
      components: {
          headTop,
        footerGuild,
      }
    }
</script>

<style scoped>

</style>
