import React, { Component } from 'react';
import img from './assets/biscoito.png';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sentence: ''
        }

        this.frases = [
            'sentence 1',
            'sentence 2',
            'sentence 3',
            'sentence 4',
            'sentence 5',
            'sentence 6',
            'sentence 7',
            'sentence 8'
        ];

        this.breakCookie = this.breakCookie.bind(this);
    }

    breakCookie() {
        let RandomNumber = Math.floor(Math.random() * this.frases.length);
        let sentence = `"${this.frases[RandomNumber]}"`;
        
        this.setState({ sentence });
    }

    render() {
        return (
            <div className="container">   
                <img src={img} className="img"/>
                <Button name="Open cookie" btnAction={this.breakCookie}/>
                <h3 className="sentence">{this.state.sentence}</h3>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.btnAction}>{this.props.name}</button> 
            </div>
        );
    }
}

export default App;