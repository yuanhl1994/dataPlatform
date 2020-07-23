import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '@/Home'
import Entrance from '@/entrance'

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
            path: '/entrance',
            com: Entrance
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