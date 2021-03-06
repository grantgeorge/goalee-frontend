var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveStories: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORIES,
      json: json
    });
  },

  receiveStory: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORY,
      json: json
    });
  },

  receiveCreatedStory: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_STORY,
      json: json,
      errors: errors
    });
  },

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveGoals: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_GOALS,
      json: json
    });
  },

  receiveGoal: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_GOAL,
      json: json
    });
  },

  receiveCreatedGoal: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_GOAL,
      json: json,
      errors: errors
    });
  },

  receiveCreatedCompletion: function(json, errors) {

    console.log('receiveCreatedCompletion in ServerActionCreator');

    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_COMPLETION,
      json: json,
      errors: errors
    });
  }

};

