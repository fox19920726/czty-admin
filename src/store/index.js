import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import asynRoutes from './modules/asynRoutes'
import tagView from './modules/tagView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    asynRoutes,
    tagView
  },
  getters
})

export default store
