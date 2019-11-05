import React from 'react';
import ReactDom from 'react-dom';
import { createStore , combineReducers } from 'redux';
import { Provider , connect} from 'react-redux';
import { handleActions } from 'redux-actions';
import Home from './Home';
import fetch from 'node-fetch';


export default class App extends React.Component {
    constructor(props){
        super(props);

    }
    // 服务端获取数据
    render(){
        return (
            <div>
                <Home />
            </div>
        )
    }
}


