var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SmallApp = require('./components/SmallApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var StoriesPage = require('./components/stories/StoriesPage.react.jsx');
var StoryPage = require('./components/stories/StoryPage.react.jsx');
var StoryNew = require('./components/stories/StoryNew.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

var GoalsPage = require('./components/goals/GoalsPage.react.jsx');
var GoalPage = require('./components/goals/GoalPage.react.jsx');
var GoalNew = require('./components/goals/GoalNew.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={SmallApp}>
    <DefaultRoute handler={StoriesPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="stories" path="/stories" handler={StoriesPage}/>
    <Route name="story" path="/stories/:storyId" handler={StoryPage}/>
    <Route name="new-story" path="/story/new" handler={StoryNew}/>

    <Route name="goals" path="/goals" handler={GoalsPage}/>
    <Route name="goal" path="/goals/:goalId" handler={GoalPage}/>
    <Route name="new-goal" path="/goals/new" handler={GoalNew}/>
  </Route>
);

