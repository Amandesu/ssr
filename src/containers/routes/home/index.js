import React from 'react';
import ReactDom from 'react-dom';
import { createStore , combineReducers } from 'redux';
import { Provider , connect} from 'react-redux';

import fetchData from '../../../utils/fetchData';

@connect(
    (state) => ({
        Home:state.home
    }),
    (dispatch) => ({
        setList: (list) => dispatch({type:"HOME_LIST",data:list}),
    })
)
export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    static getInitialProps(props){
        fetchData({
            method:"GET",
            url:"mall.film-ticket.film.list",
            data:{
                cityId: 110100,
                pageNum: 1,
                pageSize: 10,
                type: 1
            }
        }).then(res => {
        //    props.setList(res);
        })
    }
    componentWillMount(){
    }
    componentDidMount(){
        Home.getInitialProps(this.props)
    }
    render(){
        const Home = this.props.Home;
        return (
            <div>
                <div>{Home.title}</div>
            </div>
        )
    }
}


