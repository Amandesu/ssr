"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _city = _interopRequireDefault(require("./routes/city"));

var _home = _interopRequireDefault(require("./routes/home/"));

var _cinema = _interopRequireDefault(require("./routes/cinema"));

var _myInfo = _interopRequireDefault(require("./routes/myInfo"));

var _news = _interopRequireDefault(require("./routes/news"));

var _search = _interopRequireDefault(require("./routes/cinema/search"));

var _selectFilms = _interopRequireDefault(require("./routes/cinema/selectFilms"));

var _filmsDetail = _interopRequireDefault(require("./routes/home/filmsDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  exact: true,
  render: props => _react.default.createElement(_home.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/filmsDetail",
  exact: true,
  render: props => _react.default.createElement(_filmsDetail.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/city",
  exact: true,
  render: props => _react.default.createElement(_city.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/cinema",
  exact: true,
  render: props => _react.default.createElement(_cinema.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/cinema/search",
  exact: true,
  render: props => _react.default.createElement(_search.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/cinema/selectFilms",
  exact: true,
  render: props => _react.default.createElement(_selectFilms.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/myInfo",
  exact: true,
  render: props => _react.default.createElement(_myInfo.default, props)
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/news",
  exact: true,
  render: props => _react.default.createElement(_news.default, props)
}));

exports.default = _default;