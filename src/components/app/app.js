import React from "react";
import {  Route, Switch } from "react-router-dom";

import Header from '../header';
import { HomePage, LoginPage, ProfilePage, NewsPage } from '../pages';


const App = () => {
    return (
        <main role="main" className="container">
            <Header />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />

                <Route
                    path="/login"
                    component={LoginPage}
                />

                <Route
                    path="/profile"
                    component={ProfilePage}
                />

                <Route
                    path="/news"
                    component={NewsPage}
                />
            </Switch>

        </main>)
};

export default App;