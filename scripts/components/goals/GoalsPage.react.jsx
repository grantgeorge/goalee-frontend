var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var GoalStore = require('../../stores/GoalStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var GoalActionCreators = require('../../actions/GoalActionCreators.react.jsx');
var Router = require('react-router');
var Link = Router.Link;
var timeago = require('timeago');

var GoalsPage = React.createClass({

  getInitialState: function() {
    return {
      goals: GoalStore.getAllGoals(),
      errors: []
    };
  },

  componentDidMount: function() {
    GoalStore.addChangeListener(this._onChange);
    GoalActionCreators.loadGoals();
  },

  componentWillUnmount: function() {
    GoalStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      goals: GoalStore.getAllGoals(),
      errors: GoalStore.getErrors()
    });
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <GoalsList goals={this.state.goals} />
        </div>
      </div>
    );
  }
});

var GoalItem = React.createClass({
  render: function() {
    return (
      <li className="goal">
        <div className="goal__title">
          <Link to="goal" params={ {goalId: this.props.goal.id} }>
            {this.props.goal.name}
          </Link>
        </div>
        <div className="goal__body">{this.props.goal.description}</div>
      </li>
      );
  }
});

var GoalsList = React.createClass({
  render: function() {
    return (
      <ul className="large-8 medium-10 small-12 small-centered columns">
        {this.props.goals.map(function(goal, index){
          return <GoalItem goal={goal} key={"goal-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = GoalsPage;
