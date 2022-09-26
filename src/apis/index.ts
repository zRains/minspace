import type { AxiosRequestConfig, Canceler } from 'axios'
import axios from 'axios'
import { AXIOS_BASE_URL } from '../minspace.config'
import storage from '../utils/storage'
import useToast from '../composes/toast'
import router from '../routers'

const Toast = useToast()

const Axios = axios.create({
  timeout: 10000,
  baseURL: AXIOS_BASE_URL,
  validateStatus(status) {
    return status < 500
  }
})

/** Storage all current requests */
const currentReq: Map<string, Canceler> = new Map()

function addReq<T>(config: AxiosRequestConfig<T>) {
  const reqToken = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
  // eslint-disable-next-line no-param-reassign
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!currentReq.has(reqToken)) currentReq.set(reqToken, cancel)
    })
}

function delReq<T>(config: AxiosRequestConfig<T>) {
  const reqToken = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
  if (currentReq.has(reqToken)) {
    const cancel = currentReq.get(reqToken)!
    cancel(reqToken)
    currentReq.delete(reqToken)
  }
}

/** Set axios interceptor */
Axios.interceptors.request.use(
  (config) => {
    delReq(config)
    addReq(config)
    // eslint-disable-next-line no-param-reassign
    config.headers!.Authorization = storage.get('token')
    return config
  },
  (error) => Promise.reject(error)
)

Axios.interceptors.response.use(
  (response) => {
    delReq(response)
    if (response.data.code === 401) {
      const currentRoute = router.currentRoute.value
      router.push({ name: 'auth-page', query: Object.assign(currentRoute.query, { authType: 'login' }), params: currentRoute.params })
    }

    return response
  },
  (err) => Promise.reject(err)
)

/** Check whether the token is valid */
// Axios.interceptors.response.use(
//   (response) => {
//     // 这里同时使用两个判断条件（兼容后端奇怪的返回体设计）
//     if (response.data.message === '令牌已失效' || response.data.data === '令牌已失效') {
//       ls.clear()
//       // eslint-disable-next-line no-restricted-globals
//       location.reload()
//     }
//     return response
//   },
//   (err) => Promise.reject(err)
// )

/** Clear all request */
export function cleanReq() {
  currentReq.forEach((cancel, url) => cancel(url))
  currentReq.clear()
}

export function ARFactory(config: AxiosRequestConfig): Promise<{ succeed: boolean; data: any }> {
  return new Promise((resolve) => {
    Axios(config).then((axiosResponse) => {
      if (!axiosResponse.data.succeed) {
        const { errors } = axiosResponse.data.data
        Toast.error('Error', { content: Array.isArray(errors) ? errors.map((e: Record<string, string>) => e.message) : errors.message })
      }

      resolve(axiosResponse.data)
    })
  })
}
