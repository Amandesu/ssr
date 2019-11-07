// 首页面对应的reduce
import { handleActions } from 'redux-actions';
const prefix = "HOME"

const SET_LIST = `${prefix}_SET_LIST`;


export default handleActions(
    {
        [SET_LIST]: (state, action )=> {
            return {...state, list:action.data};
        }
    },
    {
        title:"home",
        list:[]
    }
)