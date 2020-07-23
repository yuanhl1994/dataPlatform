import axios from 'axios'

// 公用头
// axios.defaults.baseURL = '/';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
// 拦截器
axios.interceptors.response.use(
    function(response: any) {
      if (response.data && response.data.errcode == 401) {
        window.location.href = `/entrance`
        return null
    }
        return response.data
    },
    function(error: any) {
        if (error.response.status == 404) {
            return null
        }
        return Promise.reject(error)
    }
)

export default axios