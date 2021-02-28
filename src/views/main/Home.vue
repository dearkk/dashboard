<template>
  <div class="home">
    <Aside></Aside>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">

.home {
  display: flex;
  justify-content: flex-start;
  div {
    width: 100%;
    background: blueviolet;
  }
}
</style>

<script>
import Aside from '@/views/main/Aside'
export default {
  name: 'main-home',
  components: { Aside },
  data() {
    return {
     // module: this.getModule()
    }
  },

  methods: {
    getModule() {
      let path = this.$route.path.split('/')
      console.log("$route path : " + path);//路由模块
      if (path.length > 1) {
        this.module = path[1]
        console.log("router module : " + this.module);//路由模块
      } else {
        return "platform"
      }
      return this.module
    }
  },
}
</script>