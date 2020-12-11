import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            gender: 'm'
        };
    }

    changeInput(input, e) {
        this.setState({
            ...this.state,
            [input] : e.target.value
        });
    }

    render() {
        return (
            <div>   
                <h2>Login</h2>
                gender:
                <select name="gender" value={this.state.gender} 
                    onChange={(e) => this.changeInput('gender', e)}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                Email: 
                <input type="text" name="email" value={this.state.email} 
                    onChange={(e) => this.changeInput('email', e)}/>
                Password: 
                <input type="text" name="password" value={this.state.password}
                    onChange={(e) => this.changeInput('password', e)}/>

                <div>
                    <div>{this.state.email}</div>
                    <div>{this.state.password}</div>
                    <div>{this.state.gender}</div>
                </div>
            </div>
        );
    }
}

export default App;