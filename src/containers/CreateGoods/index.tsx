import React, { useState } from 'react'
import { Form, Input, Select,Button } from 'antd'
import './style.less'

const {Option} = Select

const CreateGoods = () => {
  const [platformList,setPlatformList] = useState(['lucy','jack'])
  const [brandList,setBrandList] = useState(['lucy','jack'])
  const setParams = (item,type) =>{

  }
  return (
    <div className="create-goods">
      <Form>
        <Form.Item
          label="货物平台下拉列表"
          name="platform"
        >
          <Select  placeholder="请选择货物平台" onChange={e=>setParams(e,'platform')}>
            {
              platformList && platformList.map(item=>(
                <Option value={item}>{item}</Option>
              ))
            }
            
          </Select>
        </Form.Item>
        <Form.Item
          label="货物品牌下拉列表"
          name="brand"
        >
          <Select placeholder="请选择货物品牌" onChange={e=>setParams(e,'brand')}>
            {
              brandList && brandList.map(item=>(
                <Option value={item}>{item}</Option>
              ))
            }
            
          </Select>
        </Form.Item>
        <Form.Item
          label="货物名称"
          name="name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="货物链接"
          name="link"
        >
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary">
        提交新的货物申请
      </Button>
    </div>
  )
}

export default CreateGoods