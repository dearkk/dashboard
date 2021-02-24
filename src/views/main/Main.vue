<template>
  <div class="main">
    <div class="leve1">
      <el-link class="el-icon-setting" :underline="false">
       <span style="margin-left: 3px">系统设置</span>
      </el-link>
    </div>
    <div class="leve2">
      <ul>
        <li v-for="(value, index) in arr" :key="index">
          <el-popover
              placement="right-start"
              trigger="hover">
            <a slot="reference" href="#">
            <div style="width: 80%">
              {{value}}
            </div>
            <div style="width: 20%;">
              <i class="el-icon-arrow-right" style="float: right"></i>
            </div>
          </a>
            <div>
              <span>{{ value }}</span>
            </div>
          </el-popover>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-view',
  data() {
    return {
      arr:["账号", "账号管理","平台主题切换","菜单角色权限设置"],
      offset: [0,0]
    }
  }
}
</script>

<style scoped lang="scss">

  .main {
    width: 180px;
  }
  .leve1 {
    height: 30px;
    font-size: 15px;
    /*实现垂直居中*/
    display: flex;
    align-items: center;
  }

  .leve2 {
    margin-left: 18px;
    font-size: 14px;

    a {
      height: 30px;
      font-size: 13px;
      /*实现垂直居中*/
      display: flex;
      align-items: center;
      text-decoration: none;
      i {
        margin-right: 0px;
      }

      &:hover {
        color: #888888;
      }
    }
  }

  .popper {
    margin-left: -80px;
    background: red;
  }
</style>
