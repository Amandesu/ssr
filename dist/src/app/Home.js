"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../utils/fetchData"));

var _dec, _class, _dec2, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Home = (_dec2 = (0, _reactRedux.connect)(state => ({
  Home: state.home
}), dispatch => ({
  setList: list => dispatch({
    type: "HOME_LIST",
    data: list
  }),
  addApi: p => dispatch({
    type: "APP_ADDAPI",
    data: p
  })
})), _dec2(_class2 = class Home extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps(props) {
    let p = (0, _fetchData.default)({
      url: "http://localhost:3001/home/getList",
      method: 'POST'
    }).then(res => {
      props.setList(res);
    });
    props.addApi(p);
  }

  UNSAFE_componentWillMount() {
    // 服务端请求
    //if (global.__SERVER__) {
    Home.getInitialProps(this.props); //} 
  }

  render() {
    const Home = this.props.Home;
    return _react.default.createElement("div", null, _react.default.createElement("div", null, Home.title), Home.list.map((item, index) => {
      return _react.default.createElement("div", {
        key: index
      }, item.title);
    }), _react.default.createElement(Child, null));
  }

}) || _class2);
exports.default = Home;
let Child = (_dec = (0, _reactRedux.connect)(state => ({
  Child: state.child
}), dispatch => ({
  setList: list => dispatch({
    type: "Child_LIST",
    data: list
  }),
  addApi: p => dispatch({
    type: "APP_ADDAPI",
    data: p
  })
})), _dec(_class = class Child extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps(props) {
    let p = (0, _fetchData.default)({
      url: "http://localhost:3001/home/getChild",
      method: 'POST'
    }).then(res => {
      props.setList(res);
    });
    props.addApi(p);
  }

  UNSAFE_componentWillMount() {
    // 服务端请求
    //if (global.__SERVER__) {
    Child.getInitialProps(this.props); //} 
  }

  render() {
    const Child = this.props.Child;
    return _react.default.createElement("div", null, Child.list.map((item, index) => {
      return _react.default.createElement("div", {
        key: index
      }, item.title);
    }));
  }

}) || _class);