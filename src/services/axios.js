import axios from 'axios'

// 公用头
// axios.defaults.baseURL = '/';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
const protocol = window.location.protocol
// 拦截器
axios.interceptors.response.use(
    function(response: any) {
      if (
        response.data &&
        (response.data.errcode == -10000 ||
            response.data.errcode == 401
        )
    ) {
        // const from = encodeURIComponent(window.location.href);
        // window.location.href = `//account.wxb.com/?from=${from}`;
        window.location.href = `/wxpush/index`
        return null
    }
        return response.data
    },
    function(error: any) {
        const url = window.location.pathname
        // if (/code -10000/.test(new Error(error)) && url != '/wxpush/index') {
        //     // 拦截401跳转到登录
        //     const from = encodeURIComponent(window.location.href);
        //     window.location.href = `/wxpush/index`;
        //     return null;
        // }
        console.log(error)
        return Promise.reject(error)
    }
)

export default axios