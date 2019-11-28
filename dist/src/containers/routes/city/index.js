"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

var _city = require("../../reduces/city");

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let City = (_dec = (0, _reactRedux.connect)(state => ({
  cityStore: state.city
}), dispatch => ({
  changeData: (0, _city.changeData)(dispatch),
  changeCity: city => {
    dispatch({
      type: "CITY_CHANGE_CITY",
      city
    });
  }
})), _dec(_class = (_temp = class City extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderHotCity", () => {
      const cityStore = this.props.cityStore;
      let hotCitys = cityStore.hotCitys;
      let splitArr = [],
          temp = [];
      hotCitys.forEach(item => {
        if (temp.length >= 3) {
          splitArr.push(temp);
          temp = [];
        }

        temp.push(item);
      });
      temp.length && splitArr.push(temp);
      return _react.default.createElement("div", null, splitArr.map(hotCitys => {
        return _react.default.createElement("div", {
          key: hotCitys.cityId,
          style: {
            height: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
            display: "flex"
          }
        }, hotCitys.map(city => {
          return _react.default.createElement("div", {
            key: city.cityId,
            style: {
              width: 100,
              marginHorizontal: 10,
              backgroundColor: "#f4f4f4",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            },
            onClick: () => {
              this.props.changeCity(city);
              cityStore.from ? this.props.history.push("/") : this.props.history.push("/cinema"); //console.log(this.props)
            }
          }, _react.default.createElement("span", {
            style: {
              color: "#191a1b",
              fontSize: 14
            }
          }, city.name));
        }));
      }));
    });

    this.state = {
      text: ""
    };
  }

  static getInitialProps(props) {
    return (0, _fetchData.default)({
      url: "mall.film-ticket.city.list",
      method: "GET"
    }).then(res => {
      return res;
    });
  }

  componentDidMount() {
    console.log(this.props);
    City.getInitialProps(this.props).then(response => {
      let cities = response.data.cities;
      let arrayList = Array(26).fill(0).map(() => []);
      let hotCitys = [];
      cities.forEach(city => {
        if (["北京", "上海", "广州", "深圳"].indexOf(city.name) > -1) {
          hotCitys.push(city);
        } // 城市列表


        let c = city.pinyin.charCodeAt(0) - 97;
        arrayList[c].push(city);
      });
      console.log(arrayList);
      this.props.changeData({
        cities: arrayList,
        hotCitys
      });
    }).catch(err => {
      console.log(err);
    });
  }

  renderCities() {
    const {
      state,
      props
    } = this;
    const cityStore = props.cityStore;
    return _react.default.createElement("div", {
      style: styles.list
    }, cityStore.cities.map((_, index) => {
      let sublist = cityStore.cities[index];
      return sublist.length ? _react.default.createElement("div", {
        style: styles.item
      }, _react.default.createElement("div", {
        style: styles.title
      }, _react.default.createElement("span", null, String.fromCharCode(index + 65))), _react.default.createElement("div", {
        style: styles.sublist
      }, sublist.map(city => {
        return _react.default.createElement("div", {
          key: city.cityId
        }, _react.default.createElement("div", {
          style: styles.subtitle,
          onClick: () => {
            this.props.changeCity(city);
            cityStore.from ? this.props.history.push("/") : this.props.history.push("/cinema");
          }
        }, _react.default.createElement("span", {
          style: {
            color: "#191a1b",
            fontSize: 14
          }
        }, city.name)));
      }))) : null;
    }));
  }

  render() {
    const {
      state,
      props
    } = this;
    return _react.default.createElement("div", {
      style: styles.container
    }, _react.default.createElement("div", {
      style: styles.header
    }, _react.default.createElement("div", {
      style: {
        flex: 1.5,
        alignItems: "center",
        marginLeft: 10,
        display: "flex"
      }
    }, _react.default.createElement("img", {
      onClick: () => {
        props.cityStore.from ? props.history.push("/") : props.history.push("/cinema");
      },
      src: require("../../images/delete.png"),
      style: {
        width: 20,
        height: 20
      }
    })), _react.default.createElement("div", {
      style: {
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }
    }, _react.default.createElement("span", {
      style: {
        fontSize: 17
      }
    }, "\u5F53\u524D\u57CE\u5E02")), _react.default.createElement("div", {
      style: {
        flex: 1.5
      }
    })), _react.default.createElement("div", {
      style: styles.inputContainer
    }, _react.default.createElement("div", {
      style: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
      }
    }, _react.default.createElement("img", {
      src: require("../../images/search.png"),
      style: {
        width: 20,
        height: 20,
        marginLeft: 10
      }
    }), _react.default.createElement("input", {
      style: {
        height: 20,
        flex: 1,
        paddingVertical: 0
      },
      value: state.span,
      placeholder: "\u8BF7\u8F93\u5165\u57CE\u5E02\u540D\u6216\u62FC\u97F3",
      onChange: text => {
        this.setState({
          text
        });
      }
    }))), _react.default.createElement("div", {
      style: {
        overflowY: "auto",
        flex: 1
      }
    }, _react.default.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, _react.default.createElement("div", {
      style: styles.hotCity
    }, _react.default.createElement("div", {
      style: {
        height: 20,
        marginBottom: 10,
        display: "flex"
      }
    }, _react.default.createElement("span", {
      style: {
        color: "#797d82",
        fontSize: 13
      }
    }, "\u70ED\u95E8\u57CE\u5E02")), this.renderHotCity()), this.renderCities())));
  }

}, _temp)) || _class);
exports.default = City;
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    height: 44,
    display: "flex"
  },
  inputContainer: {
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    height: 49,
    display: "flex"
  },
  hotCity: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  list: {
    backgroundColor: "#fff",
    flex: "row"
  },
  title: {
    height: 30,
    paddingLeft: 15,
    //boxSize:"bor"
    backgroundColor: "#f4f4f4",
    //justifyContent:"center",
    alignItems: "center",
    display: "flex"
  },
  sublist: {
    paddingLeft: 20,
    width: "100%"
  },
  subtitle: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    display: "flex",
    alignItems: "center"
  }
};