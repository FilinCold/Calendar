import React from "react";
import {Redirect, Route} from "react-router-dom";
import Authentication from "../Authentication";


const ProtectedRoute = (route) => {
  const isAuth = Boolean(localStorage.getItem('token'));
  if (isAuth) {
    return (
      <Route
        exact={route.exact}
        path={route.path}
        render={(prop) => {
          return <route.component
            {...prop}
            routes={route.routes}
          />
        }
        }
      />
    )
  }

  return (
    <Authentication/>
  )
}

export default ProtectedRoute;