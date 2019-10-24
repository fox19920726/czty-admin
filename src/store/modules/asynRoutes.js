import constRoutes from '@/router/routeList'
import { getRouters } from '@/api/api'
// 这里是引入组件的地方
import Layout from '@/views/layout/layout'
import Login from '@/views/login/login'
import Dashboard from '@/views/dashboard/dashboard'
// 引入组件之后还需要把字符串反转一下变成真正的组件
const componentsList = {
  Layout,
  Login,
  Dashboard
}

const asynRoutes = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constRoutes.concat(routers)
    }
  },
  actions: {
    getAsynRoutes({ commit }) {
      return getRouters().then((res) => {
        const data = res.data.data
        const forchMenu = (arr) => {
          arr.map((currentValue) => {
            currentValue.component = componentsList[currentValue.component]
            if (currentValue.children) {
              currentValue.children.map((currentValues) => {
                currentValues.component = componentsList[currentValues.component]
                if (currentValues.children) {
                  forchMenu(currentValues.children)
                }
                return currentValues
              })
            }
            return currentValue
          })
        }
        forchMenu(data)
        commit('SET_ROUTERS', data)
      })
    }
  }
}

export default asynRoutes
