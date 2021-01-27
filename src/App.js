import React, { Component } from 'react';
//import firebase from './firebaseConnection';
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };    

        this.save = this.save.bind(this);

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
                let {uid} = user;
            
                firebase.database().ref('users').child(uid).set({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
                .then(() => {
                    this.setState({
                        name: '',
                        email: '',
                        password: ''
                    });
                });
            }
        });
    }

    save(e) {
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

        e.preventDefault();
    }


    render() {

        return (
            <div>
                <h1>New User</h1>
                <form onSubmit={(e) => this.save(e)}>
                    Name: <input type="text" value={this.state.name} 
                    onChange={(e) => this.setState({name: e.target.value })}/>
                   <br/>
                    Email: <input type="text" value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value })}/>
                   <br/>
                    Password: <input type="text" value={this.state.password} 
                    onChange={(e) => this.setState({password: e.target.value })}/>
                    <br/>

                    <button type="submit">Save</button>
                </form> 
            </div>
        );  
    }
}
export default App;