import React, { useState } from 'react'
import { Form, Input, Select, Button,Table } from 'antd'

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
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    status:1,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    status:1,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    status:0,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    status:1,
    latelyTime:'7月1日',
    joinTime:'2月10日',
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];
const GoodsList = () => {

  let defaultFilter = {
    // 筛选条件
    brand: '',   //品牌
    name: '',   //商品名
    platform: '',   //所属平台
    status: '',   //状态
  }

  const [filter, setFilter] = useState(defaultFilter)
  const columns = [
    { title: '产品名称', dataIndex: 'name', key: 'name' },
    { title: '所属平台', dataIndex: 'age', key: 'age' },
    { title: '所属品牌', dataIndex: 'address', key: 'address' },
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
  ];
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
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          }}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default GoodsList