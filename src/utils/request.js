import axios from 'axios'
export default axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0',
  timeout: 5000
})
