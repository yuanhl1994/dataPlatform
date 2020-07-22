import React, { useState } from 'react'
import { Form, Input, Button, message, Modal } from 'antd'

import { changePsd } from '../../services'
import './style.less'

const FormItem = Form.Item

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
}

const PassChange = () => {

  const [old, setOld] = useState('')
  const [newpsd, setNewpsd] = useState('')
  const [newpsd2, setNewpsd2] = useState('')

  const modifyPsd = () => {
    if (!newpsd || !old) {
      return message.error('请输入内容')
    }
    if (newpsd !== newpsd2) {
      return message.error('请确认两次新密码输入一致')
    }
    const params = {
      oldpsd: old,
      newpsd
    }
    changePsd(params).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      Modal.success({
        title: '更改成功',
        okText: '确定',
        onOk: () => {
          // Modal.destroyAll()
        }
      })
    })
  }
  
  return (
    <div className='pass-change'>
      <Form {...layout}>
        <FormItem label='旧密码'>
          <Input type='password' onChange={e => setOld(e.target.value)} />
        </FormItem>
        <FormItem label='新密码'>
          <Input type='password' onChange={e => setNewpsd(e.target.value)} />
        </FormItem>
        <FormItem label='确认新密码'>
          <Input type='password' onChange={e => setNewpsd2(e.target.value)} />
        </FormItem>
        <FormItem wrapperCol={{ offset: 2 }}>
          <Button type='primary' onClick={modifyPsd}>更改密码</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default PassChange