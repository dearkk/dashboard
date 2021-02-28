<template>
  <div>
    <el-menu router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="false">
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <i class="el-icon-my-export"></i>
            <span slot="title">分组一</span>
          </template>
          <el-menu-item index="1-1">
            <i class="el-icon-document"></i>
            <span slot="title">选项1</span>
          </el-menu-item>
          <el-menu-item index="1-2" class="item">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/menu/setting">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="about" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
  .el-menu-vertical-demo {
    width: 160px;
    min-height: calc(100vh - 40px);
  }

  .el-submenu {
    margin-left : -45px !important;
  }

  .el-menu-item{
    margin-left : -45px !important;
  }

  .item {
    margin-left: 10px;
  }

  .el-icon-document:not(.el-icon){
    background: url(../assets/img/setting.png) center no-repeat;
  }

</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
