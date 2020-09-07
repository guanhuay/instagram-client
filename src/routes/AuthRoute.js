import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

const AuthRoute = (props) => {
    const { isAuthenticated, backUrl, ...otherProps } = props;

    if(isAuthenticated) {
        return <Route {...otherProps} />;
    } else {
        return <Redirect to={backUrl} />
    }
}

export default AuthRoute;
