import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Book from './pages/Book';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book" component={Book}/> 
        </Switch>
    );
}

export default Routes;