<template>
  <div class="main">
    <div class="leve1">
      <el-link :class="menuItem.meta.icon" :underline="false">
        <span style="margin-left: 3px">{{menuItem.meta.title}}</span>
      </el-link>
    </div>
    <div class="leve2 clearFixed" v-if="menuItem.children.length > 0">
      <ul>
        <li v-for="(item, index) in menuItem.children" :key="index">
          <div v-if="item.children !== undefined" >
            <a class="a1 clearFixed" href="#" @mouseover="hover(index)" @mouseleave="leave()">
              <div style="width: 80%">
                {{item.meta.title}}
              </div>
              <div style="width: 20%;">
                <i class="el-icon-arrow-right" style="float: right"></i>
              </div>
              <div v-if="item.children.length > 0" class="leve3" v-show="itemIndex === index">
                <ul class="clearFixed" style="list-style-type: none">
                  <li v-for="(item2, index2) in item.children" :key="index2">
                    <div style="padding-left: 10px; padding-top: 5px;">
                      <a class="a2" @click="onClick(item2.meta.title)">{{item2.meta.title}}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <a class="a1" v-else href="#">
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
      itemIndex:-1
    }
  },
  mounted () {
    console.log("menumItem:" + this.menuItem.meta.title)
    console.log("menumItem length:" + this.menuItem.children.length)

  },
  methods: {
    hover: function(index) {
      this.itemIndex = index
    },
    leave: function () {
      this.itemIndex = -1
    },
    onClick: function (item) {
      console.log(item)
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

  .a1 {
    height: 30px;
    font-size: 13px;
    /*实现垂直居中*/
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #404040;
    i {
      margin-right: 0px;
    }
    &:hover {
      color: #4784d7;
    }
  }
}

.a2 {
  color: #606060;
  &:hover {
    color: #4784d7;
  }
}

.leve3 {
  margin-right: -202px;
  margin-top: 50px;
  border-radius: 1.8px;
  border:1px solid #f5f5f5;
  background: #ffffff;
  width: 200px;
  min-height: 80px;
  float: right;
  box-shadow: 2px 2px 3px 1px #e9e9e9;
}
</style>
