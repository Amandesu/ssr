import React,{ Component } from 'react';
import { connect } from 'react-redux';
import fetchData from '../../../utils/fetchData';
import { SET_FILM_CONTENT } from '../../reduces/cinema';

class FilmsDetail extends Component {
    constructor(props) {
        super(props);
    }
    getFilmContent(filmId) {
        fetchData({
            method:"GET",
            url:"mall.film-ticket.film.info",
            data:{
                filmId
            }
        }).then(res => {
            //console.log(res.data);
            this.props.setFilmContent(res.data.film);
        })
    }
    componentDidMount() {
        this.getFilmContent(this.props.location.state.filmId);
    }
    renderActors(actors) {
        return (
            actors.map((actor) => {
                return (
                    <li key={actor.name} style={{width:'85px',marginRight: '10px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <img src={actor.avatarAddress} style={{width: '85px', height: '94px'}} />
                        <span style={{height:'28px',paddingTop: '10px',boxSizing: 'border-box'}}>{actor.name}</span>
                        <span style={{height: '18px'}}>{actor.role}</span>
                    </li>
                )
            })
        )
    }
    renderPhotos(photos) {
        return (
            photos.map((photo,index) => {
                return (
                    <div key={index} style={{width: '150px',marginRight: '10px'}}>
                        <img src={photo} style={{width: '150px'}} />
                    </div>
                )
            })
        )
    }
    render() {
        //console.log(this.props.location.state);
        //console.log(this.props.cinemaStore.filmContent);
        const { filmContent } = this.props.cinemaStore;
        const timer = new Date(filmContent.premiereAt * 1000);
        return (
            <div style={{width: '100%', boxSizing: 'border-box',color: '#2c3e50'}}>               
                <div style={{width: '100%', height: '254px', position: 'relative',overflow: 'hidden'}}>
                    <img src={filmContent.poster} style={{height: '634px',width: '100%', position:'absolute', transform: 'translateY(-30%)'}} />
                    <div 
                        onClick={() => {this.props.history.push('/')}}
                        style={{width: '25px',height: '25px',position: 'absolute',top: '7px', left: '7px',backgroundColor: '#fff',borderRadius: '50%',opacity: 0.4,cursor: 'pointer'}}>
                        <div style={{width: '12px',height: '12px',borderLeft: '1px solid black',borderBottom: '1px solid black',transform: 'translate(9px,7px) rotate(45deg)'}}></div>
                    </div>
                </div>
                <div style={{backgroundColor: '#fff',padding: '12px 15px 15px'}}>
                    <div style={{height: '24px',display: 'flex'}}>
                        <div style={{flex:1}}>{filmContent.name} <span style={{backgroundColor: '#d2d6dc', color: '#fff'}}>{filmContent.filmType ? filmContent.filmType.name : ''}</span></div>
                        <span style={{flex:1,textAlign: 'right',color: '#ffb232'}}>{filmContent.grade}分</span>
                    </div>
                    <div style={{height: '19px',marginTop: '4px',fontSize: '13px',color: '#797d82'}}>{filmContent.category}</div>
                    <div style={{height: '19px',marginTop: '4px',fontSize: '13px',color: '#797d82'}}>{`${timer.getFullYear()}-${timer.getMonth()+1}-${timer.getDate()}`}上映</div>
                    <div style={{height: '19px',marginTop: '4px',fontSize: '13px',color: '#797d82'}}>{filmContent.nation} | {filmContent.runtime? filmContent.runtime : '' }分钟</div>
                    <div style={{marginTop: '12px',fontSize: '13px',color: '#797d82',overflow: 'hidden'}}>{filmContent.synopsis}</div>
                </div>
                <div style={{height: '52px', padding: '15px',boxSizing: 'border-box'}}>
                    演职人员
                </div>
                <div style={{height: '140px'}}>
                    <ul style={{paddingLeft: '15px',display: 'flex',listStyle: 'none',fontSize: '12px'}}>
                        {filmContent.actors && this.renderActors(filmContent.actors)}
                    </ul>
                </div>
                <div style={{height: '52px', padding: '15px',boxSizing: 'border-box'}}>
                    剧照
                </div>
                <div style={{height: '100px',paddingLeft: '15px',display: 'flex'}}>
                    {filmContent.photos && this.renderPhotos(filmContent.photos)}
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => ({
        cinemaStore: state.cinema
    }),
    (dispatch) => ({
        setFilmContent: (content) => dispatch({
            type: SET_FILM_CONTENT,
            content
        })
    })
)(FilmsDetail);