import React from 'react'
import { render } from 'react-dom'

import { Router, Route, hashHistory } from 'react-router'

import appRouter from './modules/appRouter'
import About from './modules/About'
import Repos from './modules/Repos'

var Btn = require('./components/app.js');
var Btn_wait = require('./components/wait.js');

render(
  <Btn />,
  document.getElementById('counter')
);

render(
    <Btn_wait />,
    document.getElementById('wait')
);


render((
    <Router history={hashHistory}>
        <Route path="/" component={appRouter}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'));