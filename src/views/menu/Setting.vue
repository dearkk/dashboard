<template>
 <div class="setting clearFixed">
   <div class="meun">

   </div>
   <div class="preview"></div>
 </div>
</template>

<script>
export default {
  name: 'setting'
}
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  //.setting {
  //  background: blue;
  //  height: 1000px;
  //}
  //.setting {
  //  width: 200px;
  //  height: 40px;
  //  background: burlywood;
  //}
  .meun {
    float: left;
    width: 25%;
    min-height: calc(100vh - 40px);
    background: red;
  }
  .preview {
    float: left;
    width: 75%;
    min-height: calc(100vh - 40px);
    background: gold;
  }
</style>
