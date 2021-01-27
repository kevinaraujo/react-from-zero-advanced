import React, { Component } from 'react';
//import firebase from './firebaseConnection';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };    

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        let firebaseConfig = {
            apiKey: "AIzaSyDzWmNTf3MsLpMJ5DAoYANxdxkzTzI3kH4",
            authDomain: "react-app-e409d.firebaseapp.com",
            projectId: "react-app-e409d",
            storageBucket: "react-app-e409d.appspot.com",
            messagingSenderId: "908039182483",
            appId: "1:908039182483:web:8e7850295828444bc69566",
            measurementId: "G-6RLTSLBGZ1"
        };
            
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                alert('User logged successfully!');
            }
        });
    }

    login(e) {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email, 
            this.state.password
        )
        .then(() => {
            this.setState({
                email: '',
                password: ''
            });

            alert('success');
        })
        .catch((error) => {

            if (error.code === 'auth/wrong-password') {
                alert('Password in incorrect.');
                return;
            }

            alert(`Error code: ${error.code}`);
            return;
        });

        e.preventDefault();
    }

    logout() {
        firebase.auth().signOut();
        alert('User logged out!');
    }


    render() {

        return (
            <div>
                Login
                <form onSubmit={this.login}>
                    Email: <input type="text" value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value })}/>
                   <br/>
                    Password: <input type="text" value={this.state.password} 
                    onChange={(e) => this.setState({password: e.target.value })}/>
                    <br/>

                    <button type="submit">Log in</button>
                </form>
                
                <button onClick={this.logout}>Log out</button>
               
            </div>
        );  
    }
}
export default App;