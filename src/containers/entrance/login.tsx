import React, { useState } from 'react'
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import { Button,Input, message, Modal } from 'antd'

import { userLogin } from '../../services'
import './style.less'
interface Props {
    history: any;
  }
const Login = (props: Props) => {
    const { history } = props

    const [account, setAccount] = useState('')
    const [psd, setPsd] = useState('')

    const login = () => {
        const params = {
            account,
            password: psd
        }
        userLogin(params).then((res: any) => {
            if (res.errcode) {
                return message.error(res.message)
            }
            localStorage.setItem('wb_token', res.data.token)
            history.push('/home')
        })
    }
    
    return (
        <div className='login'>
            <div className="login-header">
                <div className="login-title">货物监管平台</div>
            </div>
            <Input
                placeholder="邮箱"
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={{marginBottom:20}}
                value={account}
                onChange={e => setAccount(e.target.value)}
            />
            <Input.Password
                placeholder="密码"
                prefix={<LockOutlined />}
                style={{marginBottom:20}}
                value={psd}
                onChange={e => setPsd(e.target.value)}
            />
            <Button type="primary" style={{width:'100%',marginBottom:20}} onClick={login}>登录</Button>
            <div className="login-footer" >
                <div onClick={()=>history.push('/entrance/signup')}>注册账号</div>
                <div onClick={()=>history.push('/entrance/signup?noAccount=1')}>忘记密码</div>
            </div>
        </div>
    )
}

export default Login