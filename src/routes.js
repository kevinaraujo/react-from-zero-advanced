import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Panel from './pages/Panel';
import {authenticated} from './auth';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        authenticated() ? (
         <Component {...props}/>
        )
        :
        (
            <Redirect to={{pathname: '/', state: {from: props.location }}}/>
        )
    )} />
);

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute path="/panel" component={Panel}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;