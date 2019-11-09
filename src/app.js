import React from 'react';
import { Provider , connect} from 'react-redux';
import { BrowserRouter, Route  } from 'react-router-dom';
import Container from './containers';
import createRootStore from './containers/createRootStore';
export const store = createRootStore();
export default class App extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <React.Fragment>
                <Provider store={store}>
                    <React.Fragment>
                        <BrowserRouter>
                            <Container />
                        </BrowserRouter>
                    </React.Fragment>
                </Provider>
            </React.Fragment>
        )
    }
}
