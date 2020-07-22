import React, { useState } from 'react'
import { Input, Row, Col, Button, Radio, Modal, message } from 'antd'

import { testMobile, testEmail, saveUser } from '../../services'
import './style.less'

const User = () => {
  const [nickname, setNickname] = useState('')
  const [code, setCode] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const [mbMsg, setMbMsg] = useState('1')
  const [emMsg, setEmMsg] = useState('1')

  const sendMsg = () => {
    testMobile({ mobile: code + mobile }).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      Modal.success({
        title: res.message,
        okText: '确定',
        onOk: () => {
          // Modal.destroyAll()
        }
      })
    })
  }

  const sendEmail = () => {
    testEmail({ email }).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      Modal.success({
        title: res.message,
        okText: '确定',
        onOk: () => {
          // Modal.destroyAll()
        }
      })
    })
  }

  const saveInfo = () => {
    const params = {
      nickname,
      mobile: code + mobile,
      email,
      useMobile: mbMsg,
      useEmail: emMsg
    }
    saveUser(params).then((res: any) => {
      if (res.errcode) {
        return message.error(res.message)
      }
      Modal.success({
        title: '保存成功',
        okText: '确定',
        onOk: () => {
          // Modal.destroyAll()
        }
      })
    })
  }
  
  return (
    <div className='user'>
      <Row gutter={8}>
        <Col className='align-center'>用户名：</Col>
        <Col span={8}><Input value={nickname} onChange={e => setNickname(e.target.value)} /></Col>
      </Row>
      <Row gutter={8}>
        <Col className='align-center'>手机号：</Col>
        <Col span={3}><Input placeholder='区号，如：+86' value={code} onChange={e => setCode(e.target.value)} /></Col>
        <Col span={8}><Input value={mobile} onChange={e => setMobile(e.target.value)} /></Col>
        <Col><Button type='primary' onClick={sendMsg}>测试手机号</Button></Col>
      </Row>
      <Row gutter={8}>
        <Col style={{ visibility: 'hidden' }} className='align-center'>手机号：</Col>
        <Col>
          使用手机接受信息
          <Radio.Group style={{ marginLeft: '16px' }} value={mbMsg} onChange={e => setMbMsg(e.target.value)}>
            <Radio value='1'>接受</Radio>
            <Radio value='2'>不接受</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col className='align-center'>邮箱地址：</Col>
        <Col span={8}><Input onChange={e => setEmail(e.target.value)} /></Col>
        <Col><Button type='primary' onClick={sendEmail}>测试邮箱</Button></Col>
      </Row>
      <Row gutter={8}>
        <Col style={{ visibility: 'hidden' }} className='align-center'>邮箱地址：</Col>
        <Col>
          使用手机接受信息
          <Radio.Group style={{ marginLeft: '16px' }} value={emMsg} onChange={e => setEmMsg(e.target.value)}>
            <Radio value='1'>接受</Radio>
            <Radio value='2'>不接受</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Button style={{ marginLeft: '80px' }} type='primary' onClick={saveInfo}>保存个人信息</Button>
    </div>
  )
}

export default User