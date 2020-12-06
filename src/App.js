import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: '00:00:00'
        };
    }

    //AFTER COMPONENT IS LOADED, THIS FUNCTION IS CALLED ONCE
    componentDidMount() {
        
        setInterval(() => {

            this.setState({
                time: new Date().toLocaleTimeString()
            });

        },1000);
    }

    //AFETE ANY UPDATE IN STATE, THIS FUNCTION IS CALLED
    componentDidUpdate() {
        console.log('teste');
    }

    //SHOULD RETURN TRUE OR FALSE SO THAT STATES UPDATE OR NOT
    shouldComponentUpdate() {
        console.log('deve atualizar');
        return true;
    }

    render() {
        return (
            <div>
                <h1>My project: {this.state.time} </h1>
            </div>
        );
    }
}

export default App;