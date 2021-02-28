<template>
  <div class="main" v-if="menuItem !== undefined">
    <div class="leve1" v-if="menuItem.meta !== undefined">
      <router-link :to="menuItem.path" class="routerLink">
        <el-link :class="menuItem.meta.icon" :underline="false">
          <span style="margin-left: 3px">{{menuItem.meta.title}}</span>
        </el-link>
      </router-link>
    </div>
    <div class="leve2 clearFixed" v-if="menuItem.children !== undefined && menuItem.children.length > 0">
      <ul>
        <li v-for="(item, index) in menuItem.children" :key="index">
          <div v-if="item.children !== undefined" >
            <router-link class="a1" :to="{name: item.name}" @mouseover.native="hover(index)" @mouseleave.native="leave()">
              <span style="width: 80%">
                {{item.meta.title}}
              </span>
              <div style="width: 20%;">
                <i class="el-icon-arrow-right" style="float: right"></i>
              </div>
              <div v-if="item.children.length > 0" class="leve3" v-show="itemIndex === index">
                <ul class="clearFixed" style="list-style-type: none">
                  <li v-for="(item2, index2) in item.children" :key="index2">
                    <div style="padding-left: 10px; padding-top: 5px;">
                      <router-link class="a2 routerLink" :to="{name:item2.name}">{{item2.meta.title}}</router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </router-link>
          </div>
          <router-link  v-else style="width: 80%" :to="{name:item.name}" class="routerLink a1">
            {{item.meta.title}}
          </router-link>
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
  methods: {
    hover: function(index) {
      this.itemIndex = index
      console.log("hover: ", index)
    },
    leave: function () {
      this.itemIndex = -1
    },
    onClick: function (path) {
      console.log("onClick: ", path)
      this.$router.push({path: path}).catch(err => {
        console.log("onClick err: ", err)
      })
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
    //
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
