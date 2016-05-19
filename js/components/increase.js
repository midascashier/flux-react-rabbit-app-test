var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getNumState(){
  return {
    num: AppStore.getNum()
  };
}

var btn = React.createClass({
  increase: function(){
    AppActions.increase();
  },

  getInitialState: function(){
    return getNumState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
        <button onClick={this.increase}>Suma</button>
        <div>{this.state.num}</div>
      </div>
    )
  },
  _onChange: function(){
    if(this.isMounted() === true){
      this.setState(getNumState());
    }
  }

});

module.exports = btn;