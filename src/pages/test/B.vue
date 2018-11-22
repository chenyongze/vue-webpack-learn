<template>
    <div class="test_b">
      <div class="slider">
        <ul>
          <li><a :href="''" >item01</a></li>
          <li><a :href="''" >item02</a></li>
          <li><a :href="''" >item03</a></li>
          <li><a :href="''" >item04</a></li>
          <li><a :href="''" >item05</a></li>
        </ul>
      </div>

      <div class="btn-group" role="group" aria-label="">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
      </div>
      <div class="con-3 b-q">0000001</div>
      <div class="con-3">0000002</div>
      <div class="con-3">0000003</div>
      <div class="con-3">0000004</div>
      <div class="con-3">0000005</div>
    </div>
</template>

<script>

  export default {
        name: "B",

    }
</script>

<style lang="css" scoped>
  .slider {
    padding: 10px auto;
    margin: 10px auto;
    ul {
      background-color: #fff;
    }
  }
  .b-q {
    background-color: #3190e8;
  }





</style>
