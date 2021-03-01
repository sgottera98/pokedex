import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
            </Switch>
        </Router>
    )
}

export default Routes