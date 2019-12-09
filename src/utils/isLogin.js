import React, { Component } from 'react';
import { Redirect } from 'react-router';

const isLogin = false;

export default (View) => {
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