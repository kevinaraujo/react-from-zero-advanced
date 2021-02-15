import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Panel from './pages/Panel';
import Test from './pages/Test';
import SetCookie from './pages/SetCookie';
import { authenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        authenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )}/>
);

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/set-cookie" component={SetCookie}/>
                <Route exact path="/test" component={Test}/>
                <PrivateRoute exatc path="/panel" component={Panel}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;