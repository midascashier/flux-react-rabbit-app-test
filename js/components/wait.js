/**
 * Created by jocampo on 5/4/2016.
 */

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getWaitState(){
  return {
    wait: AppStore.getWait()
  }
}

var wait = React.createClass({
  getInitialState: function(){
    return getWaitState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },


  sendRequest: function(){
    AppActions.sendRequest();
  },

  render: function(){
    return (
      <div>
        <button onClick={this.sendRequest}>Send Request</button>
        <div>{this.state.wait}</div>
      </div>
    )
  },

  _onChange: function(){
    if(this.isMounted() === true){
      this.setState(getWaitState());
    }
  }
});

module.exports = wait;