import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Reservation from './pages/Reservation';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/reservations" component={Reservation}/> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;