import React from "react";
import {Router, Route, BrowserRouter } from "react-router-dom";
import City from "./routes/city"
import Home from "./routes/home/"

export default () => <React.Fragment>
    <Route path="/" exact render={(props) => <Home {...props}/> }/>
    <Route path="/city" exact render={(props) => <City {...props}/> }/>
</React.Fragment>
