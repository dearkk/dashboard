<template>
  <div class="header">
    <div id="setting">
      <router-link to="home">
        <img src="../../assets/setting.png"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-view'
}
</script>

<style scoped lang="scss">
  *{margin:0;padding:0;}
  .header {
    height:40px;
    background: #32373e;
  }
  #setting {
    width: 30px;
    float: right;
    background: red;

    img {
      width: 26px;
      height: auto;
    }
  }
</style>
