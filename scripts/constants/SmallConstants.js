var keyMirror = require('keymirror');

var APIRoot = "http://localhost:5000";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    STORIES:        APIRoot + "/v1/stories",
    GOALS:          APIRoot + "/v1/goals",
    COMPLETIONS:          APIRoot + "/v1/completions"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    // Routes
    REDIRECT: null,

    LOAD_STORIES: null,
    RECEIVE_STORIES: null,
    LOAD_STORY: null,
    RECEIVE_STORY: null,
    CREATE_STORY: null,
    RECEIVE_CREATED_STORY: null,

    // Goals
    LOAD_GOALS: null,
    RECEIVE_GOALS: null,
    LOAD_GOAL: null,
    RECEIVE_GOAL: null,
    CREATE_GOAL: null,
    RECEIVE_CREATED_GOAL: null,

    // Completions
    RECEIVE_COMPLETION: null,
    CREATE_COMPLETION: null,
    RECEIVE_CREATED_COMPLETION: null
  })

};
