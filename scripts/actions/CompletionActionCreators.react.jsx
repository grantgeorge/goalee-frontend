var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  createCompletion: function(goalId, completed) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_COMPLETION,
      goalId: goalId,
      completed: completed
    });
    WebAPIUtils.createCompletion(goalId, completed);
  }

};

