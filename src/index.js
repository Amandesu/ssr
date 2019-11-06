import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from "./app"


ReactDom.hydrate(<App />, document.getElementById('root'))