import React from "react";
import {Router, Route, BrowserRouter } from "react-router-dom";
import City from "./routes/city"
import Home from "./routes/home/"

export default () => <React.Fragment>
    <Route path="/" exact render={() => <Home /> }/>
    <Route path="/city" exact render={() => <City /> }/>
</React.Fragment>
