import React from 'react';
import { connect} from 'react-redux';

import fetchData from '../../../utils/fetchData';

@connect(
    (state) => ({
        homeStore:state.home,
        cityStore:state.city
    }),
    (dispatch) => ({
        setList: (list) => dispatch({type:"HOME_SET_LIST",data:list}),
    })
)
export default class Home extends React.Component {
    constructor(props){
        super(props);
        setInterval(()=>{this.headImgChange()},2000);
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
            props.setList(res.data.films);
        })
    }
    componentWillMount(){
    }
    componentDidMount(){
        Home.getInitialProps(this.props)
    }

    headImgChange(){
        this.refs.a1.style.zIndex = this.refs.a1.style.zIndex==1? 0 : 1;
        this.refs.a2.style.zIndex = this.refs.a2.style.zIndex==1? 0 : 1;
        this.refs.div1.style.background = this.refs.div1.style.background=='black'? 'hsla(0,0%,100%,0)' : 'black';
        this.refs.div2.style.background = this.refs.div2.style.background=='black'? 'hsla(0,0%,100%,0)' : 'black';
    }
    renderFilmList(){
        console.log(this.props.homeStore.list);
        const { list } = this.props.homeStore;
        return (
            list.map((item) => (            
            <li key={Math.random()*1000} style={style.filmItem}>
                <a href='' style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '66px', height: '94px', background: 'rgb(249, 249, 249)', float: 'left'}}>
                        <div style={{width: '66px', height: '94px', background: 'rgb(249, 249, 249)', opacity: '1'}}>
                            <img src={item.poster} style={{width: '100%'}}/>
                        </div>
                    </div>
                    <div style={{ height:'94px',marginLeft: '8px', flex:1, flexDirection: 'column',fontSize: '13px'}}>
                        <div style={{fontSize: '16px'}}>{item.name}</div>
                        <div><span>观众评分</span><span>{item.grade}</span></div>
                        <div>主演:{item.actors.map((actor) =>(<p key={Math.random()*1000} style={{display: 'inline'}}>{actor.name}  </p>))}</div>
                        <div>{item.nation} | {item.runtime}分钟</div>
                    </div>
                    <a href='#' style={{width: '50px', height: '25px', lineHeight: '25px', color: '#ff5f16', fontSize: '13px', textAlign: 'center', border: '1px solid #ff5f16', borderRadius: '2px'}}>购票</a>
                </a>
            </li>))
        )
    }
    render(){
        const cityStore = this.props.cityStore
        return (
            <div>
                <div style={style.cityFixed}><span>{cityStore.city.name}</span></div>
                <div style={style.billBoards}>
                    <div style={{ width:'100%', height: '100%'}}>
                        <a href='#' ref='a1' style={{zIndex: 1, position: 'absolute', width: '100%'}}><img src='https://static.maizuo.com/v5/upload/2fd9cd71b8b73608d28d38435f45ed48.jpg?x-oss-process=image/quality,Q_70' style={{width: '100%'}} /></a>
                        <a href='#' ref='a2' style={{zIndex: 0, position: 'absolute', width: '100%'}}><img src='https://static.maizuo.com/v5/upload/b43a16925b3c56107bec4b866a2623ca.jpg?x-oss-process=image/quality,Q_70' style={{width: '100%'}} /></a>
                    </div>
                    <div style={{position: 'absolute', bottom: '10px', right: '12px', display: 'flex' }}>
                        <div ref='div1' style={{width: '10px',height: '5px',border: '1px solid black',background: 'black',opacity: 1,margin: '0 3px',zIndex: 10}}></div>
                        <div ref='div2' style={{width: '10px',height: '5px',border: '1px solid black',background: 'hsla(0,0%,100%,0)',opacity: 1,margin: '0 3px',zIndex: 10}}></div>
                    </div>
                </div>
                <div style={style.tabsBarWrapper}>
                    <div style={{height:'48px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{color: '#ff5f16', textAlign:'center', flex:1}}><span>正在热映</span></div>
                        <div style={{textAlign:'center',flex:1 }}><span>即将上映</span></div>
                    </div>
                    <div style={{height:'1px', display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{width: '64px',height:'1px', background:'#ff5f16'}}></div>
                        <div style={{width: '64px',height:'1px'}}></div>
                    </div>
                </div>
                <div style={{borderSizing: 'border-box'}}>
                    <div>
                        <ul style={{listStyle: 'none', padding: 0, marginLeft: '15px', display: 'block'}}>
                           {this.renderFilmList()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

let style = {
    cityFixed: {
        color: '#fff', 
        fontSize: '13px', 
        background: 'rgba(0,0,0,.2)', 
        height: '30px', 
        width: '52px', 
        borderRadius: '15px',
        padding:'0 5px', 
        marginTop: '18px', 
        marginLeft: '7px',
        position: 'absolute',
        zIndex: '10'
    },
    billBoards: {
        width: '100%',
        height: '56vw',
        position: 'relative',
    },
    headImg: {
        zIndex: 0, position: 'absolute', width: '100%'
    },
    tabsBarWrapper: {
        width: '100%',
        background: '#fff',
    },
    filmItem: {
        padding: '15px 15px 15px 0',
        height: '94px',
        position: 'relative',
        dispalay: 'list-item'
    }
}


