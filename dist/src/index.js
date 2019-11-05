"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _index = _interopRequireDefault(require("./app/index"));

var _createStore = _interopRequireDefault(require("./createStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 5000);
});
Promise.all([p1, p2]).then(res => {
  console.log("suc");
}, err => {
  console.log("err");
});

_reactDom.default.hydrate(_react.default.createElement(_reactRedux.Provider, {
  store: (0, _createStore.default)()
}, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.default, null))), document.getElementById('root'));