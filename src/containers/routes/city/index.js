import React from 'react';
import { connect} from 'react-redux';
import fetchData from '../../../utils/fetchData';
import { changeData } from '../../reduces/city';

@connect(
    (state) => ({
        cityStore:state.city
    }),
    (dispatch) => ({
        changeData: changeData(dispatch),
        changeCity: (city) => {
            dispatch({type:"CITY_CHANGE_CITY",city})
        }
    })
)
export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    static getInitialProps(props){
        return fetchData({
            url:"mall.film-ticket.city.list",
            method:"GET"
        }).then(res => {
            return res;
        })
    }
    componentDidMount() {
        console.log(this.props)
        City.getInitialProps(this.props)
            .then(response => {
                let cities = response.data.cities;
                let arrayList = Array(26).fill(0).map(() => []);
                let hotCitys = [];
                cities.forEach(city => {
                    if (["北京", "上海", "广州", "深圳"].indexOf(city.name) > -1) {
                        hotCitys.push(city); 
                    }
                    // 城市列表
                    let c = city.pinyin.charCodeAt(0)-97;
                    arrayList[c].push(city);
                })
                console.log(arrayList);
                this.props.changeData({
                    cities:arrayList,
                    hotCitys
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    renderHotCity = () => {
        const cityStore = this.props.cityStore
        let hotCitys = cityStore.hotCitys;
        let splitArr = [], temp = [];
        hotCitys.forEach(item => {
            if (temp.length >= 3) {
                splitArr.push(temp)
                temp = [];
            }
            temp.push(item);
        })
        temp.length && splitArr.push(temp);
        return (
            <div>
                {splitArr.map(hotCitys => {
                    return (
                    <div key={hotCitys.cityId} style={{ height: 30, flexDirection: "row", justifyContent: "space-between", marginBottom: 15, display:"flex" }}>
                        {hotCitys.map((city) => {
                            return (
                                <div key={city.cityId} style={{ width: 100, marginHorizontal: 10, backgroundColor: "#f4f4f4", justifyContent: "center", alignItems: "center", display:"flex" }} onClick={() => {
                                    this.props.changeCity(city);
                                    cityStore.from ? this.props.history.push("/") : this.props.history.push("/cinema")
                                    //console.log(this.props)
                                }}>
                                    <span style={{ color: "#191a1b", fontSize: 14 }}>{city.name}</span>
                                </div>
                            )
                        })}
                    </div>
                    )
                })}
            </div>
        )
    }
    renderCities(){
        const {state, props } = this;
        const cityStore = props.cityStore
        return (
            <div style={styles.list}>
                {cityStore.cities.map((_, index) => {
                    let sublist = cityStore.cities[index];
                    return sublist.length ? 
                    <div style={styles.item}> 
                        <div style={styles.title}>
                            <span>{String.fromCharCode(index+65)}</span>
                        </div>
                        <div style={styles.sublist}>
                            {sublist.map((city) => {
                                return (
                                    <div  key={city.cityId}>
                                        <div style={styles.subtitle} onClick = {() => {
                                            this.props.changeCity(city);
                                            cityStore.from ? this.props.history.push("/") : this.props.history.push("/cinema")
                                        }}>
                                            <span style={{color:"#191a1b",fontSize:14}}>{city.name}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>:null
                })}
            </div>
        )
    }
    render() {
        const {state, props} = this;
        return (
            <div style={styles.container}>

                <div style={styles.header}>
                    
                    <div style={{ flex: 1.5, alignItems: "center", marginLeft: 10, display:"flex" }}>
                        <img
                            onClick={() => {props.cityStore.from ? props.history.push("/") : props.history.push("/cinema")}}
                            src={require("../../images/delete.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    </div>
                    <div style={{ flex: 7, alignItems: "center", justifyContent: "center", display:"flex" }}>
                        <span style={{ fontSize: 17 }}>当前城市</span></div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
                <div style={styles.inputContainer}>
                    <div style={{ backgroundColor: "#fff", flex: 1, flexDirection: "row", alignItems: "center", display:"flex" }}>
                        <img
                            src={require("../../images/search.png")}
                            style={{ width: 20, height: 20, marginLeft: 10 }}
                        />
                        <input
                            style={{ height: 20, flex: 1, paddingVertical: 0 }}
                            value ={state.span}
                            placeholder="请输入城市名或拼音"
                            onChange={(text) => {
                                
                                this.setState({ text })
                            }}
                        ></input>
                    </div>
                </div>
                <div style={{overflowY:"auto", flex:1}}>
                    <div style={{overflow:"hidden"}}>
                        <div style={styles.hotCity}>
                            <div style={{ height: 20, marginBottom: 10, display:"flex" }}>
                                <span style={{ color: "#797d82", fontSize: 13 }}>热门城市</span>
                            </div>
                            {this.renderHotCity()}
                           
                        </div>
                        {this.renderCities()}
                    </div>
                </div> 
            </div>
        );
    }
}
const styles = {
    container: {
        height:"100vh",
        display:"flex",
        flexDirection:"column"
    },
    header: {
        flexDirection: "row",
        height: 44,
        display:"flex"
    },
    inputContainer: {
        backgroundColor: "#f4f4f4",
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        height: 49,
        display:"flex"
    },
    hotCity: {
        backgroundColor: "#fff",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },
    list:{
        backgroundColor:"#fff",
        flex:"row"
    },
    title:{
        height:30,
        paddingLeft:15,
        //boxSize:"bor"
        backgroundColor:"#f4f4f4",
        //justifyContent:"center",
        alignItems:"center",
        display:"flex"
    },
    sublist:{
        paddingLeft:20,
        width:"100%"
    },
    subtitle:{
        height:48,
        borderBottomWidth:1,
        borderBottomColor:"#ededed",
        display:"flex",
        alignItems:"center"
    }
}
