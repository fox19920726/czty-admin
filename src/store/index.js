import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import asynRoutes from './modules/asynRoutes'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    asynRoutes
  },
  getters
})

export default store
