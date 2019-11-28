import { createStore , combineReducers } from 'redux';
import city from "./city";
import home from "./home";
import cinema from "./cinema";


export default combineReducers({
    home,
    city,
    cinema
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