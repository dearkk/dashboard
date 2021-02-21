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
  /*body {*/
  /*  overflow-x:hidden;*/
  /*  overflow-y:hidden;*/
  /*}*/
  .clearFixed:after{
    content:"";
    display:block;
    clear:both;
  }

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
import menu from "@/menu";

export default {
  components: { HeaderView },

  mounted() {
    this.getMenu()
  },

  methods: {
    getMenu () {
      // this.$http.get('./menu/menu.json').then((res) => {
      //   console.log(res.data.version)
      //   console.log(res)
      // })
      console.log(menu)
    }
  }
}
</script>
