var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var GoalStore = require('../../stores/GoalStore.react.jsx');
var GoalActionCreators = require('../../actions/GoalActionCreators.react.jsx');
var State = require('react-router').State;

var GoalPage = React.createClass({

  mixins: [ State ],

  getInitialState: function() {
    return {
      goal: GoalStore.getGoal(),
      errors: []
    };
  },

  componentDidMount: function() {
    GoalStore.addChangeListener(this._onChange);
    GoalActionCreators.loadGoal(this.getParams().goalId);
  },

  componentWillUnmount: function() {
    GoalStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      goal: GoalStore.getGoal(),
      errors: GoalStore.getErrors()
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="goal__title">{this.state.goal.title}</div>
        <div className="goal__body">{this.state.goal.body}</div>
        <div className="goal__user">{this.state.goal.username}</div>
      </div>
     );
  }

});

module.exports = GoalPage;
