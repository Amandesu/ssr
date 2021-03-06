// 服务端容器页面
import React from 'react';
import { Provider , connect} from 'react-redux';
import { StaticRouter  } from 'react-router-dom';
import Container from '../src/containers';
import createRootStore from '../src/createRootStore';
export const store = createRootStore();

export default class App extends React.Component {
    constructor(props){
        super(props);

    }
    // 服务端获取数据
    render(){
        return (
            <React.Fragment>
                <Provider store={store}>
                    <React.Fragment>
                        <StaticRouter location={this.props.location || "/"}>
                            <Container />
                        </StaticRouter>
                    </React.Fragment>
                </Provider>
            </React.Fragment>
        )
    }
}