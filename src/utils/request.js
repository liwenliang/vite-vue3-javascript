import axios from 'axios'

// 创建请求实例
const instance = axios.create({
  baseURL: '/',
  // 指定请求超时的毫秒数
  timeout: 30000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return res
  },
  (error) => {
    const { response } = error
    if (response && response.data) {
      return Promise.reject(error)
    }
    const { message } = error
    console.error(message)
    return Promise.reject(error)
  }
)

export default instance
