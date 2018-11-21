<template>
    <div class="test_b">
      <div class="profile__heading--desc-body">
        <div class="profile__desc">
          <p>要战胜自我，首先要战胜自己的习惯思维<br>实现明天理想的唯一障碍是今天的疑虑<br>生活不在于握有一张好牌，而在于把手里的牌打好</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "B",

    }
</script>

<style lang="scss" scoped>
  .profile__heading--desc-body {
    background-color: #EEE;
    width: 100%;
    font-size: 13px;
    overflow:auto;
    height:196px;
    padding: 20px;
    margin: .3rem auto;
    border: red solid .1rem;
    font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Courier New", monospace;
  }

  .profile__desc {
    line-height: 1.428;
  }

</style>
