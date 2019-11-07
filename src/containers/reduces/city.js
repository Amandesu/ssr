// 城市页面对应的reduce
import { handleActions } from 'redux-actions';
import { dispatch } from 'rxjs/internal/observable/range';
const prefix = "CITY"

const SET_LIST = `${prefix}_SET_LIST`;
const CHANGE_DATA = `${prefix}_CHANGE_DATA`;


export default handleActions(
    {
        [SET_LIST]: (state, action )=> {
            return {...state, list:action.data};
        },
        [CHANGE_DATA]:(state, action={}) => {
            return {...state, ...action.data};
        }
    },
    {
        title:"city",
        cities: [],
        hotCitys:[],
        list:[]
    }
)
export const changeData = dispatch => (data) =>dispatch({type:CHANGE_DATA, data})