<template>
  <div>
    <el-menu :router=true class="menu" @open="handleOpen" @close="handleClose" :collapse="false">
      <div style="padding-top: 10px; padding-right: 10px; padding-left: 10px; padding-bottom: 5px">
        <el-select v-model="value" size="small" placeholder="集群">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
<!--      <div v-for="(item, index) in menus.children" :key="index">-->
        <el-submenu v-if="(menus.children !== undefined) && menus.children.length > 0" >
          <template slot="title">
            <i :class=menus.meta.icon ></i>
            <span slot="title">{{menus.meta.title}}</span>
          </template>
          <div v-for="(item2, index2) in menus.children" :key="index2">
            <el-menu-item :index=item2.path>
              <i :class=item2.meta.icon></i>
              <span slot="title">{{item2.meta.title}}</span>
            </el-menu-item>
          </div>

        </el-submenu>
        <el-menu-item v-else="" :index=menus.name>
          <i :class=menus.meta.icon></i>
          <span slot="title">{{menus.meta.title}}</span>
        </el-menu-item>
<!--      </div>-->
    </el-menu>
  </div>
</template>

<style scoped>
  .menu {
    width: 200px;
    min-height: calc(100vh - 40px);
  }

  /deep/ .el-select .el-input--suffix .el-input__inner {
    background: #f0f0f0;
    border-radius: 3px;
    border-style: none;
  }

</style>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      isCollapse: true,
      options: [{
        value: 'cluster1',
        label: '集群1'
      }, {
        value: 'cluster2',
        label: '集群2'
      }],
      value: '集群1',
      menus: this.getMenus(),
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getMenus() {
      for (let i=0, len=this.$store.state.menus.length; i<len; i++) {
        if (this.$store.state.menus[i].name === 'platform') {
          this.menus = this.$store.state.menus[i]
          console.log("menus: ", this.menus)
          return this.$store.state.menus[i]
        }
      }
    }
  },
  mounted () {
    //this.getMenus()
  }
}
</script>
