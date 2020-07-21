import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Button,Table } from 'antd'

import CustomChart from './chart'
import './style.less'

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
const tmpData = [
  {
    key: 1,
    name: 'John Brown',
    platform: 32,
    brand: 'New York No. 1 Lake Park',
    status:1,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
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
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    // day: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.8, 0.7, 0.6, 0.2],
    // week: [0.3, 0.2, 0.5, 0.2, 0.8, 0.5, 0.8],
    // month: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
  },
  {
    key: 3,
    name: 'Not Expandable',
    platform: 29,
    status:0,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    brand: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
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


  let defaultFilter = {
    // 筛选条件
    brand: '',   //品牌
    name: '',   //商品名
    platform: '',   //所属平台
    status: '',   //状态
  }

  const [filter, setFilter] = useState(defaultFilter)
  const [data, setData] = useState(tmpData)
  
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