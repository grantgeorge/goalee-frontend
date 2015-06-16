var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');

var Header = React.createClass({

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {
    var rightNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav navbar-right">
          <li><a href="#">{this.props.email}</a></li>
          <li><a href='#' onClick={this.logout}>Logout</a></li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="login">Login</Link></li>
        <li><Link to="signup">Sign up</Link></li>
      </ul>
    );

    var leftNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav navbar-left">
        <li><Link to="goals">Goals</Link></li>
        <li><Link to="new-goal">New goal</Link></li>
      </ul>
    ) : (
      <div></div>
    );

    return (
      <nav className="navbar navbar-default" data-topbar role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Goalee</a>
          </div>

          <section className="top-bar-section">
            {rightNav}
            {leftNav}
          </section>
        </div>
      </nav>
    );
  }
});

module.exports = Header;

