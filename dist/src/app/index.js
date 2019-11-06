"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _createRootStore = _interopRequireDefault(require("../createRootStore"));

var _reduxActions = require("redux-actions");

var _routes = _interopRequireDefault(require("./routes/"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _createRootStore.default)();
exports.store = store;

class App extends _react.default.Component {
  constructor(props) {
    super(props);
  } // 服务端获取数据


  render() {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_routes.default, null))));
  }

}

exports.default = App;