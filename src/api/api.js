import request from './axios'

export const login = (param) => {
  return request.post('/login', param)
}

export const regin = (param) => {
  return request.post('/regin', param)
}

export const getList = () => {
  return request.get('/articles')
}

export const getItem = (id) => {
  return request.get(`/article/${id}`)
}

export const addItem = (content) => {
  return request.post('/article', content)
}

export const updateItem = (id, content) => {
  return request.put(`/article/${id}`, content)
}

export const deleteItem = (id) => {
  return request.delete(`/article/${id}`)
}
