import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div style={{height: '60px', width: '60px'}}>
                    <img src='https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png' />
                </div>
                <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor: '#66ccff',height: '250px',width: '100%'}}>
                    <input type='text' placeholder='账号' style={{marginBottom: '5px'}} />
                    <input type='password' placeholder='密码' />
                    <div>
                        <button style={{marginRight: '20px'}}>注册</button>
                        <button style={{marginLeft: '20px'}}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}