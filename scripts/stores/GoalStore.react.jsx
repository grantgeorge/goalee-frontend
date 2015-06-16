var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _goals = [];
var _errors = [];
var _goal = { title: "", body: "", user: { username: "" } };

var GoalStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllGoals: function() {
    return _goals;
  },

  getGoal: function() {
    return _goal;
  },

  getErrors: function() {
    return _errors;
  }

});

GoalStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_GOALS:
      _goals = action.json;

      console.log(_goals);

      GoalStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_GOAL:
      if (action.json) {
        _goals.unshift(action.json);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      GoalStore.emitChange();
      break;

    case ActionTypes.RECEIVE_GOAL:
      if (action.json) {
        _goal = action.json;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      GoalStore.emitChange();
      break;
  }

  return true;
});

module.exports = GoalStore;

