import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
axios.defaults.withCredentials=true //允许携带cookie
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;'
// 静态资源
Vue.prototype.$static = ''

// ********配置接口地址********
axios.defaults.baseURL = 'http://10.188.60.81:9901'


var loadingInstance
// // POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use(
//   config => {
//     loadingInstance = Loading.service({
//       lock: true,
//       text: '数据加载中，请稍后...',
//       spinner: 'el-icon-loading',
//       background: 'rgba(0, 0, 0, 0.1)'
//     })
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data)
//     }
//     return config
//   },
//   err => {
//     loadingInstance.close()
//     Message.error('请求出错了')
//     return Promise.reject(err)
//   }
// )
// // 返回状态判断(添加响应拦截器)
// axios.interceptors.response.use(
//   res => {
//     if (res.status === 200) {
//       res.data.errno = res.data.errno
//       res.data.errmsg = res.data.errmsg
//       loadingInstance.close()
//       return res
//     } 
//     else {
//       loadingInstance.close()
//       Message.error(res.statusText)
//     }
//   },
//   err => {
//     loadingInstance.close()
//     Message.error('请求失败，请稍后再试')
//     return Promise.reject(err)
//   }
// )
// 发送请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          Message.error('请求失败，请稍后再试')
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        Message.error('请求失败，请稍后再试')
        reject(err)
      })
  })
}