import React from 'react'
import {
    BrowserRouter as Router, Redirect, Route,
    Switch,
} from "react-router-dom";

import ProtectedRoute from "./components/Authentication/ProtectedRoute/ProtectedRoute";
import routes from "./routes/routes";

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, index) => {
                        return route.withAuth
                            ? <ProtectedRoute
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                key={index}
                            />
                            : <Route
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                key={index}
                            />
                    })
                }
            </Switch>
            <Redirect from='/' to='/calendar/'/>
        </Router>
    );
}

export default App;
