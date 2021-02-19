<template>
  <div id="app">
    <div>
      <header-view id="header"></header-view>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
*{margin:0;padding:0;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>
import HeaderView from '@/views/header/Header'
export default {
  components: { HeaderView }
}
</script>
