"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  url,
  data
}) => {
  return (0, _nodeFetch.default)(url, {
    method: "POST",
    data
  }).then(res => {
    return res.json();
  }).then(res => {
    return res;
  });
};

exports.default = _default;