import axios from 'axios'
import router from '../router'

const request = axios.create({
  baseURL: '/pomegranate/api'
})

request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = 'Bearer ' + token // 让每个请求携带自定义 token
  }
  return config
}, err => {
  console.log(err)
})

request.interceptors.response.use((res) => {
  // console.log(res)
  return res.data
}, err => {
  // console.log(err.response)
  const { data, status } = err.response
  if (status === 401) {
    router.push('/login')
    console.log(data.msg)
  } else {
    console.log(data)
  }
  return err.response
})

export default request
