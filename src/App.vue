<template>
  <div id="app">
    <div v-show="this.$store.state.module !== 'login'">
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
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
  }

  .routerLink {
    text-decoration: none;
  }

</style>
<script>
 import HeaderView from '@/views/header/Header.vue'
export default {
  components: { HeaderView },

  data() {
    return {
    }
  },


  mounted() {

  },

  methods: {
  },

  watch:{
    $route:{
      handler(val,oldval){
        console.log("app watch router: " + val);//新路由信息
        console.log("app watch router oldval: " + oldval);//老路由信息
        let path = val.path.split('/')
        if (path.length > 1) {
          var subModel = "";
          if (path.length > 2) {
            subModel = path[path.length -1]
          }
          this.$store.commit('setModule', {module: path[1], sub: subModel})
        }
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
