import { Message } from 'element-ui'
import axios from 'axios'
import { getToken } from './auth'

const isProduction = process.env.NODE_ENV === 'production'
const originBaseUrl = process.env.BASE_URL
const isBaseUrl = window.g.BASE_URL || originBaseUrl

const service = axios.create({
  baseURL: isProduction ? isBaseUrl : process.env.BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token) {
      config.headers['X-Token'] = token
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 访问接口成功后的code码需要全公司统一，用来统一处理每个code对应的策略
service.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error
    const { status } = response
    const { errmsg } = response.data
    if (status === 401) {
      // 未登录状态下应该：1、提示未登录 2、删除本地cookie的token记录 3、跳转至登陆界面
      Message.error(errmsg)
    }
    return Promise.reject(error)
  }
)

export default service
