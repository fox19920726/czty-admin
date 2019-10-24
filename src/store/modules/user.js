import { getUserInfo } from '@/api/api'
import { getToken } from '@/utils/auth'

const user = {
  state: {
    userId: '',
    token: '',
    userName: '',
    roleId: '',
    roleName: '',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_ROLEID: (state, roleId) => {
      state.roleId = roleId
    },
    SET_ROLENAME: (state, roleName) => {
      state.roleName = roleName
    },
  },
  actions: {
    setUserInfoAction({ commit }, info) {
      const userId = info.userId
      const token = info.token
      const userName = info.userName
      const roleId = info.roleId
      const roleName = info.roleName

      commit('SET_TOKEN', token)
      commit('SET_USERNAME', userName)
      commit('SET_USERID', userId)
      commit('SET_ROLEID', roleId)
      commit('SET_ROLENAME', roleName)
    },
    getUserInfoAction({ dispatch }) {
      return getUserInfo(getToken()).then((response) => {
        dispatch('setUserInfoAction', response.data.data)
      })
    }
  }
}

export default user
