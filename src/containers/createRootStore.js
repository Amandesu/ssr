import { createStore , combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import rootReduces from "./reduces";

// 如果是服务端渲染要数据脱水
export default (initData) =>{
    const store = createStore(rootReduces, initData || {})
    return store;
}