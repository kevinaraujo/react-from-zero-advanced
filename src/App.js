import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import firebase from './services/firebaseConnection';

class App extends Component {

    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;