"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxActions = require("redux-actions");

const rootReduces = (0, _redux.combineReducers)({
  "app": (0, _reduxActions.handleActions)({
    ["APP_ADDAPI"]: (state, action) => {
      return { ...state,
        queue: state.queue.concat(action.data)
      };
    }
  }, {
    title: "app",
    queue: []
  }),
  "home": (0, _reduxActions.handleActions)({
    ["HOME_LIST"]: (state, action) => {
      return { ...state,
        list: action.data
      };
    }
  }, {
    title: "home",
    list: []
  }),
  "child": (0, _reduxActions.handleActions)({
    ["Child_LIST"]: (state, action) => {
      return { ...state,
        list: action.data
      };
    }
  }, {
    title: "child",
    list: []
  })
});

var _default = initData => {
  const store = (0, _redux.createStore)(rootReduces, initData || {});
  return store;
};

exports.default = _default;