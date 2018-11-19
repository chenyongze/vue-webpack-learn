<template>
  <div class="detail">
    {{msg}}


    <span @click="gotoCity">跳转 city</span>
    <transition name="loading">
      <loading v-show="showLoading"></loading>
    </transition>

    <footer-guild></footer-guild>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
    
</template>

<script>
  import loading from '../components/common/loading'
  import footerGuild from '../components/footer/footGuide'
  import alertTip from '../components/common/alertTip'

    export default {
        name: "Detail",
        data(){
          return {
            msg: "detail",
            showLoading: false, //显示加载动画,
            queryName: '',
            showAlert: true,
            alertText: "提示"
          }
        },
      components: {
          loading,
        footerGuild,
        alertTip,
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
