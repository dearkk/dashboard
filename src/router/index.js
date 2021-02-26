import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    redirect: "/platform",
  },
  {
    path:"/platform",
    name:"platform",
    component: () => import("@/views/main/platform/Home"),
    redirect: "/platform/overview",
    meta: {
      title:"平台管理",
      icon:"el-icon-monitor",
    },
    children: [
      {
        path:"overview",
        name:"overview",
        component: () => import('@/views/main/platform/Overview'),
        meta: {
          title:"平台概述",
          icon:"el-icon-tickets",
        }
      },
      {
        path:"tenant",
        name:"tenant",
        meta: {
          title:"租户管理",
          icon:"el-icon-office-building",
        }
      },
      {
        path:"member",
        name:"member",
        meta: {
          title:"成员管理",
          icon:"el-icon-user",
        }
      },
    ]
  },
  {
    path:"/system",
    name:"system",
    meta: {
      title:"系统设置",
      icon:"el-icon-setting",
    },
    children: [
      {
        path:"",
        name:"name",
        meta: {
          title:"账户中心",
          icon:"el-icon-user",
        },
        children:[
          {
            path:"",
            name:"name",
            meta: {
              title:"账户列表",
              icon:"el-icon-user",
            },
          },
          {
            path:"",
            name:"name",
            meta: {
              title:"黑名单",
              icon:"el-icon-user",
            },
          },
        ]
      },
      {
        path:"",
        name:"name",
        meta: {
          title:"微服务系统设置",
          icon:"el-icon-setting",
        },
        children:[
          {
            path:"",
            name:"name",
            meta: {
              title:"服务列表",
              icon:"el-icon-user",
            },
          },
          {
            path:"",
            name:"name",
            meta: {
              title:"应用列表",
              icon:"el-icon-user",
            },
          },
        ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  router.app.$store.commit('setMenus', routes)
  next();
})
export default router
