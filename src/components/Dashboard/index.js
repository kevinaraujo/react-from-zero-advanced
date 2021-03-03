import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from './../../firebase';
import './dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.name
        };
        this.logout = this.logout.bind(this);
    }
    async componentDidMount() {
        if(!firebase.getCurrent()) {
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info) => {
            localStorage.name = info.val().name;
            this.setState({name: localStorage.name});
        });
    }

    logout = async() => {
        await firebase.logout()
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

        localStorage.removeItem('name');
        this.props.history.replace('/login');
    }

    render() {
        const email = firebase.getCurrent();
        
        return(
            <div id="dashboard">
                <div className="user-info">
                    <h1>Hi {this.state.name}</h1>
                    <Link to="/dashboard/new">New Post</Link>
                </div>
                <p>Logged as: {email}</p>
                <button onClick={() => this.logout()}>Log out</button>
            </div>
        );
    }
}

export default Dashboard;