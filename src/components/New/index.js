import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './new.css';
import firebase from './../../firebase';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            description: '',
            error: ''
        };

        this.save = this.save.bind(this);
    }

    componentDidMount() {
        if(!firebase.getCurrent()) {
            this.props.history.replace('/login');
            return null;
        }
    }

    save = async (e) => {
        e.preventDefault();

        if (this.state.title !== '' && this.state.image !== '' && this.state.description) {
            let posts = firebase.app.ref('posts');
            let key = posts.push().key;

            posts.child(key).set({
                title: this.state.title,
                image: this.state.image,
                description: this.state.description,
                author: localStorage.name
            });

            this.props.history.push('/dashboard');
        } else {
            this.setState({error: 'Fill out all inputs!'});
        }
    }

    render() {
        return (
            <div>
                <header id="new">
                    <Link to="/dashboard">Back</Link>
                </header>
                <form id="new-post" onSubmit={this.save}>
                    <span>{this.state.error}</span>
                    <label>Title:</label>
                    <input type="text" placeholder="Post name" value={this.state.title}
                    onChange={e => this.setState({title: e.target.value})} />

                    <label>Image:</label>
                    <input type="text" placeholder="Image url" value={this.state.image}
                    onChange={e => this.setState({image: e.target.value})} />

                    <label>Description:</label>
                    <textarea placeholder="Image url" value={this.state.description}
                    onChange={e => this.setState({description: e.target.value})}/>

                    <button type="submit" >Save</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);