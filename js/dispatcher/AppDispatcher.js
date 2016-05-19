let Dispatcher = require('flux').Dispatcher;
let assign = require('object-assign');

let AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    switch(action.action){
      case "X":
      {
        break;
      }
      default :
      {
        this.dispatch({actionType: action.action});
        break;
      }
    }
  },

  handleServerAction: function(action){
    switch(action.action){
      case "X":
      {
        break;
      }
      default:
      {
        this.dispatch({
          actionType: action.action,
          data: action.data
        });
        break;
      }
    }
  }
});

module.exports = AppDispatcher;
