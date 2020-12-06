import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div>
                <About name={this.props.name} age={this.props.age}/>
            </div>
        );  
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h2>Hi, I'm { this.props.name } </h2>
                <h3>Age: {this.props.age}</h3>
                <h3>Role: {this.props.role}</h3>
                <hr/>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Team name="Lucas" role="developer" age="26"/>
            <Team name="João" role="analyst" age="20"/>
        </div>
    );
}

export default App;