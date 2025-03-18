// 封装axios
import axios from 'axios'
import { useAuthStore } from './stores/auth.js'

// 创建一个 axios 实例，可以设置 baseURL、timeout 等参数
const service = axios.create({
  baseURL: 'http://10.0.0.53:7003/', //  API 根地址
  timeout: 10000 // 请求超时时间（毫秒）
})

// 请求拦截器：在发送请求前自动添加 token 到请求头
// 请求拦截器
// service.interceptors.request.use(
//     config => {
//       // 默认需要 token，除非明确设置 needToken 为 false
//       if (config.needToken !== false) {
//         const authStore = useAuthStore()
//         if (authStore.token) {
//           config.headers['Authorization'] = `Bearer ${authStore.token}`
//         }
//       }
//       return config
//     },
//     error => Promise.reject(error)
//   )

// 导出封装后的 axios 实例，返回的都是 Promise 对象
export default service
