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
    path: '/login',
    name: 'login',
    component: () => import("@/views/login/Login"),
  },
  {
    path:"/platform",
    name:"platform",
    component: () => import("@/views/main/Home"),
    redirect: "/platform/overview",
    meta: {
      title:"平台管理",
      icon:"el-icon-monitor",
    },
    children: [
      {
        path:"overview",
        name:"platform-overview",
        component: () => import('@/views/main/platform/Overview'),
        meta: {
          title:"平台概述",
          icon:"el-icon-tickets",
        }
      },
      {
        path:"tenant",
        name:"platform-tenant",
        component: () => import('@/views/main/platform/Tenant'),
        meta: {
          title:"租户管理",
          icon:"el-icon-office-building",
        }
      },
      {
        path:"member",
        name:"platform-member",
        component: () => import('@/views/main/platform/Member'),
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
    component: () => import("@/views/main/Home"),
    redirect: "/system/user-center",
    meta: {
      title:"系统设置",
      icon:"el-icon-setting",
    },
    children: [
      {
        path:"user-center",
        name:"user-center",
        component: () => import('@/views/main/system/Content'),
        meta: {
          title:"账户中心",
          icon:"el-icon-user",
        },
        children:[
          {
            path:"user-list",
            name:"user-list",
            meta: {
              title:"账户列表",
              icon:"el-icon-user",
            },
          },
          {
            path:"user-none",
            name:"user-none",
            meta: {
              title:"黑名单",
              icon:"el-icon-user",
            },
          },
        ]
      },
      {
        path:"setting",
        name:"setting",
        meta: {
          title:"微服务系统设置",
          icon:"el-icon-setting",
        },
        children:[
          {
            path:"setting-list",
            name:"setting-list",
            meta: {
              title:"服务列表",
              icon:"el-icon-user",
            },
          },
          {
            path:"setting-app",
            name:"setting-app",
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
  router.app.$store.commit('setRouters', routes)
  next();
})
export default router
