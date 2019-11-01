import { Message } from 'element-ui'
import axios from 'axios'
// import router from '@/router'
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
    // console.log('request-config:', config)
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log('response-config:', response)
    // 访问接口成功后的code码需要全公司统一，用来统一处理每个code对应的策略
    return response
  },
  (error) => {
    const response = error.response
    const status = response.status
    const errmsg = response.data.errmsg
    if (status === 401) {
      // 未登录状态下应该：1、提示未登录 2、删除本地cookie的token记录 3、跳转至登陆界面
      Message.error(errmsg)
    }
    return Promise.reject(error)
  }
)

export default service
