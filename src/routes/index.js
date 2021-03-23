import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routeModules from './modules'

const Routes = () => {
    return (
        <Router>
            <Switch>
                {
                    routeModules.map((el, id) => (
                        <Route path={el.path} exact={el.exact} key={id} component={el.component}/>
                    ))
                }
            </Switch>
        </Router>
    )
}

export default Routes