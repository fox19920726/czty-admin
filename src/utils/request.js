import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import Cookies from 'js-cookie'
// import router from '@/router'

const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url需要配置代理的url字符串
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    console.log('request-config:',config)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log('response-config:',response)
    // 访问接口成功后的code码需要全公司统一，用来统一处理每个code对应的策略
    return response
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
