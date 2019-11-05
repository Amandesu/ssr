import { createStore , combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
const rootReduces = combineReducers({
    "app":handleActions(
        {
            ["APP_ADDAPI"]: (state, action )=> {
                return {...state, queue:state.queue.concat(action.data)};
            }
        },
        {
            title:"app",
            queue:[]
        }
       
    ),
    "home":handleActions(
        {
            ["HOME_LIST"]: (state, action )=> {
                return {...state, list:action.data};
            }
        },
        {
            title:"home",
            list:[]
        }
       
    ),
    "child":handleActions(
        {
            ["Child_LIST"]: (state, action )=> {
                return {...state, list:action.data};
            }
        },
        {
            title:"child",
            list:[]
        }
       
    )
})
export default () =>{
    const store = createStore(rootReduces)
    return store;
}