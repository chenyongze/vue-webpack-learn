<template>
  <div class="detail">
    {{msg}}


    <span @click="gotoCity">跳转 city</span>
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
            queryName: '',
          }
        },
      components: {
          loading,
        footerGuild,
      },
      methods: {
        gotoCity: function () {
          this.$router.push({
            name:'city',
            query: {
              queryId:'20180822',
              queryName: 'query',
              tmpVal: 'yongze.chen',
            }
          })

        }
      }
    }
</script>

<style scoped>

</style>
