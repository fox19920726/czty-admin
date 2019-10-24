import Mock from 'mockjs'
import user from './mockmodules/user'
import globals from './mockmodules/globals'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// Mock.setup({
//   timeout: '350-600'
// })

// demo数据，开发时请按照实际情况编写代码
Mock.mock(/\/login/, 'post', user.userToken)
Mock.mock(/\/user\/info/, 'get', user.userInfo)
Mock.mock(/\/getRouters/, 'get', globals.getRouters)

export default Mock
