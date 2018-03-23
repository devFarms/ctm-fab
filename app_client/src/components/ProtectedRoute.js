import React from "react";
import {Route, Redirect} from "react-router-dom";
import authHelper from "../authentication.helpers";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      authHelper.isLoggedIn() === true
        ? <Component {...props} />
        : <Redirect to='/home' />
    )} />
  )

export default PrivateRoute;