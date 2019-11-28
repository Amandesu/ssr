import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from '../../../utils/fetchData';
import { CHANGE_CINEMA, GET_SCHEDULES, GET_SET_FILMS, SET_FILM_DATES, SET_NUM } from '../../reduces/cinema';

class SelectFilms extends Component {
    constructor(props) {
        super(props);
        this.getFilmsShowTime = this.getFilmsShowTime.bind(this);
    }
    componentWillUpdate() {
        console.log(123);
    }
    renderServices(services) {
        console.log(services);
        return (
            services && services.map((service,index) => {
                return (
                    <div key={index} style={{height: '18px',padding: '1px 3px', border: '1px solid #ffb232',marginRight: '12px'}}>{service.name}</div>
                )
            })
        )
    }
    static getInitialProps(props,cinemaId){
        fetchData({
            method:"GET",
            url:"mall.film-ticket.cinema.info",
            data:{
                cinemaId
            }
        }).then(res => {
            //console.log(res.data.cinema)
            props.changeCinema(res.data.cinema);
        })
    }
    getFilms(cinemaId,props) {
        return(
            fetchData({
                method:"GET",
                url:"mall.film-ticket.film.cinema-show-film",
                data:{
                    cinemaId
                }
            }).then(res => {
                //console.log(res.data.films)
                props.getSetFilms(res.data.films);
                
            })
        )
    }
    componentDidMount() {
        SelectFilms.getInitialProps(this.props,this.props.cinemaStore.cinema.cinemaId);
        this.getFilms(this.props.cinemaStore.cinema.cinemaId,this.props).then(() => {
            this.getFilmsShowTime(this.props.cinemaStore.films[0],this.props.cinemaStore.cinema.cinemaId,this.props,0);
        });
        //console.log(this.props.cinemaStore.films[0],this.props.cinemaStore.cinema.cinemaId,this.props)
        //this.getFilmsShowTime(this.props.cinemaStore.films[0],this.props.cinemaStore.cinema.cinemaId,this.props);
    }
    getFilmsShowTime(film,cinemaId,props,i) {
        fetchData({
            method:"GET",
            url:"mall.film-ticket.schedule.list",
            data:{
                filmId: film.filmId,
                cinemaId,
                date: film.showDate[i],
                k:3316308
            }
        }).then(res => {
            //console.log(res.data.schedules);
            props.getSchedules(res.data.schedules);
        })
    }

