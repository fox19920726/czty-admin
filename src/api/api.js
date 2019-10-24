import request from '@/utils/request'

const md5 = require('js-md5');

// demo数据，开发时请按照实际情况编写代码
export function demo01(obj) {
  return request({
    url: '/demo01',
    method: 'post',
    data: obj
  })
}

export function demo02(token) {
  return request({
    url: '/demo02',
    method: 'get',
    params: token
  })
}

// 登录
export function login(username, password) {
  const hash = md5(password)

  return request({
    url: '/login',
    method: 'post',
    data: {
      username: username.trim(),
      password: hash
    }
  })
}

// 系统版本号
export function versionList() {
  return request({
    url: '/version/list',
    method: 'get'
  })
}

// 请求异步路由
export function getRouters() {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}

// 用户信息
export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: token
  })
}
