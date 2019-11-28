"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//export const CINEMA_SET_LIST = 'cinema_set_list';
const defaultState = {};

var _default = (state = defaultState, action) => {
  switch (action.type) {
    case CINEMA_SET_LIST:
      return { ...state
      };

    default:
      return state;
  }
};

exports.default = _default;