let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');

let AppActions = {
  increase: function(){
    AppDispatcher.handleViewAction({
      action:'INCREASE'
    })
  },

  sendRequest: function(){
    AppDispatcher.handleViewAction({
      action:'REQUEST'
    })
  },

  receiveResponse: function(data){
    AppDispatcher.handleServerAction({
      action:'RESPONSE',
      data: data
    })
  }

}

module.exports = AppActions