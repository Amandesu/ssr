// 城市页面对应的reduce
import { handleActions } from 'redux-actions';
import { dispatch } from 'rxjs/internal/observable/range';
const prefix = "CITY"

const SET_LIST = `${prefix}_SET_LIST`;
const CHANGE_DATA = `${prefix}_CHANGE_DATA`;
const CHANGE_CITY = `${prefix}_CHANGE_CITY`;
const CITY_FROM = `${prefix}_FROM`;


export default handleActions(
    {
        [SET_LIST]: (state, action )=> {
            return {...state, list:action.data};
        },
        [CHANGE_DATA]:(state, action={}) => {
            return {...state, ...action.data};
        },
        [CHANGE_CITY]:(state, action={}) => {
            return {...state, city: action.city};
        },
        [CITY_FROM]:(state,action) =>{
            return {...state,from:action.from}
        }
    },
    {
        title:"city",
        city:{
            cityId: 110100,
            isHot: 1   ,     
            name: "北京",
        },
        //hotCity:"" from: 城市选择ture跳转首页 false跳转cinema
        cities: [],
        hotCitys:[],
        list:[],
        from: true
    }
)
export const changeData = dispatch => (data) =>dispatch({type:CHANGE_DATA, data})

