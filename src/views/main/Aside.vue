<template>
  <div v-if="this.$store.state.menus.children !== undefined && this.$store.state.menus.children.length !== 0">
    <el-menu :default-active="this.$store.state.subModule" :router=true class="menu" @open="handleOpen" @close="handleClose" :collapse="false">
      <div style="padding: 10px;">
        <el-select v-model="value" size="small" placeholder="集群">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <span class="title">{{this.$store.state.menus.meta.title}}</span>
      </div>
      <div style="margin-top: 5px" v-if="(this.$store.state.menus.children !== undefined) && this.$store.state.menus.children.length > 0">
        <div v-for="(item, index) in this.$store.state.menus.children" :key="index">
          <el-submenu popper-append-to-body v-if="(item.children !== undefined) && item.children.length > 0" :index=item.path >
            <template slot="title">
              <i :class=item.meta.icon></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="(item2, index2) in item.children" :key="index2" :index=item2.path>
              <div class="menuC">
                <i :class=item2.meta.icon></i>
                <span slot="title">{{item2.meta.title}}</span>
              </div>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else="" :index=item.path>
            <div class="menuC">
              <i :class=item.meta.icon></i>
              <span slot="title">{{item.meta.title}}</span>
            </div>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<style scoped>
  .menu {
    width: 200px;
    min-height: calc(100vh - 40px);
  }

  .title {
    margin-top: 5px;
    font-size: 14px;
    margin-left: 20px;
    color: #505050;
  }

  /deep/ .el-select .el-input--suffix .el-input__inner {
    background: #f0f0f0;
    border-radius: 3px;
    border-style: none;
  }

  /deep/ .el-menu .el-submenu__title {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    margin-left: -5px
  }
  /deep/ .el-menu-item {
    font-size: 12px;
    height: 40px;
  }

  .menuC {
    display: flex;
    align-items: center;
    height: 40px;
    margin-left: -5px
  }

  /*/deep/ .el-menu .el-submenu {*/
  /*  height: 40px !important;*/
  /*  line-height: 40px !important;*/
  /*}*/

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
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted () {
  },
  created() {
    //window.addEventListener('beforeunload', e => this.beforeunload(e))
  },
  destroyed() {
    //window.removeEventListener('beforeunload', e => this.beforeunload(e))
  }
}
</script>
