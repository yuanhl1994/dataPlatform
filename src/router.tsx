import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './containers/Home'
import NoMatch from './containers/NoMatch'

export interface child {
    path?: string;
    com: any;
}

const Router = () => {
    const routes: Array<child> = [
        {
            path: '/',
            com: Home
        },
        {
            path: '/home',
            com: Home
        },
        {
            com: NoMatch
        }
    ]
    return (
        <HashRouter>
            <Switch>
                {
                    routes.map(({ path, com }) => <Route key={path || 'no-match'} path={path} component={com} />)
                }
                <Redirect to='/home' />
            </Switch>
        </HashRouter>
    )
};

export default Router