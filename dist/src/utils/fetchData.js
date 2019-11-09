"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  url,
  data = {},
  method = "POST"
}) => {
  let urlParams = {
    k: 5443477
  },
      paramUrl = "";
  let options = {
    method,
    headers: {
      "X-Host": url //"mall.film-ticket.city.list",

    },
    "Content-Type": "application/json; charset=UTF-8"
  };

  if (method == "POST") {
    options.body = JSON.stringify(data);
  } else {
    urlParams = Object.assign(urlParams, data);
    paramUrl = Object.keys(urlParams).map(key => `${key}=${urlParams[key]}`).join("&");
  }

  return (0, _nodeFetch.default)(`/gateway?${paramUrl}`, options).then(res => {
    return res.json();
  }).then(res => {
    return res;
  });
};

exports.default = _default;