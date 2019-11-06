"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _city = _interopRequireDefault(require("./city"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => _react.default.createElement(_reactRouterDom.Router, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  render: () => _react.default.createElement(_home.default, null)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/city",
  render: () => _react.default.createElement(_city.default, null)
}));

exports.default = _default;