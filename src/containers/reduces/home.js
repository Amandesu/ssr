// 首页面对应的reduce
import { handleActions } from 'redux-actions';
const prefix = "HOME"

const SET_LIST = `${prefix}_SET_LIST`;
const INIT_LIST = `${prefix}_INIT_LIST`;


export default handleActions(
    {
        [SET_LIST]: (state, action )=> {
            return {...state, list: state.list.concat(action.data), pageNum: action.pageNum};
        },
        [INIT_LIST]: (state, action )=> {
            return {...state, list:[], pageNum:1 };
        }
    },
    {
        title:"home",
        list:[],
        pageNum:1,
    }
)