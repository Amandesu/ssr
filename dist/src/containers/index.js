"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _city = _interopRequireDefault(require("./routes/city"));

var _home = _interopRequireDefault(require("./routes/home/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  exact: true,
  render: props => _react.default.createElement(_home.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/city",
  exact: true,
  render: props => _react.default.createElement(_city.default, props)
}));

exports.default = _default;