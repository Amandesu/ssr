"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeData = exports.default = void 0;

var _reduxActions = require("redux-actions");

var _range = require("rxjs/internal/observable/range");

// 城市页面对应的reduce
const prefix = "CITY";
const SET_LIST = `${prefix}_SET_LIST`;
const CHANGE_DATA = `${prefix}_CHANGE_DATA`;
const CHANGE_CITY = `${prefix}_CHANGE_CITY`;
const CITY_FROM = `${prefix}_FROM`;

var _default = (0, _reduxActions.handleActions)({
  [SET_LIST]: (state, action) => {
    return { ...state,
      list: action.data
    };
  },
  [CHANGE_DATA]: (state, action = {}) => {
    return { ...state,
      ...action.data
    };
  },
  [CHANGE_CITY]: (state, action = {}) => {
    return { ...state,
      city: action.city
    };
  },
  [CITY_FROM]: (state, action) => {
    return { ...state,
      from: action.from
    };
  }
}, {
  title: "city",
  city: {
    cityId: 110100,
    isHot: 1,
    name: "北京"
  },
  //hotCity:"" from: 城市选择ture跳转首页 false跳转cinema
  cities: [],
  hotCitys: [],
  list: [],
  from: true
});

exports.default = _default;

const changeData = dispatch => data => dispatch({
  type: CHANGE_DATA,
  data
});

exports.changeData = changeData;