import React, { Component } from 'react';
import firebase from './firebaseConnection';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };    

        this.save = this.save.bind(this);
    }

    save(e) {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, 
            this.state.password
        ) .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                alert('Invalid email.');
            }

            /*if (error.code === 'auth/weak-password') {
                alert('Weak password.');
            }

            alert(`Error code: ${error.code}`);*/
        });

        e.preventDefault();
    }


    render() {

        return (
            <div>
                <form onSubmit={this.save}>
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