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
    var title = this.refs.title.getDOMNode().value;
    var body = this.refs.body.getDOMNode().value;
    GoalActionCreators.createGoal(title, body);
  },

  render: function() {
    return (
      <div className="row">
        <form onSubmit={this._onSubmit} className="new-goal">
          <div className="new-goal__title">
            <input type="text" placeholder="Title" name="title" ref="title" />
          </div>
          <div className="new-goal__body">
            <textarea rows="10" placeholder="Your goal..." name="body" ref="body" />
          </div>
          <div className="new-goal__submit">
            <button type="submit">Create</button>
          </div>
         </form>
       </div>
     );
  }

});

module.exports = GoalNew;

