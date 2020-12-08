import React, { Component } from 'react';

class Member extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        }

        this.enter = this.enter.bind(this);
    }

    enter(name) {
        this.setState({
            name
        })
    }
    
    render() {
        return (
            <div>

                <h2>Welcome {this.state.name}</h2>

                { this.state.name === 'Visitor' ? 

                    <button onClick={ () => this.enter('Kevin') } >
                        Login
                    </button> 
                    :
                    <button onClick={ () => this.enter('Visitor')}>
                        Logout
                    </button>
                }
               
            </div>
        );
    }
}

export default Member;