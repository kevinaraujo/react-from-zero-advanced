import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from './../../firebase';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.enter = this.enter.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        if(firebase.getCurrent()) {
            return this.props.history.replace('/dashboard');
        }
    }

    enter(e) {
        e.preventDefault(); 

        this.login();
    }

    login = async () => {
        const {email, password} = this.state;

        try {
            firebase.login(email, password)
            .catch((error) => {
                if(error.code === 'auth/user-not-found') {
                    alert('User not found.');
                } else {
                    alert(`Error code: ${error.code}`);
                    return null;
                }
            }); 

            this.props.history.replace('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.enter} id="login">
                    <label>Email:</label>
                    <input type="email" autoComplete="off" autoFocus value={this.state.email}
                     onChange={(e)  => this.setState({email: e.target.value})}
                     placeholder="teste@gmail.com"/> 

                     <label>Password:</label>
                     <input type="password" autoComplete="off" autoFocus value={this.state.password}
                      onChange={(e)  => this.setState({password: e.target.value})}/> 

                      <button type="submit">Entrar</button>

                      <Link to="/register">Ainda não possui uma conta?</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);