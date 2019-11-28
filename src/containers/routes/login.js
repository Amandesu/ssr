import React, { Component } from 'react';
import { Redirect } from 'react-router';

const isLogin = true;

const login = (View) => {
    return class extends Component {
        render() {
            if(!isLogin) {
                return (
                    <Redirect to='/' />
                )
            } else {
                return <View />
            }
        }
    }
}
export default login;