import React, {Component} from 'react';
import './home.css';
import firebase from '../../firebase';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        firebase.app.ref('posts').once('value', (snapshot) => {
            let state = this.state;
            state.posts = [];

            snapshot.forEach((childItem) => {
                state.posts.push({
                    key: childItem.key,
                    title: childItem.val().title,
                    image: childItem.val().image,
                    description: childItem.val().description,
                    author: childItem.val().author
                });
                state.posts.reverse();
                this.setState(state);
            });
        });
    }

    render() {
        return(
            <section id="post">
                {this.state.posts.map((post) => {
                    return (
                        <article key={post.key}>
                            <header>
                                <div className="title">
                                    <strong>{post.title}</strong>
                                    <span>Author: {post.author}</span>
                                </div>
                            </header>
                            <img src={post.image} alt="post image"/>
                            <footer>
                                <p>{post.description}</p>
                            </footer>
                        </article>
                    );
                })}
            </section>
        );
    }
}

export default Home;