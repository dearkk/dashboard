<template>
  <div class="header clearFixed">
    <div class="cloud clearFixed">
      <div class="icon">
        <img src="../../assets/cloud.png">
      </div>
      <div class="text">
        <span class="a1">大豆云</span>
        <span class="a2">Bean Cloud</span>
      </div>
    </div>
    <div class="menu clearFixed">
      <div class="home">
        <img src="../../assets/home.png">
        <router-link to=""><span>总览</span></router-link>
      </div>
      <menu-view>
        <a class="all" href="#">
          <img src="../../assets/menu.png">
          <span>所有产品</span>
        </a>
      </menu-view>
    </div>
    <div class="login clearFixed">
      <div class="user">
        <span>huangkun</span>
        <span>超级管理员</span>
      </div>
      <div class="icon">
        <img src="../../assets/arrow-down-bold.png">
      </div>
    </div>
    <div class="setting clearFixed">
      <router-link to="/about">
        <img src="../../assets/setting.png"/>
      </router-link>
    </div>
  </div>
</template>

<script>

import MenuView from "@/views/menu/View";
export default {
  name: 'header-view',
  components: {MenuView}
}

</script>

<style scoped lang="scss">
  * {
    margin:0;
    padding:0;
  }

  li{list-style:none;}
  a{text-decoration:none;}
  span{color: #E6EEE6;}

  .header {
    height: 40px;
    background: #32373e;
  }

  .cloud {
    //background: bisque;
    width: auto;
    height: 100%;
    float: left;
    margin-left: 16px;
    .icon {
      float: left;
      width: 40px;
      height: 40px;
      //background: red;
      img {
        width: 35px;
        height: 35px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .text {
      float: left;
      //background: aquamarine;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin-left: -10px;
      .a1 {
        display: block;
        font-size: 16px;
        color: #E6EEE6;
      }

      .a2 {
        display: block;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.70);
        font-size: 12px;
        color: #E6EEE6;
        margin-left: 18px;
        margin-top: -6px;
        //background: bisque;
      }
    }
  }

  .menu {
    float: left;
    margin-left: 8px;
    .home {
      height: 40px;
      float: left;
      display: flex;
      /*实现垂直居中*/
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }

      span {
        margin-left: 3px;
        font-size: 12px;
        text-align: center;
      }
    }

    a {
      height: 40px;
      float: left;
      display: flex;
      /*实现垂直居中*/
      align-items: center;
      margin-left: 8px;
      img {
        width: 16px;
        height: 16px;
      }

      span {
        margin-left: 3px;
        font-size: 12px;
      }

      &:hover {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .setting {
    width: 30px;
    height: 40px;
    //background: red;
    //margin-left: 10px;
    float: right;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    img {
      width: 18px;
      height: 18px;
      //background: red;
    }
  }

  .login {
    margin-right: 16px;
    float: right;
    height: 40px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    .user {
      float: left;
      span {
        display: block;
        font-size: 12px;
      }
    }

    .icon {
      float: left;
      margin-left: 5px;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
</style>
