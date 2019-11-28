"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _fetchData = _interopRequireDefault(require("../../../utils/fetchData"));

var _cinema = require("../../reduces/cinema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FilmsDetail extends _react.Component {
  constructor(props) {
    super(props);
  }

  getFilmContent(filmId) {
    (0, _fetchData.default)({
      method: "GET",
      url: "mall.film-ticket.film.info",
      data: {
        filmId
      }
    }).then(res => {
      //console.log(res.data);
      this.props.setFilmContent(res.data.film);
    });
  }

  componentDidMount() {
    this.getFilmContent(this.props.cinemaStore.filmId);
  }

  renderActors(actors) {
    return actors.map(actor => {
      return _react.default.createElement("li", {
        key: actor.name,
        style: {
          width: '85px',
          marginRight: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, _react.default.createElement("img", {
        src: actor.avatarAddress,
        style: {
          width: '85px',
          height: '94px'
        }
      }), _react.default.createElement("span", {
        style: {
          height: '28px',
          paddingTop: '10px',
          boxSizing: 'border-box'
        }
      }, actor.name), _react.default.createElement("span", {
        style: {
          height: '18px'
        }
      }, actor.role));
    });
  }

  renderPhotos(photos) {
    return photos.map((photo, index) => {
      return _react.default.createElement("div", {
        key: index,
        style: {
          width: '150px',
          marginRight: '10px'
        }
      }, _react.default.createElement("img", {
        src: photo,
        style: {
          width: '150px'
        }
      }));
    });
  }

  render() {
    console.log(this.props.cinemaStore.filmId);
    console.log(this.props.cinemaStore.filmContent);
    const {
      filmContent
    } = this.props.cinemaStore;
    const timer = new Date(filmContent.premiereAt * 1000);
    return _react.default.createElement("div", {
      style: {
        width: '100%',
        boxSizing: 'border-box',
        color: '#2c3e50'
      }
    }, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: '254px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, _react.default.createElement("img", {
      src: filmContent.poster,
      style: {
        height: '634px',
        width: '100%',
        position: 'absolute',
        transform: 'translateY(-30%)'
      }
    }), _react.default.createElement("div", {
      onClick: () => {
        this.props.history.push('/');
      },
      style: {
        width: '25px',
        height: '25px',
        position: 'absolute',
        top: '7px',
        left: '7px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        opacity: 0.4,
        cursor: 'pointer'
      }
    }, _react.default.createElement("div", {
      style: {
        width: '12px',
        height: '12px',
        borderLeft: '1px solid black',
        borderBottom: '1px solid black',
        transform: 'translate(9px,7px) rotate(45deg)'
      }
    }))), _react.default.createElement("div", {
      style: {
        backgroundColor: '#fff',
        padding: '12px 15px 15px'
      }
    }, _react.default.createElement("div", {
      style: {
        height: '24px',
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      style: {
        flex: 1
      }
    }, filmContent.name, " ", _react.default.createElement("span", {
      style: {
        backgroundColor: '#d2d6dc',
        color: '#fff'
      }
    }, filmContent.filmType ? filmContent.filmType.name : '')), _react.default.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'right',
        color: '#ffb232'
      }
    }, filmContent.grade, "\u5206")), _react.default.createElement("div", {
      style: {
        height: '19px',
        marginTop: '4px',
        fontSize: '13px',
        color: '#797d82'
      }
    }, filmContent.category), _react.default.createElement("div", {
      style: {
        height: '19px',
        marginTop: '4px',
        fontSize: '13px',
        color: '#797d82'
      }
    }, `${timer.getFullYear()}-${timer.getMonth() + 1}-${timer.getDate()}`, "\u4E0A\u6620"), _react.default.createElement("div", {
      style: {
        height: '19px',
        marginTop: '4px',
        fontSize: '13px',
        color: '#797d82'
      }
    }, filmContent.nation, " | ", filmContent.runtime ? filmContent.runtime : '', "\u5206\u949F"), _react.default.createElement("div", {
      style: {
        marginTop: '12px',
        fontSize: '13px',
        color: '#797d82',
        overflow: 'hidden'
      }
    }, filmContent.synopsis)), _react.default.createElement("div", {
      style: {
        height: '52px',
        padding: '15px',
        boxSizing: 'border-box'
      }
    }, "\u6F14\u804C\u4EBA\u5458"), _react.default.createElement("div", {
      style: {
        height: '140px'
      }
    }, _react.default.createElement("ul", {
      style: {
        paddingLeft: '15px',
        display: 'flex',
        listStyle: 'none',
        fontSize: '12px'
      }
    }, filmContent.actors && this.renderActors(filmContent.actors))), _react.default.createElement("div", {
      style: {
        height: '52px',
        padding: '15px',
        boxSizing: 'border-box'
      }
    }, "\u5267\u7167"), _react.default.createElement("div", {
      style: {
        height: '100px',
        paddingLeft: '15px',
        display: 'flex'
      }
    }, filmContent.photos && this.renderPhotos(filmContent.photos)));
  }

}

var _default = (0, _reactRedux.connect)(state => ({
  cinemaStore: state.cinema
}), dispatch => ({
  setFilmContent: content => dispatch({
    type: _cinema.SET_FILM_CONTENT,
    content
  })
}))(FilmsDetail);

exports.default = _default;