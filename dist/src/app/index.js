"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxActions = require("redux-actions");

var _Home = _interopRequireDefault(require("./Home"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.default.Component {
  constructor(props) {
    super(props);
  } // 服务端获取数据


  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_Home.default, null));
  }

}

exports.default = App;