import React, { Component } from 'react';
//import firebase from './firebaseConnection';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            email: '',
            password: ''
        };    

        this.auth = this.auth.bind(this);
        this.save = this.save.bind(this);
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
    }

    componentDidMount() {
        this.auth();
    }

    auth() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user});
            }
        });
    }

    save() {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, 
            this.state.password
        )
        .then(() => {         
           alert('success');
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                alert('Invalid email.');
                return;
            }

            if (error.code === 'auth/weak-password') {
                alert('Weak password.');
                return;
            }

            alert(`Error code: ${error.code}`);
            return;
        });
    }

    login() {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
        .catch((error) => {
            alert(`Error code: ${error.code}`);
        });
    }

    logout() {
        firebase.auth().signOut()
        .then(() => {
            this.setState({user: null});
            alert('Logged out successfully!')
        })
    }

    render() {

        return (
            <div>
                { this.state.user ?
                    <div>
                        <h1>Admin Panel</h1>
                        <p>Welcome</p>
                        <p>
                            {this.state.user.email}<br/>
                            {this.state.user.uid}
                        </p>
                        <button onClick={this.logout}>Log out </button>
                    </div>
                :
                    <div>
                        <h1>Welcome</h1>

                        Email:<br/><input type="text" value={this.state.email} 
                        onChange={(e) => this.setState({email: e.target.value })}/>
                        <br/>
                        Password:<br/><input type="text" value={this.state.password} 
                        onChange={(e) => this.setState({password: e.target.value })}/>
                        <br/>

                        <button onClick={this.save}>Save</button>
                        <button onClick={this.login}>Log in </button>
                    </div>
                }
            </div>
        );  
    }
}
export default App;