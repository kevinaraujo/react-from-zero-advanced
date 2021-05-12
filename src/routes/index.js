import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RouteWrapper from './Routes';

const Routes = () => {
  return (
    <Switch>
      <RouteWrapper exact path="/login" component={Login} />
      <RouteWrapper exact path="/register" component={Register} />
      <RouteWrapper exact path="/dashboard" 
        component={ Dashboard } 
        isPrivate={ true }/>
    </Switch>
  );
}

export default Routes;