import React from 'react';
import ReactDom from 'react-dom';
import { createStore , combineReducers } from 'redux';
import { Provider , connect} from 'react-redux';

import fetchData from '../utils/fetchData';

@connect(
    (state) => ({
        Home:state.home
    }),
    (dispatch) => ({
        setList: (list) => dispatch({type:"HOME_LIST",data:list}),
        addApi:(p) => dispatch({type:"APP_ADDAPI",data:p})
    })
)
export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    static getInitialProps(props){

        let p = fetchData({
            url:"http://localhost:3001/home/getList",
            method: 'POST'
        }).then(res => {
            props.setList(res);
        })
        props.addApi(p);
    }
    UNSAFE_componentWillMount(){
        // 服务端请求
        //if (global.__SERVER__) {
            Home.getInitialProps(this.props)
        //} 
    }
    render(){
        const Home = this.props.Home;
        return (
            <div>
                <div>{Home.title}</div>
                {Home.list.map((item, index) => {
                    return (
                        <div key={index}>{item.title}</div>
                    )
                })}
               <Child /> 
            </div>
        )
    }
}

@connect(
    (state) => ({
        Child:state.child
    }),
    (dispatch) => ({
        setList: (list) => dispatch({type:"Child_LIST",data:list}),
        addApi:(p) => dispatch({type:"APP_ADDAPI",data:p})
    })
)
class Child extends React.Component {
    constructor(props){
        super(props);
    }
    static getInitialProps(props){
        let p = fetchData({
            url:"http://localhost:3001/home/getChild",
            method: 'POST'
        }).then(res => {
            props.setList(res);
        })

        props.addApi(p);
    }
    UNSAFE_componentWillMount(){
        // 服务端请求
        //if (global.__SERVER__) {
            Child.getInitialProps(this.props)
        //} 
    }
    render(){
        const Child = this.props.Child;
        return (
            <div>
                {Child.list.map((item, index) => {
                    return (
                        <div key={index}>{item.title}</div>
                    )
                })}
            </div>
        )
    }
} 


