var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var GoalStore = require('../../stores/GoalStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var GoalActionCreators = require('../../actions/GoalActionCreators.react.jsx');
var CompletionActionCreators = require('../../actions/CompletionActionCreators.react.jsx');
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

  getInitialState: function() {
    return { isChecked: this.props.goal.completions.length > 0 };
  },

  _onCompletion: function(e) {
    this.setState({isChecked: !this.state.isChecked});
    console.log('call to server to create a completion');
    var goalId = this.props.goal.id;
    var completed = true;
    CompletionActionCreators.createCompletion(goalId, completed);
  },

  render: function() {
    return (
      <li className="goal">
        <div className="goal-title">
          <Link to="goal" params={ {goalId: this.props.goal.id} }>
            {this.props.goal.name}
          </Link>
          <label>
            <input
              className="goal-completed-checkbox"
              type="checkbox"
              name="completed"
              checked={this.state.isChecked}
              onChange={this._onCompletion} />
            {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
          </label>
        </div>
        <div className="goal-body">{this.props.goal.description}</div>
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
