import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import * as Pages from './pages';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Pages.Home}/>
                    <Route path="*" component={Pages.NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;