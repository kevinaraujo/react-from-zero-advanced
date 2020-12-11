import React, {Component} from 'react';

class Feed extends Component{

    render () {
        return (
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.likes > 1 ? this.props.likes + ' likes' : this.props.likes + ' like'} / </a>   
                <a>{this.props.comments} comments</a>
                <hr/>
            </div>
        );
    }
}

export default Feed;