// demo数据，开发时请按照实际情况编写代码
const globals = {
  // 获取用户token
  getRouters: {
    data: [
      {
        path: '/yb11',
        component: 'Layout',
        name: '11',
        meta: { title: '异步路由11', icon: 'location', el: true },
        children: [
          {
            path: 'yb14',
            component: 'Dashboard',
            name: '14',
            meta: { title: '异步路由1太长太长太长太长太长太长太长太长太长太长太长太长太长太长太长太长', icon: 'location', el: true },
          }
        ]
      },
      {
        path: '/yb19',
        component: 'Layout',
        meta: { title: '异步路由19', icon: 'location', el: true },
        children: [
          {
            path: 'yb20',
            component: 'Login',
            name: 'Login',
            meta: { title: '异步路由20', icon: 'location', el: true },
          }
        ]
      }
    ],
    errmsg: '成功',
    errno: 0
  }
}

export default globals
