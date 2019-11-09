"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = require("redux-actions");

// 首页面对应的reduce
const prefix = "HOME";
const SET_LIST = `${prefix}_SET_LIST`;

var _default = (0, _reduxActions.handleActions)({
  [SET_LIST]: (state, action) => {
    return { ...state,
      list: action.data
    };
  }
}, {
  title: "home",
  list: []
});

exports.default = _default;