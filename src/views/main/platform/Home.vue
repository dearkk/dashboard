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
  name: 'platform-home',
  components: { Aside },
  data() {
    return {

    }
  }
}
</script>
