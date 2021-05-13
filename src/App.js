import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import firebase from './services/firebaseConnection';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {

    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <ToastContainer autoClose={3000} />
                    <Routes/>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;