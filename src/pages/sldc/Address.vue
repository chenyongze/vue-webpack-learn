<template>
  <div class="address">
    <ul>
      <li><span>收货人</span> <span>周淑仪</span></li>
      <li><span>手机号码</span> <span></span></li>
      <li><span>所在地区</span> <span></span></li>
      <li><span>详细地址</span> <span></span></li>
    </ul>
    <div class="button_b">
      保存
    </div>
  </div>
</template>

<script>
    export default {
        name: "Address"
    }
</script>

<style lang="scss" scoped>
  $n:75rem;
  .address {
    font-family: PingFangSC-Light;
    font-size: 28px/#{$n};
    color: #151515;
    letter-spacing: 0;
    line-height: 32px/#{$n};
    margin: 1rem 1rem;
  }

  ul {
    margin: .2rem auto;

    li {
      margin: .3px auto;
      height: 94px/#{$n};
    }
  }

  .button_b {
    color: white;
    text-align: center;
    background-color: #2C2C2C;
    height: 40px/#{$n};
    width: auto;
    bottom: -.5rem;
    margin-left: 120px;
    position:absolute;
  }



</style>
