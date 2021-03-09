<template>
  <div class="body">
    <div class="mid">
      <img class="avatar"  src="@/assets/img/avatar.png">
      <el-input
          @keyup.enter.native="login()"
          placeholder="用户名"
          v-model="name"
          class="name"
          autofocus
          clearable>
      </el-input>
      <el-input @keyup.enter.native="login()" class="password" placeholder="密码" v-model="password" show-password></el-input>
<!--      <router-link :to="{name:'platform'}" tag="a">-->
        <el-button class="login" type="primary" @click="login()">登陆</el-button>
<!--      </router-link>-->
    </div>
  </div>
</template>

<script>
 import apple from "@/model/apple/apple.js"
export default {
  name: "Login",
  data() {
    return {
      password: '',
      name:'',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  methods: {
    login() {
      this.loading = this.$loading({
        lock: true,
        text: '登陆中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      });
       apple.login("userid", "password").then(response=> {
         console.log("response: " + response)
       }).catch(error=>{
         console.log("login error: " + error)
       })
      setTimeout(() => {
        this.loading.close();
        this.$router.push({name:'platform'})
      }, 1000);
    },
  }
}
</script>

<style scoped>

  .body {
    width: 100vw;
    height:100vh;
    font-family: 'Open Sans', sans-serif;
    /*background: #092756;*/
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
    /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );*/
  }

  .mid {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
  }

  .avatar {
    margin-left: 75px;
    width: 50px;
    height: 50px;
  }

  .name {
    margin-top: 10px;
  }

  .password {
    margin-top: 10px;
  }

  .login {
    width: 100%;
    margin-top: 15px;
  }
</style>
