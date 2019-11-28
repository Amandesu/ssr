"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Search extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: []
    };
    Search.getInitialProps(this.props, this.props.cityId, this);
  }

  static getInitialProps(props, cityId, that) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.film-ticket.cinema.recommend",
      data: {
        cityId: cityId
      }
    }).then(res => {
      that.setState({
        cinemas: res.data.cinemas
      });
    }); //props.setList(res.data.cinemas);
  }

  render() {
    let cinemas = [...this.state.cinemas];
    cinemas.splice(5);
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: '49px',
        padding: '9.5px 15px',
        boxSizing: 'border-box'
      }
    }, _react.default.createElement("div", {
      style: {
        display: 'flex',
        background: '#f4f4f4'
      }
    }, _react.default.createElement("div", {
      style: {
        fontSize: '12px',
        color: '#2c3e50',
        marginLeft: '30px',
        lineHeight: '30px',
        opacity: 0.5,
        flex: 1
      }
    }, "\u8F93\u5165\u5F71\u57CE\u540D\u79F0"), _react.default.createElement("div", {
      onClick: () => {
        this.props.history.push('/cinema');
      },
      style: {
        width: '43px',
        fontSize: '14px',
        lineHeight: '30px',
        color: '#191a1b'
      }
    }, "\u53D6\u6D88"))), _react.default.createElement("div", {
      style: {
        height: '13px',
        margin: '18px 15px',
        fontSize: '13px',
        color: '#bdc0c5'
      }
    }, "\u79BB\u4F60\u6700\u8FD1"), _react.default.createElement("ul", {
      style: {
        height: '80px',
        margin: '0 15px',
        display: 'flex',
        fontSize: '13px',
        flexWrap: 'wrap'
      }
    }, cinemas.map(cinema => {
      return _react.default.createElement("li", {
        key: cinema.cinemaId,
        style: {
          height: '40px',
          padding: '0 10px 10px 0',
          boxSizing: 'border-box'
        }
      }, _react.default.createElement("div", {
        style: {
          padding: "8px 12px"
        }
      }, cinema.name));
    })));
  }

}

var _default = (0, _reactRedux.connect)(state => ({
  cityId: state.city.city.cityId
}), null)(Search);

exports.default = _default;