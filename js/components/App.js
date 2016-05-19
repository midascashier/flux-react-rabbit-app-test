/**
 * Created by jocampo on 5/10/2016.
 */
import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div id="main">
        <div id="header1"><h1>HEADER</h1></div>
        <div id="menu">
          <h1>Menu</h1>
          <ul role="nav">
            <li><Link to="/wait" params="">Wait</Link></li>
            <li><Link to="/increase">Increase</Link></li>
          </ul>
        </div>
        <div id="content"><h2>CASHIER:</h2>{this.props.children}</div>

      </div>
    )
  }
})