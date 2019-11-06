"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class City extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {}

  render() {
    return _react.default.createElement("div", null, "\u6211\u662F\u57CE\u5E02\u9875\u9762");
  }

}

exports.default = City;