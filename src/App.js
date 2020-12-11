import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Lucas', likes: 10, comments:5},
                {id: 2, username: 'Maria', likes: 200, comments:50},
                {id: 3, username: 'José', likes: 2, comments:3},
                {id: 3, username: 'Carlos', likes: 1, comments:0}
            ]
        };
    }

    render() {
        return (
            <div>   
                {this.state.feed.map((item) => {
                    return (
                        <Feed 
                            id={item.id} 
                            username={item.username} 
                            likes={item.likes} 
                            comments={item.comments} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;