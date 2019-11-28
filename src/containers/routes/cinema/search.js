import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from '../../../utils/fetchData';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemas: []
        }
        Search.getInitialProps(this.props,this.props.cityId,this);
    }
    static getInitialProps(props,cityId,that){
        fetchData({
            method:"GET",
            url:"mall.film-ticket.cinema.recommend",
            data:{
                cityId: cityId,
            }
        }).then(res =>{
            that.setState({
                cinemas: res.data.cinemas
            })
        })
            //props.setList(res.data.cinemas);
    }

    render() {
        let cinemas = [...this.state.cinemas];
        cinemas.splice(5);
        return (
            <div>
                <div style={{width: '100%',height: '49px',padding: '9.5px 15px',boxSizing: 'border-box'}}>
                    <div style={{display: 'flex',background: '#f4f4f4'}}>
                        <div style={{fontSize: '12px', color: '#2c3e50', marginLeft: '30px', lineHeight:'30px', opacity: 0.5,flex:1}}>输入影城名称</div>
                        <div onClick={() => {this.props.history.push('/cinema')}} style={{width: '43px', fontSize: '14px', lineHeight:'30px', color: '#191a1b'}}>取消</div>
                    </div>
                </div>
                <div style={{height: '13px',margin: '18px 15px',fontSize: '13px',color: '#bdc0c5'}}>
                    离你最近
                </div>
                <ul style={{height: '80px', margin: '0 15px', display: 'flex', fontSize: '13px', flexWrap: 'wrap'}}>
                    {
                        cinemas.map((cinema) => {
                            return (
                                <li key={cinema.cinemaId} style={{height: '40px',padding: '0 10px 10px 0', boxSizing: 'border-box'}}>
                                    <div style={{padding: "8px 12px"}}>{cinema.name}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        cityId: state.city.city.cityId
    }),null
)(Search);