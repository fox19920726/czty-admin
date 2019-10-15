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

export function login(username, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username: username.trim(),
      password: md5(password)
    }
  })
}

export function getAllOverview() {
  return request({
    url: '/getAllOverview',
    method: 'get'
  })
}

export function versionList() {
  return request({
    url: '/version/list',
    method: 'get'
  })
}
