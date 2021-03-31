import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Book from './pages/Book';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route exact path="/book" component={Book}/> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;