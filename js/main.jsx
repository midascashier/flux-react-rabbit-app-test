import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, useRouterHistory   } from 'react-router'
import App from './components/App'
import Wait from './components/wait'
import Increase from './components/increase'
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <Route path="/wait" component={Wait}/>
            <Route path="/increase" component={Increase}/>
        </Route>
    </Router>
), document.getElementById('app'))