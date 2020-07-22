import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Button,Table,message } from 'antd'

import CustomChart from './chart'
import './style.less'
import { getGoodLists } from '../../services'

const FormItem = Form.Item
const { Option } = Select

const options = [
  {
    value: 'brand1',
    label: '品牌一'
  },
  {
    value: 'brand2',
    label: '品牌二'
  },
  {
    value: 'brand3',
    label: '品牌三'
  },
  {
    value: 'brand4',
    label: '品牌四'
  },
]

const columns = [
  { title: '产品名称', dataIndex: 'name', key: 'name' },
  { title: '所属平台', dataIndex: 'platform', key: 'platform' },
  { title: '所属品牌', dataIndex: 'brand', key: 'brand' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render:item=>item?'有货':'无货'
  },
  {
    title: '最近状态时间',
    dataIndex: 'latelyTime',
    key: 'latelyTime',
  },
  {
    title: '加入时间',
    dataIndex: 'joinTime',
    key: 'joinTime',
  },
]

const GoodsList = () => {
  const token = localStorage.getItem('wb_token')
  let defaultFilter = {
    // 筛选条件
    brand: '',   //品牌
    name: '',   //商品名
    platform: '',   //所属平台
    status: '',   //状态
  }
  
  const [filter, setFilter] = useState(defaultFilter)
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getGoodLists({token}).then((res:any)=>{
      setLoading(false)
      if(res.errcode == 1){
        message.error(res.message)
      }
      setData(res.data)
    })
  })

  return (
    <div className="goods-list">
      <div className='top'>
        <Form layout="inline" style={{marginBottom:30}}>
          <FormItem label='所属品牌'>
            <Select value={filter.brand}>
              <Option value=''>全部</Option>
              {
                options.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
              }
            </Select>
          </FormItem>
          <FormItem label='产品名称'>
            <Input placeholder="输入姓名模糊搜索"/>
          </FormItem>
        </Form>
        <Form layout="inline">
          <FormItem label='所属品牌'>
          <Select value={filter.platform}>
              <Option value=''>全部</Option>
              {
                options.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
              }
            </Select>
          </FormItem>
          <FormItem label='状态'>
            <Select defaultValue="">
              <Option value=''>全部</Option>
              <Option value='hanveGoods'>有货</Option>
              <Option value='noGoods'>没货</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" style={{marginRight:20}}>搜索</Button>
            <Button>清空条件</Button>
          </FormItem>
        </Form>
      </div>
      <div className='bottom'>
        <Table
          columns={columns}
          loading={loading}
          expandable={{
            expandedRowRender: record => <CustomChart day={record.day} week={record.week} month={record.month} />,
          }}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default GoodsList