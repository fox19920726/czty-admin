import Mock from 'mockjs'

// demo数据，开发时请按照实际情况编写代码
const list = Mock.mock({
  data: {
    roleId: 1,
    roleName: '管理员',
    token: 'f7a85b6c-eb18-4468-8252-601a4affab9d',
    userId: 1,
    userName: 'cjq111111',
  },
  errmsg: '成功',
  errno: 0
})

const user = [
  {
    // 获取用户token
    url: '/login',
    type: 'post',
    response: list
  }, {
    url: '/user/info',
    type: 'get',
    response: list
  }
]

export default user
