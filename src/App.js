import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                gender: 'm'
            }
        };

        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(e) {
        const form = this.state.form;

        form[e.target.name] = e.target.value;

        this.setState({
            form: form
        });
    }

    render() {
        return (
            <div>   
                <h2>Login</h2>
                gender:
                <select name="gender" value={this.state.form.gender} 
                    onChange={this.changeInput}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
                Email: 
                <input type="text" name="email" value={this.state.form.email} 
                    onChange={this.changeInput}/>
                Password: 
                <input type="text" name="password" value={this.state.form.password}
                    onChange={this.changeInput}/>

                <div>
                    <div>{this.state.form.email}</div>
                    <div>{this.state.form.password}</div>
                    <div>{this.state.form.gender}</div>
                </div>
            </div>
        );
    }
}

export default App;