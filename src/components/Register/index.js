import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from './../../firebase';
import './register.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e) {
        e.preventDefault();
        this.onRegister();
    }

    onRegister = async () => {
        try {
            const {name, email, password} = this.state;
            console.log(this.state);
            await firebase.register(name, email, password);

            this.props.history.replace('/dashboard')

        } catch(error) {
            alert(error.message);
        }
    }

    render() {
        return(
            <div>
                <h1 className="register-h1">New user</h1>
                <form onSubmit={this.register} id="register">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} autoFocus autoComplete="off"
                    onChange={e => this.setState({name: e.target.value})} placeholder="Mike"/><br/>

                    <label>Email:</label>
                    <input type="text" value={this.state.email} autoComplete="off" 
                    onChange={e => this.setState({email: e.target.value})} placeholder="test@test.com"/><br/>

                    <label>Password:</label>
                    <input type="password" value={this.state.password} autoComplete="off"
                    onChange={e => this.setState({password: e.target.value})}/>

                    <button type="submit">Register</button>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(Register);