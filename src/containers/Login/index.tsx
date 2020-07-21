import React from 'react'
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import { Button,Input } from 'antd'

import './style.less'
interface Props {
    history: any;
  }
const Login = (props: Props) => {
    const { history } = props
    return (
        <div className='login'>
            <div className="login-header">
                <div className="login-title">货物监管平台</div>
            </div>
            <Input
                placeholder="邮箱"
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{marginBottom:20}}
            />
            <Input.Password
                placeholder="密码"
                prefix={<LockOutlined />}
                style={{marginBottom:20}}
            />
            <Button type="primary" style={{width:'100%',marginBottom:20}}>登录</Button>
            <div className="login-footer" >
                <div onClick={()=>history.push('/home/signup')}>注册账号</div>
                <div onClick={()=>history.push('/home/signup?noAccount=1')}>忘记密码</div>
            </div>
        </div>
    )
}

export default Login