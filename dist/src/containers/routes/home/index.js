"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _cinema = require("../../reduces/cinema");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fnc = null;
let Home = (_dec = (0, _reactRedux.connect)(state => ({
  homeStore: state.home,
  cityStore: state.city
}), dispatch => ({
  setList: (list, pageNum) => {
    dispatch({
      type: "HOME_SET_LIST",
      data: list,
      pageNum: pageNum + 1
    });
  },
  initList: () => {
    dispatch({
      type: "HOME_INIT_LIST"
    });
  },
  setCityFrom: from => dispatch({
    type: "CITY_FROM",
    from
  }),
  setFilmID: ID => dispatch({
    type: _cinema.SET_FILM_ID,
    ID
  })
})), _dec(_class = class Home extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: []
    };
    const timer = setInterval(() => {
      this.refs.a1 && this.headImgChange();
    }, 2000);
  }

  static getInitialProps(props, pageNum, cityId, type) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.film-ticket.film.list",
      data: {
        cityId: cityId,
        pageNum: pageNum,
        pageSize: 10,
        type: type
      }
    }).then(res => {
      //console.log(res.data.films)
      res.data.films.length && props.setList(res.data.films, pageNum);
    });
  }

  getHeaderImg(cityId) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.cfg.common-banner",
      data: {
        cityId,
        type: 2
      }
    }).then(res => {
      console.log(res);
      /* this.setState({
          imgUrl: 
      }); */
    });
  }

  componentWillMount() {}

  componentDidMount() {
    const {
      cityId
    } = this.props.cityStore.city;
    this.props.initList();
    Home.getInitialProps(this.props, 1, cityId, 1);
    this.getHeaderImg(cityId);
    this.slideLoadingFilm(1);
  }

  componentDidUpdate() {} //Home.getInitialProps(this.props,1,this.props.cityStore.city.cityId);
  //滑动加载电影


  slideLoadingFilm(type) {
    //清楚监听
    fnc && window.removeEventListener('scroll', fnc); //防止监听抖动

    const debounce = (func, wait, immediate) => {
      let timeout;
      return function () {
        let context = this,
            args = arguments;

        let later = function () {
          timeout = null;

          if (!immediate) {
            func.apply(context, args);
          }

          ;
        };

        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
          func.apply(context, args);
        }

        ;
      };
    };

    const fn = () => {
      if (document.documentElement.scrollTop > 400) {
        const {
          cityId
        } = this.props.cityStore.city;
        console.log(this.props.cityStore.city);
        console.log(this.props.homeStore.pageNum);
        Home.getInitialProps(this.props, this.props.homeStore.pageNum, cityId, type);
      }
    };

    fnc = debounce(fn, 1000);
    window.addEventListener('scroll', fnc);
  }

  headImgChange() {
    this.refs.a1.style.zIndex = this.refs.a1.style.zIndex == 1 ? 0 : 1;
    this.refs.a2.style.zIndex = this.refs.a2.style.zIndex == 1 ? 0 : 1;
    this.refs.div1.style.background = this.refs.div1.style.background == 'black' ? 'hsla(0,0%,100%,0)' : 'black';
    this.refs.div2.style.background = this.refs.div2.style.background == 'black' ? 'hsla(0,0%,100%,0)' : 'black';
  }

  changeOnFilm() {
    console.log(this.refs.bottomNav.children);

    if (!this.refs.onFilm.style.color) {
      const {
        cityId
      } = this.props.cityStore.city;
      this.props.initList();
      Home.getInitialProps(this.props, 1, cityId, 1);
    }

    ;
    this.slideLoadingFilm(1);
    this.refs.onFilm.style.color = '#ff5f16';
    this.refs.onFilmLine.style.background = '#ff5f16';
    this.refs.willOnFilm.style.color = '';
    this.refs.willOnFilmLine.style.background = '';
  }

  changeWillOnFilm() {
    if (!this.refs.willOnFilm.style.color) {
      const {
        cityId
      } = this.props.cityStore.city;
      this.props.initList();
      Home.getInitialProps(this.props, 1, cityId, 2);
      console.log(2);
    }

    this.slideLoadingFilm(2);
    this.refs.onFilm.style.color = '';
    this.refs.onFilmLine.style.background = '';
    this.refs.willOnFilm.style.color = '#ff5f16';
    this.refs.willOnFilmLine.style.background = '#ff5f16';
  }

  renderFilmList() {
    console.log(this.props.homeStore.list);
    const {
      list
    } = this.props.homeStore;
    return list.map(item => _react.default.createElement("li", {
      onClick: () => {
        //this.props.setFilmID(item.filmId);
        this.props.history.push({
          pathname: '/filmsDetail',
          state: {
            filmId: item.filmId
          }
        });
      },
      key: item.filmId,
      style: style.filmItem
    }, _react.default.createElement("div", {
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
        fontSize: '13px',
        color: '#797d82'
      }
    }, _react.default.createElement("div", {
      style: {
        fontSize: '16px',
        color: '#191a1b'
      }
    }, item.name), item.grade ? _react.default.createElement("div", null, _react.default.createElement("span", null, "\u89C2\u4F17\u8BC4\u5206 "), _react.default.createElement("span", {
      style: {
        color: '#ffb232'
      }
    }, item.grade)) : _react.default.createElement("div", {
      style: {
        height: '17px'
      }
    }), _react.default.createElement("div", null, "\u4E3B\u6F14:", item.actors && item.actors.map(actor => _react.default.createElement("p", {
      key: Math.random() * 1000,
      style: {
        display: 'inline'
      }
    }, actor.name, "  "))), _react.default.createElement("div", null, item.nation, " | ", item.runtime, "\u5206\u949F")), _react.default.createElement("div", {
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
    const cityStore = this.props.cityStore; //console.log(cityStore.city.cityId);

    return _react.default.createElement("div", null, _react.default.createElement("div", {
      style: style.cityFixed,
      onClick: () => {
        this.props.setCityFrom(true);
        this.props.history.push("/city");
      }
    }, cityStore.city.name), _react.default.createElement("div", {
      style: style.billBoards
    }, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: '100%'
      }
    }, _react.default.createElement("a", {
      href: "#",
      ref: "a1",
      style: {
        zIndex: 1,
        position: 'absolute',
        width: '100%'
      }
    }, _react.default.createElement("img", {
      src: "https://static.maizuo.com/v5/upload/2fd9cd71b8b73608d28d38435f45ed48.jpg?x-oss-process=image/quality,Q_70",
      style: {
        width: '100%'
      }
    })), _react.default.createElement("a", {
      href: "#",
      ref: "a2",
      style: {
        zIndex: 0,
        position: 'absolute',
        width: '100%'
      }
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
      ref: "div1",
      style: {
        width: '10px',
        height: '5px',
        border: '1px solid black',
        background: 'black',
        opacity: 1,
        margin: '0 3px',
        zIndex: 10
      }
    }), _react.default.createElement("div", {
      ref: "div2",
      style: {
        width: '10px',
        height: '5px',
        border: '1px solid black',
        background: 'hsla(0,0%,100%,0)',
        opacity: 1,
        margin: '0 3px',
        zIndex: 10
      }
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
      ref: "onFilm",
      onClick: this.changeOnFilm.bind(this),
      style: {
        color: '#ff5f16',
        textAlign: 'center',
        flex: 1,
        cursor: 'pointer'
      }
    }, _react.default.createElement("span", null, "\u6B63\u5728\u70ED\u6620")), _react.default.createElement("div", {
      ref: "willOnFilm",
      onClick: this.changeWillOnFilm.bind(this),
      style: {
        textAlign: 'center',
        flex: 1,
        cursor: 'pointer'
      }
    }, _react.default.createElement("span", null, "\u5373\u5C06\u4E0A\u6620"))), _react.default.createElement("div", {
      style: {
        height: '1px',
        display: 'flex',
        justifyContent: 'space-around'
      }
    }, _react.default.createElement("div", {
      ref: "onFilmLine",
      style: {
        width: '64px',
        height: '1px',
        background: '#ff5f16'
      }
    }), _react.default.createElement("div", {
      ref: "willOnFilmLine",
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
    }, this.renderFilmList()))), _react.default.createElement("div", {
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
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEz/YBb/Xxf/Xxb/Xxb/Yhf/////Xxf/aBf/f3//Xxb/Xxb/ZjP/Xxf/Xxf/YRf/Xxb/Xxb/YRf/Xxb/Xxb/Xxb/Xxb/YRb/Zhn/YBf/Xxf/YBb/Xxf/YBf/ZBf/YBb/YBj/Xxn/Xxb/Xxb/Zh7/Xxb/YRb/Xxb/Xxb/Xxb/Zxz/bST/Xxb/Xxf/Xxb/Xxf/axr/Zhn/Yxb/YBf/YBb/Xxb/Xxb/Xxb/fyr/Xxb/YRj/Xxb/ZiL/Xxb/Xhb/YBb/Xxb/Xxb/Xxb/YBv/Xxb/Xxb/Xxb/YBb/YBb/Xxb/Yhr/Xxb/YBf/Yh3/YBb/XxbRpm7XAAAAT3RSTlMAZ25Q7EEBsRYChvoF3SBM/X1W88DF9nEKd7qijk0hv0oz05UZZlmy5swbDuFA62MTFBek777uWwb5P+oP4vK05baoJcuz2uvfezHxrxpasU+NwAAAAeZJREFUOMuVVVd74kAMHHBZG2JimjEthGJagNxBCCXlei/z///NPTiJ18Y523rbWX0raVYaASFzleFkNj1MZ5Oh4uJ1M8fCYWCOGJuveF4OSLve7PZH+1G/26zb5OAyzvGiR1reWkLWnkX2Lk48jypX+bMIeJZfUT1GwFyR4iom1r1gMRf2JAvxJZgFUvZdFnkdnErlTbkUHK9ZXAYVqSwEV+dVktXzAChQfamtR6G/XLxV2d61qb4JchDsPfPJO6miClsAWqwE0NWKPr/mgHkp7wY7ADpsSFieAxMA/tKS+dS4MGA8UJP5tTgGAEFPZkev8XZ7w5ougx4FANexjRCThiApIpjtuIDCepT2uTaPQnUqwJDNJ5YqDS0UFbrWqDxx1uQQmLDrM6+SrMlxjRpJ1f+LLifAjH0AKFXZ6jxQSK6Ci06L1RIA9DkDphwBQJltwLhhkOWctwbQZhkARpwCB+4BYMMdgK1Ep8YtgB03ALDn4eTVP/95NUOuGRjIwGuG33Ide53YA2vbcVN2Vs6vdxzXr4vYfs0wBcmzdf88W0CPwkw3sVl0IFFdjhHN0lNpVhYlBJYq72L09Rt//fgZr9qhzvIsfyl8zX9K3gWPj5+//P5O8kO6DWMqH9+/Oy0j7d5KsH/ddGZU6YjB5wAAAABJRU5ErkJggg=="
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px',
        color: '#ff5f16'
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
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEx5fYN6hIR5foKZmZl/f/95fYJ5fYJ5fYJ5fYJ5foJ8goJ7foN5fYJ/f5F6foJ5fYJ5fYJ7f4N6foKNjY16foJ9fYZ5fYJ5fYJ6fYJ5fYJ6fYR/f4h5fYN6f4R5fYJ9fYZ5fYJ5fYJ6foJ5fYN/f4Z5fYV6foJ5fYJ5fYN/f4x7f4N5fYKRkZF5fYJ/f5l5fYN5f4J5fYJ9fYJ6foJ5fYJ5foJ5fYJ5foJ5fYJ5hYX///97fYN5foJ5fYJ6fYR8goKHh4d6fYR6fYKLi4t5fYJ7fYN5fYJ8f4J5fYJ6f4J6fYOIiIh5fYJjB2qDAAAATXRSTlMAfBmyBQLz/ub7rCVfpg57+cs+iQnENdz0mLdRHIo43jnf7cB2JD13/bMURKQH+ArUVPEzvL1v78rDFQFyxvdNJxFHnAuZdOdKzF6lDxbVfRkAAAEcSURBVDjL7dLXbsJAFATQcV9jg43pvff03ntP5v9/Jw9gAgHb5AFFijKve6S9u3eAdcVTBEMjFG8sJYOR6TsA4BluWw6/Vu65/S4Ahe3oGXtUAAjK0VSmAECu8nTyn66farFcdv48m4tpS6lD5q9n4PmFSzrLaNU0iuT9rS+7l2TMMKuLNFFjBU9XzD/enanb+0cn5PMLKqwlFmicSRWwitM2H0sPgPrK9+/Upm4BAG5Sp3vm1s7G7iYAwNL5Nk87Ou3lv2RT78xSNcl40I+OJ5vSFBuJIPrRYOqLjgyzHryoummMfDoUlMKWKlEMJ3TAlhZGtRYHE8pmObwr5SZ9WorqVcmnhegOFkgAh5l0NE1nDvBnwxXzM/rL+QQoFmWj/JD7rwAAAABJRU5ErkJggg=="
    }), _react.default.createElement("div", {
      style: {
        width: '24px',
        fontSize: '12px'
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

}) || _class);
exports.default = Home;
let style = {
  cityFixed: {
    color: '#fff',
    fontSize: '13px',
    background: 'rgba(0,0,0,.2)',
    height: '30px',
    width: '52px',
    lineHeight: '30px',
    borderRadius: '15px',
    padding: '0 5px',
    marginTop: '18px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center'
  },
  billBoards: {
    width: '100%',
    height: '56vw',
    position: 'relative'
  },
  headImg: {
    zIndex: 0,
    position: 'absolute',
    width: '100%'
  },
  tabsBarWrapper: {
    width: '100%',
    background: '#fff'
  },
  filmItem: {
    padding: '15px 15px 15px 0',
    height: '94px',
    position: 'relative',
    display: 'list-item'
  }
};