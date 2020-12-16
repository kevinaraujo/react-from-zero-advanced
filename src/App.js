import React, {Component} from 'react';
import Cronometro from './assets/cronometro.png';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            btnGo: 'Go'
        }

        this.counter = null;
        this.go = this.go.bind(this);
        this.clear = this.clear.bind(this);
    }

    go() {
       
        if (this.counter !== null) {
            this.setState({
                btnGo: 'Go'
            });

            clearInterval(this.counter);
            this.counter = null;
            return;
        }

        let initialTimer = this.state.timer;

        this.counter = setInterval(() => {
            this.setState({
                timer: initialTimer += 0.1
            });

        }, 100);

        this.setState({
            btnGo: 'Pause'
        });
    }

    clear() {        
        this.setState({
            timer: 0
        });
    }

    render() {
        return (
            <div className="container">
                <img src={Cronometro}/> 
                <a className="timer">{this.state.timer.toFixed(1)}</a>
                <div className="btn-area">
                    <a className="btn" onClick={this.go}>{this.state.btnGo}</a>
                    <a className="btn" onClick={this.clear}>Clear</a>    
                </div>       
            </div>
        );
    }
}

export default App;