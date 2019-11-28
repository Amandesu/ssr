"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

var _cinema = require("../../reduces/cinema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Cinema extends _react.Component {
  constructor(props) {
    super(props);
    Cinema.getInitialProps(this.props, this.props.cityStore.city.cityId);
  }

  static getInitialProps(props, cityId) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.film-ticket.cinema.list",
      data: {
        cityId: cityId,
        ticketFlag: 1
      }
    }).then(res => {
      //console.log(res.data.cinemas)
      props.initList(res.data.cinemas);
    });
  }

  componentDidMount() {}

  showList(nav, e) {
    let children = [...e.target.parentNode.children];
    let navs = [...nav.parentNode.children];
    children.forEach(item => {
      if (item != e.target) {
        item.style.color = '#2c3e50';
      }
    });
    navs.forEach(item => {
      if (item != nav) {
        item.style.display = 'none';
      }
    });
    e.target.style.color == 'rgb(44, 62, 80)' ? e.target.style.color = '#ff5f16' : e.target.style.color = '#2c3e50';
    nav.style.display == 'none' ? nav.style.display = 'flex' : nav.style.display = 'none';
  }

  renderCinema() {
    const cinemas = this.props.cinemaStore.cinemas;
    return cinemas.map(cinema => {
      return _react.default.createElement("div", {
        onClick: () => {
          this.props.history.push("/cinema/selectFilms");
          this.props.changeCinema(cinema);
        },
        key: cinema.cinemaId,
        style: {
          height: '75px',
          padding: '15px',
          boxSizing: 'border-box'
        }
      }, _react.default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, _react.default.createElement("div", {
        style: {
          height: '45px',
          flex: 1
        }
      }, _react.default.createElement("div", {
        style: {
          height: '22px',
          fontSize: '15px',
          color: '#191a1b'
        }
      }, cinema.name), _react.default.createElement("div", {
        style: {
          height: '18px',
          marginTop: '5px',
          fontSize: '12px',
          color: '#797d82'
        }
      }, cinema.address)), _react.default.createElement("div", {
        style: {
          height: '45px',
          width: '70px'
        }
      }, _react.default.createElement("div", {
        style: {
          height: '22px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#ff5f16'
        }
      }, "\uFFE5", _react.default.createElement("p", {
        style: {
          fontSize: '15px',
          display: 'inline'
        }
      }, cinema.lowPrice / 100), "\u8D77"), _react.default.createElement("div", {
        style: {
          height: '18px',
          marginTop: '5px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#797d82'
        }
      }, "\u672A\u77E5\u8DDD\u79BB"))));
    });
  }

  render() {
    //console.log(this.props.cityStore);
    console.log(this.props.cinemaStore.cinemas);
    const cinemas = this.props.cinemaStore.cinemas;
    const allCinemas = this.props.cinemaStore.allCinemas;
    let districts = [];
    allCinemas.forEach(item => {
      if (districts.indexOf(item.districtName) == -1) {
        districts.push(item.districtName);
      }
    });
    console.log(districts);
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: '93px',
        position: 'fixed',
        background: '#fff'
      }
    }, _react.default.createElement("div", {
      style: {
        height: '44px',
        lineHeight: '44px',
        borderBottom: '1px solid #ededed',
        padding: '0 15px',
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      style: {
        fontSize: '13px',
        flex: 1
      },
      onClick: () => {
        this.props.setCityFrom(false);
        this.props.history.push("/city");
      }
    }, this.props.cityStore.city.name), _react.default.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: '17px',
        flex: 4
      }
    }, "\u5F71\u9662"), _react.default.createElement("div", {
      onClick: () => {
        this.props.history.push("/cinema/search");
      },
      style: {
        flex: 1
      }
    }, _react.default.createElement("img", {
      style: {
        width: '18px',
        height: '18px',
        marginTop: '14px',
        float: 'right'
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
    }))), _react.default.createElement("div", {
      style: {
        height: '47px',
        borderBottom: '1px solid #ededed',
        lineHeight: '49px',
        textAlign: 'center',
        fontSize: '14px',
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      ref: "navLeft",
      onClick: this.showList.bind(this, this.refs.navItemsLeft),
      style: {
        color: '#2c3e50',
        flex: 1
      }
    }, "\u5168\u57CE"), _react.default.createElement("div", {
      ref: "navMid",
      onClick: this.showList.bind(this, this.refs.navItemsMid),
      style: {
        color: '#2c3e50',
        flex: 1
      }
    }, "APP\u8BA2\u7968"), _react.default.createElement("div", {
      ref: "navRight",
      onClick: this.showList.bind(this, this.refs.navItemsRight),
      style: {
        color: '#2c3e50',
        flex: 1
      }
    }, "\u6700\u8FD1\u53BB\u8FC7"))), _react.default.createElement("div", {
      style: {
        height: '93px'
      }
    }), _react.default.createElement("div", null, _react.default.createElement("div", {
      ref: "navItemsLeft",
      style: {
        width: '100%',
        height: '235px',
        padding: '10px 10px 0 10px',
        boxSizing: 'border-box',
        position: 'absolute',
        display: 'none',
        flexWrap: 'wrap',
        background: '#fff'
      }
    }, _react.default.createElement("div", {
      style: {
        height: '45px',
        padding: '0 10px 15px 0',
        boxSizing: 'border-box',
        width: '25%',
        color: '#ff5f16'
      }
    }, _react.default.createElement("div", {
      onClick: e => {
        Cinema.getInitialProps(this.props, this.props.cityStore.city.cityId);
        this.refs.navLeft.textContent = '全城';
        this.refs.navLeft.style.color = '#2c3e50';
        [...e.target.parentNode.parentNode.children].forEach(child => child.style.color = '#2c3e50');
        e.target.parentNode.style.color = '#ff5f16';
        e.target.parentNode.parentNode.style.display = 'none';
      },
      style: {
        height: '30px',
        border: '1px solid #ededed',
        lineHeight: '30px',
        textAlign: 'center',
        fontSize: '12px'
      }
    }, "\u5168\u57CE")), districts.map((item, index) => {
      return _react.default.createElement("div", {
        key: index,
        style: {
          height: '45px',
          padding: '0 10px 15px 0',
          boxSizing: 'border-box',
          width: '25%',
          color: '#2c3e50'
        }
      }, _react.default.createElement("div", {
        onClick: e => {
          console.log(item);
          this.refs.navLeft.textContent = item;
          this.refs.navLeft.style.color = '#2c3e50';
          console.log(e.target.parentNode.parentNode.children);
          [...e.target.parentNode.parentNode.children].forEach(child => child.style.color = '#2c3e50');
          e.target.parentNode.style.color = '#ff5f16';
          e.target.parentNode.parentNode.style.display = 'none';
          let arr = [];
          allCinemas.forEach(cinema => {
            if (cinema.districtName == item) {
              arr.push(cinema);
            }
          });
          console.log(arr);
          this.props.setList(arr);
        },
        style: {
          height: '30px',
          border: '1px solid #ededed',
          lineHeight: '30px',
          textAlign: 'center',
          fontSize: '12px'
        }
      }, item));
    })), _react.default.createElement("div", {
      ref: "navItemsMid",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        position: 'absolute',
        display: 'none',
        flexDirection: 'column',
        background: '#fff'
      }
    }, _react.default.createElement("div", {
      onClick: e => {
        this.refs.navMid.textContent = 'APP订票';
        this.refs.navMid.style.color = '#2c3e50';
        e.target.parentNode.style.display = 'none';
        [...e.target.parentNode.children].forEach(child => {
          child.style.color = '#797d82';
        });
        e.target.style.color = '#ff5f16';
      },
      style: {
        height: '44px',
        padding: '0 35px',
        lineHeight: '44px',
        borderBottom: '1px solid #ededed',
        fontSize: '13px',
        color: '#ff5f16'
      }
    }, "APP\u8BA2\u7968"), _react.default.createElement("div", {
      onClick: e => {
        this.refs.navMid.textContent = '前台兑换';
        this.refs.navMid.style.color = '#2c3e50';
        e.target.parentNode.style.display = 'none';
        [...e.target.parentNode.children].forEach(child => {
          child.style.color = '#797d82';
        });
        e.target.style.color = '#ff5f16';
      },
      style: {
        height: '44px',
        padding: '0 35px',
        lineHeight: '44px',
        borderBottom: '1px solid #ededed',
        fontSize: '13px',
        color: '#797d82'
      }
    }, "\u524D\u53F0\u5151\u6362")), _react.default.createElement("div", {
      ref: "navItemsRight",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        position: 'absolute',
        display: 'none',
        flexDirection: 'column',
        background: '#fff'
      }
    }, _react.default.createElement("div", {
      onClick: e => {
        this.refs.navRight.textContent = '最近去过';
        this.refs.navRight.style.color = '#2c3e50';
        e.target.parentNode.style.display = 'none';
        [...e.target.parentNode.children].forEach(child => {
          child.style.color = '#797d82';
        });
        e.target.style.color = '#ff5f16';
      },
      style: {
        height: '44px',
        padding: '0 35px',
        lineHeight: '44px',
        borderBottom: '1px solid #ededed',
        fontSize: '13px',
        color: '#ff5f16'
      }
    }, "\u6700\u8FD1\u53BB\u8FC7"), _react.default.createElement("div", {
      onClick: e => {
        this.refs.navRight.textContent = '离我最近';
        this.refs.navRight.style.color = '#2c3e50';
        e.target.parentNode.style.display = 'none';
        [...e.target.parentNode.children].forEach(child => {
          child.style.color = '#797d82';
        });
        e.target.style.color = '#ff5f16';
      },
      style: {
        height: '44px',
        padding: '0 35px',
        lineHeight: '44px',
        borderBottom: '1px solid #ededed',
        fontSize: '13px',
        color: '#797d82'
      }
    }, "\u79BB\u6211\u6700\u8FD1"))), this.renderCinema(), _react.default.createElement("div", {
      ref: "bottomNav",
      style: {
        width: '100%',
        height: '49px',
        position: 'fixed',
        bottom: 0,
        background: '#fff',
        color: '#797d82',
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      style: {
        height: '49px',
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: "/"
    }, _react.default.createElement("img", {
      style: {
        width: '21px',
        height: '29px',
        paddingTop: '8px',
        boxSizing: 'border-box'
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEx5foN6fYR5f4J5fYJ5fYX///95fYN/f4t/f/95fYJ5fYOZmZl5fYJ/f4d8f4J5fYJ6foJ5f4J5fYJ6foJ5fYJ5fYJ5foJ/f5l6foJ6fYN5fYJ6foJ6fYR7g4N5fYJ8f4J9fYJ6fYJ5foJ6hIR6fYJ7foN5foJ5fYJ5fYJ6hIR/f5F5fYJ7f4N5fYJ5foOGhoZ/f4x5hYV5fYJ5fYJ5fYJ7foN6foJ/f6p5fYJ5fYV6fYKIiIh5fYJ5fYJ5foJ5foJ5fYJ5fYJ8goJ5fYJ5fYJ6fIN5fYN5fYN5fIN8goJ6foJ6fYN/f4l5f4J5fYL6aFRvAAAAT3RSTlMAZ25Q7EEBsRYC+oYF3SBM/X1W88D2xXEKd46iuk0hv0oz05UZZlmy5swbDuFA62MTFBek7+5bvgb5P+oP4vK0tuWoJcvf69qz8TF7rxpauYn0+gAAAeZJREFUOMuVVVd74kAMHNzWhpiYYjAthGJagNxBQku53sv8/39zD07itXEOW287q28lzUojIGKeOhhPJ/vJdDxQPbxu1ki4DM0VI+sVz8s+6dQand5wN+x1GjWH7F8mOV50SdtfScjKt8nuxZHnQeNSOYuBZ8qS2iEG5vIUVwmx7gXzuagnWUguwSqQsu8iz+vwVCytS8XweM38IqxIYyG8Oq+QrJyHQIHaS21dCuPl4q3G1qZF7U2Yg2D3mU/eSRWV2QbQZjmErpYM+LX6VKS862wCaLIuYQr7FgD8pS3zqXNuwnygLvNrcwQAgr7MjlHl7faGVUMGfQoAnuuYESZNQVLEMMf1AJW1OO0zfRaHalSBARtPLJXreiQqDL1efuKswQEwZidgXiNZleOaVZJa8BcdjoEpewBQrLDdfKCQXAXnzTYrRQDocQpMOASAEluAecMwyxlvTaDFEgAMOQH23AHAmhsAW4lOnVsAG64BYMf90at//vNqhlwzMJCB1wy/5bnO6mQPrBzXS9lZuaDeUVK/zhP7NcMUnJ6t++fZAroUVrqJzaIDJ9XlENMsI5VmZVFCYKHxLkFfv/LHr5/Jqh3pLN8OlsI35dPpXfD4+Pn77y8k36fbMJb68cO74zLS7q0T9g/dKmZUv7wXgQAAAABJRU5ErkJggg=="
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px'
      }
    }, "\u7535\u5F71"))), _react.default.createElement("div", {
      style: {
        height: '49px',
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: "/cinema"
    }, _react.default.createElement("img", {
      style: {
        width: '21px',
        height: '29px',
        paddingTop: '8px',
        boxSizing: 'border-box'
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEz/YBb/Zh7/Xxb/ZjP/f3//Xxb/Xxb/Xxb/Xxb/YBb/YBv/Xxf/YBj/bST/Xxb/Xxb/Xxb/Yhj/YBb/cRz/YBb/YBj/Xxb/Xxb/Xxf/YBb/ZBv/YRb/YBb/Xxb/Xxb/Yhb/YBb/Xxb/Xxb/Xxf/Yxz/YBn/Xxb/YBf/Xxb/YRb/Zhn/YBf/YBf/YBb/bST/Xxb/Xxb/Xxn/YRj/Zhn/Xxb/Xxb/Xxb/YRj/Xxb/YBb/////Xxf/YBb/aR7/YBn/Yhr/Xxf/YBf/YBb/YBb/cxf/YBj/YBj/YBb/Xxf/Xxb/YRj/ZiL/XxbA9t/yAAAATXRSTlMAfBmyBQLz/ub7rCWmXw57+cs+iQnENdz0mLccUYo43jnfwO12JD39d7NEFKS8bwfU8TNUCvi9yhXD7wHGchFHJ5lNnPcLSnTnpcxeD2lN0mwAAAEcSURBVDjL7dLXcsIwFATQdZVswDa99w7pvfee7P//Th7ABALY5IHJTCb7qjOjK90F1pWEJhkYqSVGUhEMTdcFgITwWmrwtWrP63YAaGyFz9ijBkBSDacqJQBylaeT/3T91LCzmdnzTNY2FlKXzN1NwfNLj3QX0YolCuT9lS87F6QtrMo8daos4/mBudvrE/1gb+uYfHlCmVVnjkYZ14FIYdLmM+UR0N/4+p3GaEYAADfJ013rcGdjfxsAEDH5PkvbJmOLfylGsz1N9Tijy350NNmEJll3ltGPOpNfdCCs2vJF1Swx8OlQUglaqkI5HNM+G0YQNRrsjymbxeCuFJv0aSmsVyWf5sM7mCcBHKVT4TSV3sSfDVfMz+gv5xMwK2WjDeLAxgAAAABJRU5ErkJggg=="
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px',
        color: '#ff5f16'
      }
    }, "\u5F71\u9662"))), _react.default.createElement("div", {
      style: {
        height: '49px',
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: "/news"
    }, _react.default.createElement("img", {
      style: {
        width: '21px',
        height: '29px',
        paddingTop: '8px',
        boxSizing: 'border-box'
      },
      src: "https://mall.s.maizuo.com/mzmovie-icon-news-42x42-gray.png"
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px'
      }
    }, "\u8D44\u8BAF"))), _react.default.createElement("div", {
      style: {
        height: '49px',
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: "/myInfo"
    }, _react.default.createElement("img", {
      style: {
        width: '21px',
        height: '29px',
        paddingTop: '8px',
        boxSizing: 'border-box'
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABuVBMVEVHcEx5fYKqqqp5fYJ/f5R5fYN5hYX///9/f/95fYJ/f59/f5l5fYJ/f4Z5fYJ5foJ5fYJ5fYJ5foJ5fYJ6fYJ5fYJ7foR6fYKRkZF5fYV6f4J6f4J5fYN/f4p5fYJ5f4V6fYJ5foN5foN6fYR5fYN/f797foN9fYJ5fYJ8f4J6foJ/f5F5fYN6foJ/f6p5fYJ7f4N9fYZ5foJ5fYN5fYJ6fYJ/f415fYJ5f4J5fYJ/f4h5fYN5fYJ5fYN5foN5fYN5fYJ6f4J7g4N5fYJ5foKNjY15f4J8f4J7f4N6fYOLi4t7f4N6f4R5fYJ5fYJ5fYN6foJ5fYV5fYN8goJ5f4V/f496foJ6fYR6f4R6foJ6fYJ5foN5fYJ5fYN7foN7f4N/f4x5fYJ6foKZmZl5fYJ5hYV5fYN5fYN5fYJ5fYN5fYN5fYN5fYN6foJ5fYV6foJ6f4J7foN6fYN5fYJ5foJ/f4d5foN6fYR5fYJ5fYN5fYJ6foJ5fYJ5foJ6fYR5fYV6foJ5f4J5fYJ5foJ5fYJ5fYKJiYl6f4R5foJ5foJ5foJ6hIR5fYJ5f4V6fYR6foJ6fYJ6fYJ5fYL3B6qLAAAAknRSTlMA8wP4DIoVAQLvCAriJPmyvd62u9X6VeoHO15ggBj+KNFnaWifBFsz506FDp1/Bss+N5WG/ZgSzFTsHHb21m148GQd8o8JXEo6owtENuH1m8Q/0C8qEIFLMneUY9/YWTwU230F5BehiO7a1M61hz17Yl+O5cggZU3gfPyJx41TQb5Syartvw04rJfKG6IsScDTnLdCNQgAAAHsSURBVBgZpcFldxpBAAXQByzs4hKSkABxd3d317q7u7u79/3ispwUZpeZDz29F//ja83v2M6vn99qK5GR/lzl+OL+AIkXbyr417MF4/U7mtbXYLd2j3R8qv6x+327dtlLxp/w7a728T2jK7C6FeLdBwnsmU+uk4+RYWwxBYvr5B0/BPO9N5G1yghEtXTdhtwMAxB0FfMEFFYZQZ4zzl4oGFtMIe8oT5+FnL7J6AryjrEEcvomN5aQd4gBHXJubryE4ACPQOEpn0NUxINQeMhXEMW5Dwr3+QgiL/dDQaMDohATUEjQBVET01BIswmiTt6AQhc7IerhKBRG2QNRCcd1ZDWcQtb5BmTp4yyByDfFRZgO8/hJZCydYwqmRU75YDHHCEyeHfLK8oWr5OUZmCKcg5XHwXKYOs6UMuPSRT9M5XR4YJNkqAxZ9WUL5dsdyCoLMYkCbpYGYRMspRuFjDBnp2ExPcuwAQktTF4bQc5IjAxrkNInx+htxZ5WL8cmdSg4q9iOnHZWOaEywagPOb4oJ6Dg8bIZgmZ6PZBrYwwWMbZBqrvCFYRF0FXRDQljkC2waeGggULVDPhh4w+wGgUGhjmEAkMcHoBdP4sgUcR+2DT2FVdCorK4rxFWdXRDys06WNXXaJDSapz4V38AuCN1L95kvMoAAAAASUVORK5CYII="
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px'
      }
    }, "\u6211\u7684")))));
  }

}

var _default = (0, _reactRedux.connect)(state => ({
  homeStore: state.home,
  cityStore: state.city,
  cinemaStore: state.cinema
}), dispatch => ({
  initList: cinemas => dispatch({
    type: _cinema.CINEMA_INIT_LIST,
    cinemas
  }),
  setList: cinemas => dispatch({
    type: _cinema.CINEMA_SET_LIST,
    cinemas
  }),
  setCityFrom: from => dispatch({
    type: "CITY_FROM",
    from
  }),
  changeCinema: cinema => dispatch({
    type: _cinema.CHANGE_CINEMA,
    cinema
  })
}))(Cinema);

exports.default = _default;