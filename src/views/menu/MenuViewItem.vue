<template>
  <div class="main">
    <div class="leve1">
      <el-link :class="menuItem.meta.icon" :underline="false">
        <span style="margin-left: 3px">{{menuItem.meta.title}}</span>
      </el-link>
    </div>
    <div class="leve2" v-if="menuItem.children.length > 0">
      <ul>
        <li v-for="(item, index) in menuItem.children" :key="index">
          <el-popover
              v-if="item.children !== undefined"
              placement="right-start"
              trigger="hover">
            <a slot="reference" href="#">
              <div style="width: 80%">
                {{item.meta.title}}
              </div>
              <div style="width: 20%;">
                <i class="el-icon-arrow-right" style="float: right"></i>
              </div>
            </a>
            <div v-if="item.children.length > 0">
              <ul style="list-style-type: none">
                <li v-for="(item2, index2) in item.children" :key="index2">
                  {{item2.meta.title}}
                </li>
              </ul>
            </div>
          </el-popover>
          <a v-else href="#">
            <div style="width: 80%">
              {{item.meta.title}}
            </div>
<!--            <div style="width: 20%;">-->
<!--              <i class="el-icon-arrow-right" style="float: right"></i>-->
<!--            </div>-->
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuViewItem',
  props:["menuItem"],
  data() {
    return {
      //menuItem:menuDir.menu[0]
    }
  },
  mounted () {
    console.log("menumItem:" + this.menuItem.meta.title)
    console.log("menumItem length:" + this.menuItem.children.length)

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
</style>
