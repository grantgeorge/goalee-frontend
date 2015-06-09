var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  loadGoals: function() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_GOALS
    });
    WebAPIUtils.loadGoals();
  },

  loadGoal: function(goalId) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_GOAL,
      goalId: goalId
    });
    WebAPIUtils.loadGoal(goalId);
  },

  createGoal: function(title, body) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_GOAL,
      title: title,
      body: body
    });
    WebAPIUtils.createGoal(title, body);
  }

};

