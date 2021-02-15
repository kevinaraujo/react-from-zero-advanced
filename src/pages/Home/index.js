import React, {Component} from 'react';
import Cookies from 'universal-cookie';

class Home extends Component {
    render() {
        const cookies = new Cookies();
        let u = cookies.get('user');
        console.log('u', u);
        return (
            <div>
                <h1>Page Home</h1>
            </div>
        );
    }
}

export default Home;