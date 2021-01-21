import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tokenInput: '',
            nameInput: '',
            ageInput: '',
            token: 'Loading...',
            name: '',
            age: ''
        };

        this.saveForm = this.saveForm.bind(this);

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

        firebase.database().ref('token').on('value', (snapshot) => {
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

    saveForm(e) {
        //firebase.database().ref('token').set(this.state.tokenInput);
        //firebase.database().ref('users').child(1).child('parent').set(this.state.tokenInput);
        
        //firebase.database().ref('users').child(1).child('parent').remove();

        let users = firebase.database().ref('users');
        let key = users.push().key;

        users.child(key).set({
            age: this.state.ageInput,
            name: this.state.nameInput
        });

        e.preventDefault();
    }

    render() {
        const {token, name, age} = this.state;

        return (
            <div>
                <form onSubmit={this.saveForm}><br/>
                    <input type="text" placeholder="Token"
                    value={this.state.tokenInput} 
                    onChange={(e) => this.setState({tokenInput: e.target.value})}/>
                
                    <br/>
                    <input type="text" placeholder="Name"
                    value={this.state.nameInput} 
                    onChange={(e) => this.setState({nameInput: e.target.value})}/>
                
                    <br/>
                    <input type="text" placeholder="Age"
                    value={this.state.ageInput} 
                    onChange={(e) => this.setState({ageInput: e.target.value})}/>
                

                    <button type="submit">Save</button>
                </form>
               <h1>Token: {token}</h1>
               <h1>Name: {name}</h1>
               <h1>Age: {age}</h1>
            </div>
        );  
    }
}
export default App;