import axios from 'axios'

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
  console.log(err)
})

export default request
