import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './new.css';
import firebase from './../../firebase';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: null,
            url: '',
            description: '',
            error: '',
            progress: 0
        };

        this.save = this.save.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleFile = async (e) => {
        if (!e.target.files[0]) {
            return null;
        }

        const image = e.target.files[0];

        if (image.type !== 'image/png' && image !== 'image/jpeg') {
            alert('Choose a JPG or PNG file type.');
            this.setState({image: null});
            return null;
        }
        
        await this.setState({ image: image });
        this.handleUpload();
    }

    handleUpload = async () => {
        const {image} = this.state;
        const uid = firebase.getCurrentUid();

        const uploadTask = firebase.storage
        .ref(`images/${uid}/${image.name}`)
        .put(image);

        await uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

            this.setState({progress});
        },
        (error) => {
            console.log(`Error: ${error}`);
        },
        () => {
            firebase.storage.ref(`images/${uid}`)
            .child(image.name).getDownloadURL()
            .then(url => {
                this.setState({url: url});
                console.log(url);
            });
        });
    }

    componentDidMount() {
        if(!firebase.getCurrent()) {
            this.props.history.replace('/login');
            return null;
        }
    }

    save = async (e) => {
        e.preventDefault();

        if (this.state.title !== '' && 
            this.state.image !== null && 
            this.state.url !== '' && 
            this.state.description
        ) {
            let posts = firebase.app.ref('posts');
            let key = posts.push().key;

            posts.child(key).set({
                title: this.state.title,
                image: this.state.url,
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

                    <input type="file"
                    onChange={this.handleFile} /><br/>

                    {this.state.url !== '' ?
                        <img src={this.state.url} width="250" height="150" alt="post image"/>
                    : 
                        <progress value={this.state.progress} max="100"/>
                    }

                    <label>Title:</label>
                    <input type="text" placeholder="Post name" value={this.state.title}
                    onChange={e => this.setState({title: e.target.value})} />

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