    setFilm(num,e) {
        //console.log(this.refs.films.children)
        //this.refs.films.children[0].style.padding = '0';
        const { films } = this.props.cinemaStore;
        const children = [...e.target.parentNode.children];
        children.forEach((child) => {
            child.style.padding = '26px 9px 0';
        })
        e.target.style.padding = '0';
        e.target.parentNode.style.left = `${document.body.clientWidth/2-45-num*120}px`;
        //console.log(this.refs.filmInfo.children[0]);
        let aDivs = this.refs.filmInfo.children;
        aDivs[0].children[0].textContent = films[num].name;
        aDivs[0].children[1].textContent = `${films[num].grade}分`;
        aDivs[1].textContent =  films[num].actors ? `
        ${films[num].category}|${films[num].runtime}分钟|${films[num].director}|${films[num].actors.map((actor =>(actor.name))).join(' ')}
        ` : `
        ${films[num].category}|${films[num].runtime}分钟|${films[num].director}
        `;
        /* 改变电影日期 */
        let filmDates = films[num].showDate;
        console.log(filmDates);
        this.props.setFilmDates(filmDates);
        //return this.renderDateInfo(filmDates);
        /* 改变放映表 */
        this.getFilmsShowTime(films[num],this.props.cinemaStore.cinema.cinemaId,this.props,0);
        this.props.setNum(num);
    }
    //转换10位或者13位时间戳
    getDate(param) {
        if(param.toString().length == 10){
            return new Date(param * 1000);
        }else if(param.toString().length == 13){
            return new Date(param);
        }
    }
    renderDateInfo(_filmDates) {
        const { films, num } = this.props.cinemaStore;
        /* if(this._filmDate && this._filmDate.children[0]) {
            this._filmDate.children[0].style.color = '#ff5f16';
        } */
        return (
            <div ref={div => this._filmDate = div} style={{height: '49px', fontSize: '14px', display: 'flex',alignItems: 'center'}}> 
            {
                _filmDates.map((filmDate,index) => {
                    return (
                        <div 
                        onClick={(e) =>{
                            this.getFilmsShowTime(films[num],this.props.cinemaStore.cinema.cinemaId,this.props,index);
                            Array.from(e.target.parentNode.children).forEach(item => item.style.color = '')
                            e.target.style.color = '#ff5f16';
                        }}
                        key={index} style={{padding: '0 15px'}}>{`${filmDate.getMonth()+1}月${filmDate.getDate()}日`}</div>
                    )
                })
            }
            </div>
        )
    }
    renderSchedule() {
        const { schedules } = this.props.cinemaStore ;
        return (
            schedules.map((item) => {
                const showAt = this.getDate(item.showAt);
                const endAt = this.getDate(item.endAt);
                const addZero = (time) => {
                    if(time<10){
                        return '0'+time;
                    }else{
                        return time;
                    }
                }
                const priceColor = item.isOnsell ? '#ff5f16' : '#191a1b';
                return (
                    <div style={{height: '74px', padding: '15px',boxSizing: 'border-box',display: 'flex'}}>
                        <div style={{width: '100px'}}>
                            <div style={{height: '22px',fontSize: '15px'}}>{addZero(showAt.getHours())}:{addZero(showAt.getMinutes())}</div>
                            <div style={{height: '22px',fontSize: '13px', color: '#797d82'}}>{addZero(endAt.getHours())}:{addZero(endAt.getMinutes())}散场</div>
                        </div>
                        <div style={{flex: 1}}>
                            <div style={{height: '22px',fontSize: '15px'}}>{item.filmLanguage}{item.imagery}</div>
                            <div style={{height: '22px',fontSize: '13px', color: '#797d82'}}>{item.hallName}</div>
                        </div>
                        <div style={{width: '100px',padding: '10px 0',boxSizing: 'border-box',display: 'flex'}}>
                            <div style={{width: '50px',paddingRight:'20px',fontSize: '13px',color: priceColor,lineHeight:'24px',boxSizing: 'border-box'}}>￥{item.salePrice/100}</div>
                            <div style={{width: '50px',border: `1px solid ${priceColor}`,color:priceColor ,lineHeight:'24px',textAlign: 'center',fontSize: '12px'}}>{item.isOnsell?'购票':'停售'}</div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        const { cinema, schedules, films, filmDates } = this.props.cinemaStore ;
        console.log(films);
        const _filmDates = filmDates.map((item) => this.getDate(item));
        console.log(_filmDates);
        return (
            <div style={{width: '100%',background: '#fff',color: '#2c3e50'}}>
                <div style={{height: '44px'}}>
                    <img 
                        onClick={() => {this.props.history.push('/cinema')}}
                        style={{width: '11px', height: '18px', margin: '13px 0 0 15px'}}
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGh0aHBwrKysZGxz///8bGxtAQEAaGxwfHx8fHx8cHBwaGhwaGxsaGxsgICAaGxwZGxwaGxwaGxwZGhsdHR0bGx0cHBwaGxwbGxsZHBwaGxseHh4ZGxwaGhsaGxsbGx0ZGxwaGxskJCQaGhwaGxwZGhwZHh4fHx8aGhsaGxwZGhwaGxwZGhtbcHO/AAAAL3RSTlMAEv1YdgzJAUsE+hkhP6SVsQi+0/fl8jSGStxnZuwq3c2yhaOWB4e91DMp6/bx5M02ntcAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVAwvwNf4BVAofAVvliA2QBDIfDuC4l7k/g8lY5nEGqSfzsoA6lHnbwC2SeZTD70XmYQ3Xs8y9FP5imY8nMFM6sFzBYCjzIAE2igBzYKQLwI8hwMIQYN5TgNXyfQK4L8gj1ydQFvCpHeHiDE6elrCuaT+Uc2vgO3A9mtW1e2f9GBzUP8dSrpN2rSUs7e3B6UYvi7VEWENRaokoh6bVEm3zHD3Sl+iRPEGPqtdCsVfSo+6CwCDPkdxcSwAAAABJRU5ErkJggg==' />
                </div>
                <div style={{height: '44px',lineHeight: '44px',textAlign: 'center', padding: '0 15px',fontSize: '17px', color: '#191a1b'}}>{cinema.name}</div>
                <div style={{height: '38px', padding: '5px 0 15px',boxSizing: 'border-box', color: '#ffb232', fontSize: '10px',display: 'flex',justifyContent: 'center'}}>
                    {this.renderServices(cinema.services)}
                </div>
                <div style={{height: '50px',padding: '0 20px', boxSizing: 'border-box'}}>
                    <div style={{height: '20px', margin: '15px 0', boxSizing: 'border-box', fontSize: '14px', display: 'flex', alignItems: 'center'}}>
                        <img style={{width: '14px',height: '21px'}} src='data:image/png;base64,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' />
                        <div style={{width: '100%',padding: '0 12px'}}>{cinema.address}</div>
                        <img style={{width: '17px', height: '18px'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMaHR0aMzMaGxwaGxsZGhsZGhv///8bGxsZGxsgICAkJCQbGx0cHBwaGxwaGh0aJiYZHR0ZGhwaGxsZGxwrKysaGxxVVVUbGx6AgIAcHBwZGhsZGhsaGxwbGygaGxwZGhsaGxwaGxwbGyAaGxwaGhwaGhwaGxwaGxsbGxsaGhsdHR0aHBwaGh0gICAaGxwZGxscHBwaGxsbGxsaGhwaGhwaGiEnJycaHBwaHBwaGhwZHBwbGx4cHBwaGxwZGxwZGhwaGhwcHBwdHR0aGxwaGxsgICAaGhwZGhsaGxwZGxwaGxsaGiMZGhskJCQZGhsbGxsZGhwaGhwdHR0aGhsZHBwaGxsbGxsaGhwcHBwcHBwaICAZGxwaGhsaHBweHh4bGx0cHBwcHBwZHh4bGxsaGxsaGxweHh4aHBwaGhsaGxwaGh0aHh4aGhsgICAaGhsaGh0ZGxtAQEAaGxsaGxsZGxwZGxsbGx8cHBwZGhsbGx4dHR0ZGhwfHx8aIiIcHBwaGhwZGxwZGxwaGxwZHBwaGxscHBwZGhwZGhwrKysZGxwaGxwaGxwaHBwjIyMcHBwaGh8aGhwZGhwaGxsaHBwZGhwaGhweHh4aGxsZHBwaGxwcHBwbGx0bGx0bGx0aGxwbGxsaGxwbGx4aHBwaHBwbGx0cHBwZGxsfHx8fHx8ZGhsZGxwaHh4ZGhseHh4bGxsZGhsZGxwbGxwZGx0ZGhtaQh84AAAAtnRSTlMAFwVZCvqy/v0BZ5cQB2kl5WEUPczZygb4A0MCJPLq8BO9++32MO6lufnOQsM+dk4gx4Mbs16SricNnW6IW0wS993nkwkj5KoIf/TataAd8xXWcbebNLpluy+cSEkov+t3Img/SjNBlbQqivXvajvEGNdihASoxq2NOTbpVjXUIR4tpJmj5m+xQMHLDKvj0mQWLjGv8Yx41ZERnmbIN3x7hdFU21+BbHJceSkZ4MlF6Cs4/NOQmPLP084AAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m4M5XYL6G/1SMoH2JfLM12IRliSvUjvSyp8JZ+TR2QYgt7gguxZy5M14sJcEJR2Fq/KkzoYshcy3sIfLiwCMlGMctMiDtFqsUjmKYUyqzJbCV0U9hkUyS4fvinoGIxJllA7fFFXQDINktARS1OYh5MpoGbxXm8paWCqT1GrsSWqTAidltACy1KafhZ0hk5fQVz/1gjUyKYUxoxTVszOsktFkWKaIrDIgSUaNMECODRbYXWV2H4ZMUth+YKa8uAfP5dgJDUF58AQWDlNY9yHQWx4UDYV0OXrA8dvy4AWMLVGY7zyMC8rMVwN35RhswWh58ADqL8nxCOx5MksbC8fkKJkB9fNlVgx0kqPyHXz8JLMjkJcmx/IyWFgno4R10EcRnyugfrpCVozuFlQ8ycAWRSyvgYmvpMRpQPsExbMdOuxWxOxyYHxTgJC9cxWHryM091TEm8nAWmCjDdauArk7VA75wxThu0NIijplArkZctfFD6f7K2pQGUwtkrJ7ARN7y10ykN+kqIy+K30KGVgItOsvVycsuJCgGLM3A0P3yNVFG/ImKIZvDuDvGpSbpGoon6dY+yqAWQly060QrOuJitF9B3AgVW5yRgD5wxVj21Yb1stVZQC4llykGJ0hXXEMLARuDtZv6qDDJsVzJY9WC6brV4lVMEDxjbpRAVgjTwUVFWwH1mr9SfYtP62evn6rsMUzgCkyKD1HyJfAzA9zkwN+oFFmh/vU8FN1D3mSllRlEWZVXZZnixfNmTV12pQJ+t9+AEYgC6a1Q+eMAAAAAElFTkSuQmCC' />
                    </div>
                </div>
                <div style={{width: '100%', height: '160px',padding: '15px 0', background: 'pink', boxSizing: 'border-box',position: 'relative'}}>
                    <div ref='films' style={{position: 'absolute', left: `${document.body.clientWidth/2-45}px` , display: 'flex'}}>
                        {
                            films.map((film,index) => {
                                if(index != 0){
                                    return (
                                        <img onClick={this.setFilm.bind(this,index)} style={{width: '90px', height: '130px',padding: '26px 9px 0',boxSizing: 'border-box',marginRight: '30px'}} src={film.poster} />
                                    )
                                }else{
                                    return (
                                        <img onClick={this.setFilm.bind(this,index)} style={{width: '90px', height: '130px',padding: '0',boxSizing: 'border-box',marginRight: '30px'}} src={film.poster} />
                                    )
                                }
                            })
  
                        }
                    </div>
                </div>
                <div ref='filmInfo' style={{height: '80px',padding: '15px 0',boxSizing: 'border-box',fontSize: '12px'}}>
                    <div style={{marginBottom: '10px',height: '19px',boxSizing: 'border-box',fontSize: '15px',display: 'flex',justifyContent: 'center'}}>
                        <div style={{paddingRight: '10px'}}>{films[0] && films[0].name}</div>
                        <div style={{color: '#ffb232'}}>{films[0] && films[0].grade}分</div>
                    </div>
                    <div style={{height: '18px',padding: '0 74px',font: '13px',color: '#797d82',textAlign: 'center'}}>
                        {films[0] && `
                            ${films[0].category}|${films[0].runtime}分钟|${films[0].director}|${films[0].actors.map((actor =>(actor.name))).join(' ')}
                        `}
                    </div>
                </div>
                {/* 日期 */}
                {this.renderDateInfo(_filmDates)}
                {/* 场次 */}
                {this.renderSchedule(schedules)}
            </div> 
        )
    }
}

export default connect(
    (state) => ({
        cinemaStore: state.cinema
    }),
    (dispatch) => ({
        changeCinema: (cinema) => dispatch({type: CHANGE_CINEMA,cinema}),
        getSchedules: (schedules) => dispatch({type: GET_SCHEDULES,schedules}),
        getSetFilms: (films) => dispatch({type: GET_SET_FILMS,films}),
        setFilmDates: (filmDates) => dispatch({type: SET_FILM_DATES,filmDates}),
        setNum: (num) => dispatch({type: SET_NUM,num})
    })
)(SelectFilms);