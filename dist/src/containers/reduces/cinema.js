"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SET_FILM_CONTENT = exports.SET_FILM_ID = exports.SET_NUM = exports.SET_FILM_DATES = exports.GET_SET_FILMS = exports.GET_SCHEDULES = exports.CHANGE_CINEMA = exports.CINEMA_INIT_LIST = exports.CINEMA_SET_LIST = void 0;
const CINEMA_SET_LIST = 'cinema_set_list';
exports.CINEMA_SET_LIST = CINEMA_SET_LIST;
const CINEMA_INIT_LIST = 'cinema_init_list';
exports.CINEMA_INIT_LIST = CINEMA_INIT_LIST;
const CHANGE_CINEMA = 'change_cinema';
exports.CHANGE_CINEMA = CHANGE_CINEMA;
const GET_SCHEDULES = 'get_schedules';
exports.GET_SCHEDULES = GET_SCHEDULES;
const GET_SET_FILMS = 'get_set_films';
exports.GET_SET_FILMS = GET_SET_FILMS;
const SET_FILM_DATES = 'set_film_dates';
exports.SET_FILM_DATES = SET_FILM_DATES;
const SET_NUM = 'set_num';
exports.SET_NUM = SET_NUM;
const SET_FILM_ID = 'set_film_id';
exports.SET_FILM_ID = SET_FILM_ID;
const SET_FILM_CONTENT = 'set_film_content';
exports.SET_FILM_CONTENT = SET_FILM_CONTENT;
const defaultState = {
  cinema: [],
  cinemas: [],
  allCinemas: [],
  schedules: [],
  films: [],
  filmDates: [],
  num: 0,
  filmContent: {}
};

var _default = (state = defaultState, action) => {
  switch (action.type) {
    case CINEMA_SET_LIST:
      return { ...state,
        cinemas: action.cinemas
      };

    case CINEMA_INIT_LIST:
      return { ...state,
        cinemas: action.cinemas,
        allCinemas: action.cinemas
      };

    case CHANGE_CINEMA:
      return { ...state,
        cinema: action.cinema
      };

    case GET_SCHEDULES:
      return { ...state,
        schedules: action.schedules
      };

    case GET_SET_FILMS:
      return { ...state,
        films: action.films,
        filmDates: action.films[0].showDate
      };

    case SET_FILM_DATES:
      return { ...state,
        filmDates: action.filmDates
      };

    case SET_NUM:
      return { ...state,
        num: action.num
      };

    case SET_FILM_CONTENT:
      return { ...state,
        filmContent: action.content
      };

    default:
      return state;
  }
};

exports.default = _default;