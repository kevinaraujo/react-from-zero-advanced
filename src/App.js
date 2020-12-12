import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            error: ''
        }

        this.submitForm = this.submitForm.bind(this);
    }
    
    submitForm(e) {
        e.preventDefault();

        const {name, email, password} = this.state;

        if (name === '' || email === '' || password === '') {
            this.setState({
                error: 'Some field is empty.'
            });
            return;
        } 

        alert(`name: ${name} \n email: ${email} \n password: ${password}`);
        this.setState({error: ''});       
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitForm}>
                    Name: <input type="text" name="name" value={this.state.name}  
                        onChange={e => this.setState({ name: e.target.value })}/><br/>

                    Email: <input type="text" name="email" value={this.state.email} 
                        onChange={e => this.setState({ email: e.target.value })}/><br/>

                    Password: <input type="password" name="password" value={this.state.password} 
                        onChange={e => this.setState({ password: e.target.value })}/><br/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default App;