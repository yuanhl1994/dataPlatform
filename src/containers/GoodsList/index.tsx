import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'

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

const GoodsList = () => {

  let defaultFilter = {
    // 筛选条件
    brand: '',   //品牌
    name: '',   //商品名
    platform: '',   //所属平台
    status: '',   //状态
  }

  const [filter, setFilter] = useState(defaultFilter)
  
  return (
    <>
      <div className='top'>
        <Form>
          <FormItem label='所属品牌'>
            <Select value={filter.brand}>
              <Option value=''>全部</Option>
              {
                options.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
              }
            </Select>
          </FormItem>
          <FormItem label='所属品牌'>
            <Input />
          </FormItem>
        </Form>
      </div>
      <div className='bottom'></div>
    </>
  )
}

export default GoodsList