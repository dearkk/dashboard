<template>
  <el-popover
      placement="bottom-start"
      trigger="hover">
    <div v-for="(item, index) in this.$store.state.routers" :key="index">
      <MenuViewItem :menu-item=item></MenuViewItem>
<!--      {{item}}-->
    </div>
    <slot slot="reference"></slot>
  </el-popover>
</template>

<script>
import MenuViewItem from '@/views/menu/MenuViewItem'

export default {
  name: "MenuView",
  components: {MenuViewItem },
  data() {
    return {
    };
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
