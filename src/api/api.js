import request from '../utils/request'

// demo数据，开发时请按照实际情况编写代码
export function demo01(obj) {
  return request({
    url: '/demo01',
    method: 'post',
    data:obj
  })
}

export function demo02(token) {
  return request({
    url: '/demo02',
    method: 'get',
    params: token
  })
}

export function demo03() {
  return request({
    url: '/login',
    method: 'post'
  })
}