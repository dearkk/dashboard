<template>
  <div class="main">
<!--    <h1>This is an main page</h1>-->
    <template v-for="(da, index) in arr">
      <div class="dt" v-if="index%2 == 0" :key="index">
        {{da}}
      </div>
      <div class="dt1" :key="index" v-else>
        {{da}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'main-view',
  data() {
    return {
      arr:[1,2,3,4,5,6,7,8]
    }
  }

}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .main{
    background: burlywood;
    height: 1000px;
  }

  .dt {
    width: 300px;
    height: 300px;
    float: left;
    background: red;
  }
  .dt1 {
    width: 300px;
    height: 500px;
    float: left;
    background: gold;
  }
</style>
