<template>
    <div class="city">
      <span @click="showmea()">{{cityNamex}}</span>

      <span>queryName::{{queryName}}</span>
      <span>queryId:::{{queryId}}</span>
      <span>{{$route.query.tmpVal}}</span>

      <span @click="showmea()">{{cityNamex}}</span>

      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>

  import {currentcity,currentcityx} from '../service/getData';
  import alertTip from '@/components/common/alertTip';
  import {getStore, setStore, removeStore} from '../config/mUtils'

    export default {
        name: "City",
        data(){
          return {
            showAlert: false, //显示提示组件
            alertText: null, //提示的内容
            msg: "city",
            cityid: 0,
            cityNamex: 'a-b-c',
            queryName: '',
            queryId: 0,
          }
        },
      components:{
        alertTip
      },

      mounted(){
        //query传参接收
        this.queryName = this.$route.query.queryName;
        this.queryId = this.$route.query.queryId;

        // setStore("yongze.chen",'ok---test');
        // this.cityid = this.$route.params.cityid;
        this.cityid = 1;
        //获取当前城市名字
        currentcity().then(res => {
          console.log(res);
          this.cityname = res.data.name;
        })

        console.log(currentcityx().then( res=> {
          console.log(res);
          this.cityNamex = res.name;
          // this.showAlert = true;
          // this.alertText = '请输入正确的账号';
        }));
        // this.initData();
      },
      methods: {
        async showmea (){
            this.cityNamex = getStore('yongze.chen');
            this.showAlert = true;
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .city {
    @include bis("../images/address_bottom.png")

  }

</style>
