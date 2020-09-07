import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import AuthRoute from "../routes/AuthRoute";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import publicRoutes from "../routes/publicRoutes";
import privateRoutes from "../routes/privateRoutes";
import adminRoutes from "../routes/adminRoutes";
import Routes from "../commons/constant/Routes";

const EntryPoint = () => {
  const isAuthenticated = true;

  return (
      <Switch>
        {publicRoutes.map(
            (route) => (<AuthRoute isAuthenticated={!isAuthenticated} {...route} />)
        )}
        {privateRoutes.map(
            (route) => (<AuthRoute isAuthenticated={isAuthenticated} {...route} />)
        )}
        {adminRoutes.map(
            (route) => (<AuthRoute isAuthenticated={isAuthenticated} {...route} />)
        )}
        <Route key={Routes.HOME} path={Routes.HOME} component={isAuthenticated ? Home : LandingPage} exact={true}/>
        <Route component={NotFound} />
      </Switch>
  );
}

export default EntryPoint;
