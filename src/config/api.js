import axios from 'axios'
// 设置请求baseURL
axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
// 发送请求前处理request的数据
axios.defaults.transformRequest = [function (data) {
  let newData = ''
  for (let k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]
// 带cookie请求
axios.defaults.withCredentials = true

// get请求
function get (url) {
  return body => axios.get(url, {
    params: body
  })
}

// post请求
function post (url) {
  return body => axios.post(url, body)
}

// put请求
function put (url) {
  return body => axios.put(url, body)
}

// 导出使用
export const login = get('/login')
export const requ = post('/requ')
export const requput = put('/requ')
