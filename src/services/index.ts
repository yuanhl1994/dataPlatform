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

export const getGoodLists = async (data: { token:string }) => {
  const res = await axios.post('/getgoodLists', data)
  return res || 
  { errcode: 0, data:[
    {
      key: 1,
      name: 'John Brown',//产品名称
      platform: 32,//平台
      brand: 'New York No. 1 Lake Park',//品牌
      status:1,//状态 0-无货 1-有货
      latelyTime:'7月1日',//最近状态时间
      joinTime:'2月10日',// 加入时间
      day: [
        // 返回13条数据 00:00 ~ 24:00
        { label: '00:00', type: '数据源1', value: 0.2 },
        { label: '02:00', type: '数据源1', value: 0.5 },
        { label: '02:00', type: '数据源2', value: 0.3 },
        { label: '04:00', type: '数据源1', value: 0.6 },
        { label: '04:00', type: '数据源2', value: 0.7 },
        { label: '06:00', type: '数据源1', value: 0.9 },
        { label: '08:00', type: '数据源1', value: 0.6 },
        { label: '10:00', type: '数据源1', value: 0.9 }
      ],
      week: [
        // 返回7天的数据
        { label: '1', type: '数据源1', value: 0.2 },
        { label: '2', type: '数据源1', value: 0.5 },
        { label: '2', type: '数据源2', value: 0.3 },
        { label: '3', type: '数据源1', value: 0.6 },
        { label: '3', type: '数据源2', value: 0.7 },
        { label: '4', type: '数据源1', value: 0.9 },
        { label: '5', type: '数据源1', value: 0.6 },
        { label: '6', type: '数据源1', value: 0.9 },
        { label: '7', type: '数据源1', value: 0.8 }
      ],
      month: [
        // 返回30天的数据
        { label: '7-15', type: '数据源1', value: 0.2 },
        { label: '7-16', type: '数据源1', value: 0.5 },
        { label: '7-16', type: '数据源2', value: 0.3 },
        { label: '7-17', type: '数据源1', value: 0.6 },
        { label: '7-17', type: '数据源2', value: 0.7 },
        { label: '7-18', type: '数据源1', value: 0.9 },
        { label: '7-19', type: '数据源1', value: 0.6 },
        { label: '7-20', type: '数据源1', value: 0.9 },
        { label: '7-21', type: '数据源1', value: 0.8 }
      ]
    },
    {
      key: 2,
      name: 'Jim Green',
      platform: 42,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'London No. 1 Lake Park',
    },
    {
      key: 3,
      name: 'Not Expandable',
      platform: 29,
      status:0,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Jiangsu No. 1 Lake Park',
    },
    {
      key: 4,
      name: 'Joe Black',
      platform: 32,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Sidney No. 1 Lake Park',
    },
    {
      key:5,
      name: 'Joe Black',
      platform: 32,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Sidney No. 1 Lake Park',
    },
    {
      key: 6,
      name: 'Joe Black',
      platform: 32,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Sidney No. 1 Lake Park',
    },
    {
      key:7,
      name: 'Joe Black',
      platform: 32,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Sidney No. 1 Lake Park',
    },
    {
      key: 8,
      name: 'Joe Black',
      platform: 32,
      status:1,
      latelyTime:'7月1日',
      joinTime:'2月10日',
      brand: 'Sidney No. 1 Lake Park',
    },
  ]}
}