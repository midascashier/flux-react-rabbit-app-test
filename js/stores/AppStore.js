let AppActions = require('../actions/AppActions');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

let stompObj = require('../stomp/AppStomp');
let stomp = new stompObj();
stomp.connection();

let CHANGE_EVENT = 'change';

let _data = {num: 0, wait: "Listening ..."};

let AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  getNum: function(){
    return _data.num;
  },

  getWait: function(){
    return _data.wait;
  }

});

function increaseNum(){
  _data.num++;
}

function receiveReponse(data){
  _data.wait = "Action Completed: " + data;
}

function sendRequest(){
  stomp.send("TRANSACTION", "process");
}

AppDispatcher.register(function(payload){
  let action = payload.actionType;
  switch(action){
    case "INCREASE":
    {
      increaseNum();
      AppStore.emitChange();
      break;
    }
    case "REQUEST":
    {
      sendRequest();
      AppStore.emitChange();
      break;
    }
    case "RESPONSE":
    {
      receiveReponse(payload.data);
      AppStore.emitChange();
      break;
    }
  }
  return true;
});

module.exports = AppStore;