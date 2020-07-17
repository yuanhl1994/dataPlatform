import React from 'react'
import { Form, Input, Button } from 'antd'

import './style.less'

const FormItem = Form.Item

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
}


const PassChange = () => {
  return (
    <div className='pass-change'>
      <Form {...layout}>
        <FormItem label='旧密码'>
          <Input />
        </FormItem>
        <FormItem label='新密码'>
          <Input />
        </FormItem>
        <FormItem label='确认新密码'>
          <Input />
        </FormItem>
        <FormItem wrapperCol={{ offset: 2 }}>
          <Button type='primary'>更改密码</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default PassChange