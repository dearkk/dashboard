<template>
  <el-popover
      placement="bottom-start"
      trigger="hover">
    <div v-for="(item, index) in menus" :key="index">
      <MenuViewItem :menu-item="item"></MenuViewItem>
<!--      {{item}}-->
    </div>
    <slot slot="reference"></slot>
  </el-popover>
</template>

<script>
import menuDir from '@/menu'
import MenuViewItem from '@/views/menu/MenuViewItem'

export default {
  name: "MenuView",
  components: { MenuViewItem },
  data() {
    return {
      menus: menuDir.menu
    };
  },
  mounted () {
    console.log("menus len: " + this.menus.length)
  }
}
</script>

<style scoped>

</style>
