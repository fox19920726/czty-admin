const mockServer = require('./mock/mockServer.js')

module.exports = {
  dev: {
    // 启动项目时是否新打开页面
    open: false,
    // 配置代理ip
    proxy: {
      '**': '' // http://192.168.110.200:8080 写上代理地址，就会到真实的接口去，否则走node mock数据
    },
    // 端口号默认3000，如果跟其他项目冲突，可以重新配端口号
    // port: '3001'
    after: mockServer
  },
  url: {
    // 最后发布时候访问的接口地址
    pub: {
      baseUrl: 'http://192.168.110.210212:8080'
    },
    // 到测试环境时访问的接口地址
    dev: {
      baseUrl: 'http://192.168.110.210:8080'
    },
    // 本地开发环境的接口地址，一般需要跨域，这项可以不配，配proxy即可
    start: {
      baseUrl: ''
    }
  },
  // 需要全局可访问的sass变量
  sassGlobal: ['color.scss', 'transition.scss']
}
