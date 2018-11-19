<template>
  <div class="detail">
    {{msg}}

    <transition name="loading">
      <loading v-show="showLoading"></loading>
    </transition>

    <footer-guild></footer-guild>
  </div>
    
</template>

<script>
  import loading from '../components/common/loading'
  import footerGuild from '../components/footer/footGuide'
    export default {
        name: "Detail",
        data(){
          return {
            msg: "detail",
            showLoading: false, //显示加载动画,
          }
        },
      components: {
          loading,
        footerGuild,
      }
    }
</script>

<style scoped>

</style>
