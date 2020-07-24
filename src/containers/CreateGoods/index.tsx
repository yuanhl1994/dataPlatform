import React, { useState, useEffect } from 'react'
import { Form, Input, Select,Button, message, Modal } from 'antd'

import { getGoodsOptions, createGoods } from '../../services'
import './style.less'

const {Option} = Select

const CreateGoods = () => {

  const token = localStorage.getItem('wb_token')
  
  let defaultOptions = {
    brands: [],
    platforms: []
  }

  let defaultInfo = {
    platform: '', // 平台
    brand: '',  // 品牌
    name: '',  // 货物名称
    link: ''  // 货物链接
  }

  const [opt, setOpt] = useState(defaultOptions)
  const [info, setInfo] = useState(defaultInfo)

  const setParams = (label,value) =>{
    setInfo({
      ...info,
      [label]: value
    })
  }

  const getOptions = () => {
    getGoodsOptions({ token }).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      setOpt(res.data)
    })
  }

  const newGoods = () => {
    if (Object.values(info).indexOf('') != -1) {
      return message.error('请完善货物信息')
    }
    let params = {
      token,
      ...info
    }
    createGoods(params).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      Modal.success({
        title: '提交成功',
        content: '我们会尽快添加新的货物',
        okText: '确定',
        onOk: () => {
          // Modal.destroyAll()
        }
      })
    })
  }

  useEffect(() => {
    getOptions()
  }, [])
  
  return (
    <div className="create-goods">
      <Form>
        <Form.Item
          label="货物平台下拉列表"
          name="platform"
        >
          <Select  placeholder="请选择货物平台" onChange={val => setParams('platform', val)}>
            {
              opt.platforms.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="货物品牌下拉列表"
          name="brand"
        >
          <Select placeholder="请选择货物品牌" onChange={val => setParams('brand', val)}>
            {
              opt.brands.map(item => <Option key={item.value} value={item.value}>{item.label}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="货物名称"
          name="name"
        >
          <Input value={info.name} placeholder='茶树菇' onChange={e => setParams('name', e.target.value)} />
        </Form.Item>
        <Form.Item
          label="货物链接"
          name="link"
        >
          <Input value={info.link} placeholder='www.baidu.com' onChange={e => setParams('link', e.target.value)} />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={newGoods}>
        提交新的货物申请
      </Button>
    </div>
  )
}

export default CreateGoods