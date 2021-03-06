"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _containers = _interopRequireDefault(require("../src/containers"));

var _createRootStore = _interopRequireDefault(require("../src/createRootStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 服务端容器页面
const store = (0, _createRootStore.default)();
exports.store = store;

class App extends _react.default.Component {
  constructor(props) {
    super(props);
  } // 服务端获取数据


  render() {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.StaticRouter, {
      location: this.props.location || "/"
    }, _react.default.createElement(_containers.default, null)))));
  }

}

exports.default = App;