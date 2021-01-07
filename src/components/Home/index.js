import React, { Component } from 'react';
import Start from '../Start';
import About from '../About';
import Contact from '../Contact';
import './../../styles.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Start />
                <About />
                <Contact />
            </div>
        );  
    }
}
export default Home;