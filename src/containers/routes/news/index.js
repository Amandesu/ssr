import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../../utils/fetchData';
import login from '../login';

const News = login(
class extends Component {
    constructor(props) {
        super(props);
        this.getInitialProps(this);
        this.state = {
            data: {}
        };       
    }
    getInitialProps(that){
        fetchData({
            method:"GET",
            url:"mall.act.static-page.info",
            data:{
                actId: 'ElzMZU125260'
            }
        }).then(res => {
            console.log(res.data.data);
            that.setState({
                data: res.data.data
            })
            //props.setList(res.data.cinemas);
        })
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.state.data.content}} style={{width: '100%', overflow: 'hidden'}}>
                </div>

                <div ref='bottomNav' style={{width:'100%',height:'49px', position:'fixed',bottom:0,background:'#fff',color:'#797d82', display:'flex'}}>
                    <div style={{height:'49px',flex:1,textAlign:'center',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Link to='/'>
                            <img  style={{width: '21px', height: '29px',paddingTop:'8px',boxSizing:'border-box'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEx5foN6fYR5f4J5fYJ5fYX///95fYN/f4t/f/95fYJ5fYOZmZl5fYJ/f4d8f4J5fYJ6foJ5f4J5fYJ6foJ5fYJ5fYJ5foJ/f5l6foJ6fYN5fYJ6foJ6fYR7g4N5fYJ8f4J9fYJ6fYJ5foJ6hIR6fYJ7foN5foJ5fYJ5fYJ6hIR/f5F5fYJ7f4N5fYJ5foOGhoZ/f4x5hYV5fYJ5fYJ5fYJ7foN6foJ/f6p5fYJ5fYV6fYKIiIh5fYJ5fYJ5foJ5foJ5fYJ5fYJ8goJ5fYJ5fYJ6fIN5fYN5fYN5fIN8goJ6foJ6fYN/f4l5f4J5fYL6aFRvAAAAT3RSTlMAZ25Q7EEBsRYC+oYF3SBM/X1W88D2xXEKd46iuk0hv0oz05UZZlmy5swbDuFA62MTFBek7+5bvgb5P+oP4vK0tuWoJcvf69qz8TF7rxpauYn0+gAAAeZJREFUOMuVVVd74kAMHNzWhpiYYjAthGJagNxBQku53sv8/39zD07itXEOW287q28lzUojIGKeOhhPJ/vJdDxQPbxu1ki4DM0VI+sVz8s+6dQand5wN+x1GjWH7F8mOV50SdtfScjKt8nuxZHnQeNSOYuBZ8qS2iEG5vIUVwmx7gXzuagnWUguwSqQsu8iz+vwVCytS8XweM38IqxIYyG8Oq+QrJyHQIHaS21dCuPl4q3G1qZF7U2Yg2D3mU/eSRWV2QbQZjmErpYM+LX6VKS862wCaLIuYQr7FgD8pS3zqXNuwnygLvNrcwQAgr7MjlHl7faGVUMGfQoAnuuYESZNQVLEMMf1AJW1OO0zfRaHalSBARtPLJXreiQqDL1efuKswQEwZidgXiNZleOaVZJa8BcdjoEpewBQrLDdfKCQXAXnzTYrRQDocQpMOASAEluAecMwyxlvTaDFEgAMOQH23AHAmhsAW4lOnVsAG64BYMf90at//vNqhlwzMJCB1wy/5bnO6mQPrBzXS9lZuaDeUVK/zhP7NcMUnJ6t++fZAroUVrqJzaIDJ9XlENMsI5VmZVFCYKHxLkFfv/LHr5/Jqh3pLN8OlsI35dPpXfD4+Pn77y8k36fbMJb68cO74zLS7q0T9g/dKmZUv7wXgQAAAABJRU5ErkJggg==' />
                            <div style={{width: '24px', fontSize: '12px'}}>电影</div>
                        </Link>
                    </div>
                    <div style={{height:'49px',flex:1,textAlign:'center',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Link to='/cinema'>
                            <img  style={{width: '21px', height: '29px',paddingTop:'8px',boxSizing:'border-box'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEx5fYN6hIR5foKZmZl/f/95fYJ5fYJ5fYJ5fYJ5foJ8goJ7foN5fYJ/f5F6foJ5fYJ5fYJ7f4N6foKNjY16foJ9fYZ5fYJ5fYJ6fYJ5fYJ6fYR/f4h5fYN6f4R5fYJ9fYZ5fYJ5fYJ6foJ5fYN/f4Z5fYV6foJ5fYJ5fYN/f4x7f4N5fYKRkZF5fYJ/f5l5fYN5f4J5fYJ9fYJ6foJ5fYJ5foJ5fYJ5foJ5fYJ5hYX///97fYN5foJ5fYJ6fYR8goKHh4d6fYR6fYKLi4t5fYJ7fYN5fYJ8f4J5fYJ6f4J6fYOIiIh5fYJjB2qDAAAATXRSTlMAfBmyBQLz/ub7rCVfpg57+cs+iQnENdz0mLdRHIo43jnf7cB2JD13/bMURKQH+ArUVPEzvL1v78rDFQFyxvdNJxFHnAuZdOdKzF6lDxbVfRkAAAEcSURBVDjL7dLXbsJAFATQcV9jg43pvff03ntP5v9/Jw9gAgHb5AFFijKve6S9u3eAdcVTBEMjFG8sJYOR6TsA4BluWw6/Vu65/S4Ahe3oGXtUAAjK0VSmAECu8nTyn66farFcdv48m4tpS6lD5q9n4PmFSzrLaNU0iuT9rS+7l2TMMKuLNFFjBU9XzD/enanb+0cn5PMLKqwlFmicSRWwitM2H0sPgPrK9+/Upm4BAG5Sp3vm1s7G7iYAwNL5Nk87Ou3lv2RT78xSNcl40I+OJ5vSFBuJIPrRYOqLjgyzHryoummMfDoUlMKWKlEMJ3TAlhZGtRYHE8pmObwr5SZ9WorqVcmnhegOFkgAh5l0NE1nDvBnwxXzM/rL+QQoFmWj/JD7rwAAAABJRU5ErkJggg==' />
                            <div style={{width: '24px', fontSize: '12px'}}>影院</div>
                        </Link>
                    </div>
                    <div style={{height:'49px',flex:1,textAlign:'center',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Link to='/news'>
                            <img  style={{width: '21px', height: '29px',paddingTop:'8px',boxSizing:'border-box'}} src='https://mall.s.maizuo.com/mzmovie-icon-news-42x42-gray.png' />
                            <div style={{width: '24px', fontSize: '12px',color:'#ff5f16'}}>资讯</div>
                        </Link>
                    </div>
                    <div style={{height:'49px',flex:1,textAlign:'center',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Link to='/myInfo'>
                            <img  style={{width: '21px', height: '29px',paddingTop:'8px',boxSizing:'border-box'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABuVBMVEVHcEx5fYKqqqp5fYJ/f5R5fYN5hYX///9/f/95fYJ/f59/f5l5fYJ/f4Z5fYJ5foJ5fYJ5fYJ5foJ5fYJ6fYJ5fYJ7foR6fYKRkZF5fYV6f4J6f4J5fYN/f4p5fYJ5f4V6fYJ5foN5foN6fYR5fYN/f797foN9fYJ5fYJ8f4J6foJ/f5F5fYN6foJ/f6p5fYJ7f4N9fYZ5foJ5fYN5fYJ6fYJ/f415fYJ5f4J5fYJ/f4h5fYN5fYJ5fYN5foN5fYN5fYJ6f4J7g4N5fYJ5foKNjY15f4J8f4J7f4N6fYOLi4t7f4N6f4R5fYJ5fYJ5fYN6foJ5fYV5fYN8goJ5f4V/f496foJ6fYR6f4R6foJ6fYJ5foN5fYJ5fYN7foN7f4N/f4x5fYJ6foKZmZl5fYJ5hYV5fYN5fYN5fYJ5fYN5fYN5fYN5fYN6foJ5fYV6foJ6f4J7foN6fYN5fYJ5foJ/f4d5foN6fYR5fYJ5fYN5fYJ6foJ5fYJ5foJ6fYR5fYV6foJ5f4J5fYJ5foJ5fYJ5fYKJiYl6f4R5foJ5foJ5foJ6hIR5fYJ5f4V6fYR6foJ6fYJ6fYJ5fYL3B6qLAAAAknRSTlMA8wP4DIoVAQLvCAriJPmyvd62u9X6VeoHO15ggBj+KNFnaWifBFsz506FDp1/Bss+N5WG/ZgSzFTsHHb21m148GQd8o8JXEo6owtENuH1m8Q/0C8qEIFLMneUY9/YWTwU230F5BehiO7a1M61hz17Yl+O5cggZU3gfPyJx41TQb5Syartvw04rJfKG6IsScDTnLdCNQgAAAHsSURBVBgZpcFldxpBAAXQByzs4hKSkABxd3d317q7u7u79/3ispwUZpeZDz29F//ja83v2M6vn99qK5GR/lzl+OL+AIkXbyr417MF4/U7mtbXYLd2j3R8qv6x+327dtlLxp/w7a728T2jK7C6FeLdBwnsmU+uk4+RYWwxBYvr5B0/BPO9N5G1yghEtXTdhtwMAxB0FfMEFFYZQZ4zzl4oGFtMIe8oT5+FnL7J6AryjrEEcvomN5aQd4gBHXJubryE4ACPQOEpn0NUxINQeMhXEMW5Dwr3+QgiL/dDQaMDohATUEjQBVET01BIswmiTt6AQhc7IerhKBRG2QNRCcd1ZDWcQtb5BmTp4yyByDfFRZgO8/hJZCydYwqmRU75YDHHCEyeHfLK8oWr5OUZmCKcg5XHwXKYOs6UMuPSRT9M5XR4YJNkqAxZ9WUL5dsdyCoLMYkCbpYGYRMspRuFjDBnp2ExPcuwAQktTF4bQc5IjAxrkNInx+htxZ5WL8cmdSg4q9iOnHZWOaEywagPOb4oJ6Dg8bIZgmZ6PZBrYwwWMbZBqrvCFYRF0FXRDQljkC2waeGggULVDPhh4w+wGgUGhjmEAkMcHoBdP4sgUcR+2DT2FVdCorK4rxFWdXRDys06WNXXaJDSapz4V38AuCN1L95kvMoAAAAASUVORK5CYII=' />
                            <div style={{width: '24px', fontSize: '12px'}}>我的</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
} 
);
export default News;