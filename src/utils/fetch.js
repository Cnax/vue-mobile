import axios from 'axios'
import { finishLoading, startLoading } from './loading'

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    finishLoading()
    return response
  },
  error => {
    finishLoading()
    return Promise.reject(error)
  }
)

export default service
