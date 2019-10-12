import request from '@/utils/request'

const md5 = require('js-md5');
const bcrypt = require('bcryptjs');

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
  const salt = bcrypt.genSaltSync(12)
  const hash = bcrypt.hashSync(md5(password), salt)

  return request({
    url: '/login',
    method: 'post',
    data: {
      username: username.trim(),
      password: hash
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
