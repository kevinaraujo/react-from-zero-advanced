import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: 'Loading...',
            name: '',
            age: ''
        };

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

         // if already initialized, use that one

       /* firebase.database().ref('token').on('value', (snapshot) => {
            let state = this.state;

            state.token = snapshot.val();

            this.setState(state);
        });*/

        firebase.database().ref('token').once('value', (snapshot) => {
            let state = this.state;

            state.token = snapshot.val();

            this.setState(state);
        });
        
        firebase.database().ref('users').child(1).on('value', (snapshot) => {
            let state = this.state;

            state.name = snapshot.val().name;
            state.age = snapshot.val().age;

            this.setState(state);
        });
        
    }

    render() {
        const {token, name, age} = this.state;

        return (
            <div>
               <h1>Token: {token}</h1>
               <h1>Name: {name}</h1>
               <h1>Age: {age}</h1>
            </div>
        );  
    }
}
export default App;