import React from "react";
import {Router, Route, BrowserRouter } from "react-router-dom";
import City from "./routes/city"
import Home from "./routes/home/"
import Cinema from "./routes/cinema";
import MyInfo from "./routes/myInfo";
import News from "./routes/news";
import Search from "./routes/cinema/search";
import SelectFilms from "./routes/cinema/selectFilms";
import FilmsDetail from "./routes/home/filmsDetail";

export default () => <React.Fragment>
    <Route path="/" exact render={(props) => <Home {...props}/> }/>
    <Route path="/filmsDetail" exact render={(props) => <FilmsDetail {...props}/> }/>
    <Route path="/city" exact render={(props) => <City {...props}/> }/>
    <Route path="/cinema" exact render={(props) => <Cinema {...props}/> }/>
    <Route path="/cinema/search" exact render={(props) => <Search {...props}/> }/>
    <Route path="/cinema/selectFilms" exact render={(props) => <SelectFilms {...props}/> }/>
    <Route path="/myInfo" exact render={(props) => <MyInfo {...props}/> }/>
    <Route path="/news" exact render={(props) => <News {...props}/> }/>
</React.Fragment>
