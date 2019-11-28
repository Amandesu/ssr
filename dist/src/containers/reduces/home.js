"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxActions = require("redux-actions");

// 首页面对应的reduce
const prefix = "HOME";
const SET_LIST = `${prefix}_SET_LIST`;
const INIT_LIST = `${prefix}_INIT_LIST`;

var _default = (0, _reduxActions.handleActions)({
  [SET_LIST]: (state, action) => {
    return { ...state,
      list: state.list.concat(action.data),
      pageNum: action.pageNum
    };
  },
  [INIT_LIST]: (state, action) => {
    return { ...state,
      list: [],
      pageNum: 1
    };
  }
}, {
  title: "home",
  list: [],
  pageNum: 1
});

exports.default = _default;