import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import store from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}