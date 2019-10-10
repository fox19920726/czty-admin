const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: '',
    name: '',
    introduction: '',
    roles: [],
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, payload) => {
      state.token = payload.token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  }
}

export default user
