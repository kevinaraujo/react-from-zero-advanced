import React, { Component } from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nutri: []
        };
    }

    componentDidMount() {
        let url = process.env.REACT_APP_API_URL;
        
        fetch(url) 
        .then((r) => r.json())
        .then((data) => {
            let state = this.state;
            state.nutri = data;

            this.setState(state);
        });
    }

    render() {
      
        return (
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                    { this.state.nutri.length ?
                        this.state.nutri.map((item) => {
                            return (
                               <article key={item.id} className="post">
                                   <strong className="title">{item.titulo}</strong>
                                   <img src={item.capa}/>
                                   <p>{item.subtitulo}</p>
                                   <a className="btn" href="#">Access</a>
                               </article>
                            )
                        })
                        
                        : <strong className="wait">Wait a second...</strong>
                    }
            </div>
        );
    }
}

export default App;