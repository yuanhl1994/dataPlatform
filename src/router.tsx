import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '@/Home'
import Login from '@/Login'
import Signup from '@/Signup'

export interface child {
    path?: string;
    com: any;
}

const Router = () => {
    const routes: Array<child> = [
        // {
        //     path: '/',
        //     com: Home
        // },
        {
            path: '/home',
            com: Home
        },
        {
            path: '/login',
            com: Login
        },
        {
            path: '/signup',
            com: Signup
        }
    ]
    return (
        <HashRouter>
            <Switch>
                {
                    routes.map(({ path, com }) => <Route key={path} path={path} component={com} />)
                }
                <Redirect to='/home' />
            </Switch>
        </HashRouter>
    )
}

export default Router