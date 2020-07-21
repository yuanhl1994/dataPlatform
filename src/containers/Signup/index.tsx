import React,{useState, Fragment} from 'react'
import { UserOutlined,LockOutlined,TagOutlined } from '@ant-design/icons'
import { Button,Input } from 'antd'

import './style.less'

interface Props {
    history: any;
  }
const Signup = (props: Props) => {
    const {history} = props
    console.log(history)
    const [noAccount,setNoAccount] = useState(history.location.search.indexOf('noAccount')>0?1:0)
    return (
        <div className='signup'>
            
            <div className="signup-header">
                <div className="signup-title">货物监管平台</div>
            </div>
            {
                noAccount ? 
                <Fragment>
                    <Input
                        placeholder="邮箱"
                        prefix={<UserOutlined  className="site-form-item-icon" />}
                        style={{marginBottom:20}}
                    />
                    <Button type="primary" style={{width:'100%',marginBottom:20}}>找回密码</Button>
                    <div className="signup-footer" >
                        <div onClick={()=>history.push('/home/login')}><span style={{color:'black'}}>已有账号？</span>进入登录页面</div>
                        <div onClick={()=>setNoAccount(0)}>注册账号</div>
                    </div>
                </Fragment>:
                <Fragment>
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
                    <Input
                        placeholder="注册码"
                        prefix={<TagOutlined  className="site-form-item-icon" />}
                        style={{marginBottom:20}}
                    />
                    <Button type="primary" style={{width:'100%',marginBottom:20}}>注册</Button>
                    <div className="signup-footer" >
                        <div onClick={()=>history.push('/home/login')}><span style={{color:'black'}}>已有账号？</span>进入登录页面</div>
                    </div>
                </Fragment>
            }
           
        </div>
    )
}

export default Signup