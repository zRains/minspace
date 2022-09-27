import type { AxiosRequestConfig, Canceler } from 'axios'
import axios from 'axios'
import { AXIOS_BASE_URL } from '../minspace.config'
import storage from '../utils/storage'
import useToast from '../composes/toast'
// import router from '../routers'

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
    config.headers!.Authorization = `bearer ${storage.get('user').token}`

    return config
  },
  (error) => Promise.reject(error)
)

Axios.interceptors.response.use(
  (response) => {
    delReq(response)
    // if (response.data.code === 401) {
    //   const currentRoute = router.currentRoute.value
    //   router.push({ name: 'auth-page', query: Object.assign(currentRoute.query, { authType: 'login' }), params: currentRoute.params })
    // }

    return response
  },
  (err) => Promise.reject(err)
)

/** Clear all request */
export function cleanReq() {
  currentReq.forEach((cancel, url) => cancel(url))
  currentReq.clear()
}

export function ARFactory<T = any>(config: AxiosRequestConfig): Promise<{ succeed: boolean; data: T }> {
  return new Promise((resolve) => {
    Axios(config).then((axiosResponse) => {
      if (!axiosResponse.data.succeed) {
        const { errors } = axiosResponse.data

        Toast.error('Error', {
          content: Array.isArray(errors) ? errors.map((e: Record<string, string>) => e.message) : errors.message,
          duration: 10000
        })
      }

      resolve(axiosResponse.data)
    })
  })
}
