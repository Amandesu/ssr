import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from "./app/index"
import createStore from "./createStore"

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 5000)
})
Promise.all([p1, p2]).then(res => {
    console.log("suc")
}, err => {
    console.log("err")
})



ReactDom.hydrate(<Provider store={createStore()}>
    <React.Fragment>
        <App />
    </React.Fragment>
</Provider>, document.getElementById('root'))