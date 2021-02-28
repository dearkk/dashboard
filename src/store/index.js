import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routers:[],
    menus:{},
    module: 'login',
    subModule: ''
  },
  mutations: {
    setRouters(state, routers) {
      state.routers = routers
      for (let i=0, len=state.routers.length; i<len; i++) {
        if (state.routers[i].name === state.module) {
          state.menus = state.routers[i]
          console.log("menus: ", state.menus)
        }
      }
    },
    setModule(state, object) {
      state.module = object.module
      state.subModule = object.sub
      console.log("setModule: ", state.module)
      console.log("subModule: ", state.subModule)
      for (let i=0, len=state.routers.length; i<len; i++) {
        if (state.routers[i].name === state.module) {
          state.menus = state.routers[i]
          console.log("menus: ", state.menus)
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
