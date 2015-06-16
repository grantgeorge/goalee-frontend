var React = require('react');
var SmallAppDispatcher = require('../../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../../constants/SmallConstants.js');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var GoalActionCreators = require('../../actions/GoalActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var GoalNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isLoggedIn()) {
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value;
    var description = this.refs.description.getDOMNode().value;
    GoalActionCreators.createGoal(name, description);
  },

  render: function() {
    return (
      <form onSubmit={this._onSubmit} className="new-goal">
        <div className="form-group">
          <label htmlFor="newGoalNameInput">Name</label>
          <input type="text" className="form-control"
            placeholder="New goal name" name="name" ref="name" id="newGoalNameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Name</label>
          <input type="text" className="form-control"
            placeholder="New goal description" name="description" ref="description" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>
     );
  }

});

module.exports = GoalNew;

