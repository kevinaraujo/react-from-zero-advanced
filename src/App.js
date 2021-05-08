import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Header from './components/Header';

import store from './store';
import history from './services/history';

export const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header/>
                <Routes/>
            </Router>
        </Provider>
    );
}