import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class SetCookie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.setState({user: 'nice'});
    }

    componentDidUpdate() {

        const user = { name: 'Kevin' };

        const cookies = new Cookies();
        cookies.set('user', user, {
            expires: new Date(Date.now()+60000)
        });

        console.log('setado', cookies.get('user'));
    }

    render() {
        return (
            <div>
                Cookies set!
            </div>
        );
    }    
    
}

export default SetCookie;