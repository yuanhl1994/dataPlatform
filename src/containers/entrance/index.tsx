import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import Login from './login'
import Signup from './signup'

const { Header, Content } = Layout

interface Props {
  history: any;
}

export default function LoginAndSignup (props: Props) {
  const { history } = props

  useEffect(() => {
    const token = localStorage.getItem('wb_token') || ''
    if (token) {
      history.push('/home')
    }
  }, [])
  
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header" style={{ backgroundColor: '#fff', marginBottom: '8px' }}>
        <div style={{ height: '100%' }}>
          <img src='' />
          <span className='name'>货物监管平台</span>
        </div>
      </Header>
      <Layout>
        <Content style={{ marginTop: '40px' }}>
          <Switch>
            <Route path='/entrance/login' component={Login} />
            <Route path='/entrance/signup' component={Signup} />
            <Redirect to='/entrance/login' />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}