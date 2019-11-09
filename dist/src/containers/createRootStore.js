"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxActions = require("redux-actions");

var _reduces = _interopRequireDefault(require("./reduces"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 如果是服务端渲染要数据脱水
var _default = initData => {
  const store = (0, _redux.createStore)(_reduces.default, initData || {});
  return store;
};

exports.default = _default;