<template>
  <div class="test">
    <span>{{testString}}</span>
  </div>
    
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "Test",
      data() {
          return {
            // testString: 1,
          }
      },
      computed: {
        ...mapState([
         'testString',
        ])
      },
      mounted() {
          console.log(typeof this.testString);
      }
    }
</script>

<style scoped>

</style>
