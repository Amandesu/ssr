"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _city = _interopRequireDefault(require("./city"));

var _home = _interopRequireDefault(require("./home"));

var _cinema = _interopRequireDefault(require("./cinema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  home: _home.default,
  city: _city.default,
  cinema: _cinema.default
});
/* "app":handleActions(
    {
        ["APP_ADDAPI"]: (state, action )=> {
            return {...state, queue:state.queue.concat(action.data)};
        }
    },
    {
        title:"app",
        queue:[]
    }
   
) */


exports.default = _default;