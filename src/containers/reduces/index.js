import { createStore , combineReducers } from 'redux';
import city from "./city";
import home from "./home";


export default combineReducers({
    home,
    city
})


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