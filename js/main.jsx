import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute  } from 'react-router'
import App from './components/App'
import Wait from './components/wait'
import Increase from './components/increase'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/wait" component={Wait}/>
            <Route path="/increase" component={Increase}/>
        </Route>
    </Router>
), document.getElementById('app'))