"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Home = (_dec = (0, _reactRedux.connect)(state => ({
  homeStore: state.home,
  cityStore: state.city
}), dispatch => ({
  setList: list => dispatch({
    type: "HOME_SET_LIST",
    data: list
  })
})), _dec(_class = class Home extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps(props) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.film-ticket.film.list",
      data: {
        cityId: 110100,
        pageNum: 1,
        pageSize: 10,
        type: 1
      }
    }).then(res => {
      props.setList(res.data.films);
    });
  }

  componentWillMount() {}

  componentDidMount() {
    Home.getInitialProps(this.props);
  }

  renderFilmList() {
    console.log(this.props.homeStore.list);
    const {
      list
    } = this.props.homeStore;
    return list.map(item => _react.default.createElement("li", {
      key: Math.random() * 1000,
      style: style.filmItem
    }, _react.default.createElement("a", {
      href: "",
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, _react.default.createElement("div", {
      style: {
        width: '66px',
        height: '94px',
        background: 'rgb(249, 249, 249)',
        float: 'left'
      }
    }, _react.default.createElement("div", {
      style: {
        width: '66px',
        height: '94px',
        background: 'rgb(249, 249, 249)',
        opacity: '1'
      }
    }, _react.default.createElement("img", {
      src: item.poster,
      style: {
        width: '100%'
      }
    }))), _react.default.createElement("div", {
      style: {
        height: '94px',
        marginLeft: '8px',
        flex: 1,
        flexDirection: 'column',
        fontSize: '13px'
      }
    }, _react.default.createElement("div", {
      style: {
        fontSize: '16px'
      }
    }, item.name), _react.default.createElement("div", null, _react.default.createElement("span", null, "\u89C2\u4F17\u8BC4\u5206"), _react.default.createElement("span", null, item.grade)), _react.default.createElement("div", null, "\u4E3B\u6F14:", item.actors.map(actor => _react.default.createElement("p", {
      key: Math.random() * 1000,
      style: {
        display: 'inline'
      }
    }, actor.name, "  "))), _react.default.createElement("div", null, item.nation, " | ", item.runtime, "\u5206\u949F")), _react.default.createElement("a", {
      href: "#",
      style: {
        width: '50px',
        height: '25px',
        lineHeight: '25px',
        color: '#ff5f16',
        fontSize: '13px',
        textAlign: 'center',
        border: '1px solid #ff5f16',
        borderRadius: '2px'
      }
    }, "\u8D2D\u7968"))));
  }

  render() {
    const cityStore = this.props.cityStore;
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      style: style.cityFixed
    }, _react.default.createElement("span", null, cityStore.city.name)), _react.default.createElement("div", {
      style: style.billBoards
    }, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'pink'
      }
    }, _react.default.createElement("a", {
      href: "#",
      style: {
        zIndex: 0
      }
    }, _react.default.createElement("img", {
      src: "https://static.maizuo.com/v5/upload/2fd9cd71b8b73608d28d38435f45ed48.jpg?x-oss-process=image/quality,Q_70",
      style: {
        width: '100%'
      }
    })), _react.default.createElement("a", {
      href: "#"
    }, _react.default.createElement("img", {
      src: "https://static.maizuo.com/v5/upload/b43a16925b3c56107bec4b866a2623ca.jpg?x-oss-process=image/quality,Q_70",
      style: {
        width: '100%'
      }
    }))), _react.default.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '10px',
        right: '12px',
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      style: style.mintSwipeIndicators
    }), _react.default.createElement("div", {
      style: style.mintSwipeIndicators
    }), _react.default.createElement("div", {
      style: style.mintSwipeIndicators
    }), _react.default.createElement("div", {
      style: style.mintSwipeIndicators
    }))), _react.default.createElement("div", {
      style: style.tabsBarWrapper
    }, _react.default.createElement("div", {
      style: {
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, _react.default.createElement("div", {
      style: {
        color: '#ff5f16',
        textAlign: 'center',
        flex: 1
      }
    }, _react.default.createElement("span", null, "\u6B63\u5728\u70ED\u6620")), _react.default.createElement("div", {
      style: {
        textAlign: 'center',
        flex: 1
      }
    }, _react.default.createElement("span", null, "\u5373\u5C06\u4E0A\u6620"))), _react.default.createElement("div", {
      style: {
        height: '1px',
        display: 'flex',
        justifyContent: 'space-around'
      }
    }, _react.default.createElement("div", {
      style: {
        width: '64px',
        height: '1px',
        background: '#ff5f16'
      }
    }), _react.default.createElement("div", {
      style: {
        width: '64px',
        height: '1px'
      }
    }))), _react.default.createElement("div", {
      style: {
        borderSizing: 'border-box'
      }
    }, _react.default.createElement("div", null, _react.default.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        marginLeft: '15px',
        display: 'block'
      }
    }, this.renderFilmList()))));
  }

}) || _class);
exports.default = Home;
const style = {
  cityFixed: {
    color: '#fff',
    fontSize: '13px',
    background: 'rgba(0,0,0,.2)',
    height: '30px',
    width: '52px',
    borderRadius: '15px',
    padding: '0 5px',
    marginTop: '18px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '10'
  },
  billBoards: {
    width: '100%',
    height: '56vw',
    position: 'relative'
  },
  mintSwipeIndicators: {
    width: '5px',
    height: '5px',
    border: '1px solid black',
    background: 'hsla(0,0%,100%,0)',
    opacity: 1,
    margin: '0 3px'
  },
  tabsBarWrapper: {
    width: '100%',
    background: '#fff'
  },
  filmItem: {
    padding: '15px 15px 15px 0',
    height: '94px',
    position: 'relative',
    dispalay: 'list-item'
  }
};