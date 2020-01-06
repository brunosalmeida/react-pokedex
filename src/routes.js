import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "./pages/main";
import Detail from "./pages/detail";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route path="/details/:id">
                <Detail/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes; 