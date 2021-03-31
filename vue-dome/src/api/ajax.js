// 封装axios 二次请求函数
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '../store';

//1.配置基础路径和超时  //可能是instance或者service
const instance = axios.create({
  baseURL: '/api',
  timeout:20000,
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  
  // 显示请求进度条
  NProgress.start()
  
  // 携带临时标识
  let userTempId = store.state.user.userTempId
  if (userTempId) {
    config.headers.userTempId = userTempId
  }

  // 携带登录后的token
  let token = store.state.user.token
  if (token) {
    config.headers.token = token
  }

  //必须返回config
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {  // 请求成功的回调

    // 隐藏进度条
    NProgress.done()
    return response.data
  },
    error => {   //请求失败的回调
    // throw error
    // 隐藏进度条
      NProgress.done()
    return Promise.reject(error)
  }
)

export default instance