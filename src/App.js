import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Kevin',
            counter: 0
        };
    }

    decrease() {
        let state = this.state;
        
        state.counter--;

        this.setState(state);
    }

    increase() {
        let state = this.state;
        
        state.name = 'José';    
        state.counter++;

        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.name}</h1>
                <h3>
                    <button onClick={this.decrease.bind(this)}>-</button>
                        {this.state.counter}
                    <button onClick={this.increase.bind(this)}>+</button>
                </h3>
            </div>
        );
    }
}

export default App;