import axios from './axios'

/* 
  res数据格式
  {
    errcode: 0,   // errcode值为0或1， 0表示无错误， 1表示有错误
    data: {},     // 数据主体
    message: ''   // message为提示信息
  }
*/

// token登录
export const tokenLogin = async (data: { token: string }) => {
  const res = await axios.post('/tokenlogin', data)
  console.log('hjh', res)
  return res || ({ errcode:0, message: '登录成功' })
}

// 账户登录
export const userLogin = async (data: { account: string, password: string }) => {
  const res = await axios.post('/userlogin', data)
  return res
}

// 用户注册
export const userRegister = async (data: { account: string, password: string, code: string }) => {
  const res = await axios.post('/userregister', data)
  return res || ({ errcode: 0, data: { token: 'sdfsdfsdfs' } })
}