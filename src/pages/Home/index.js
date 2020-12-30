import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }

        this.loadFilms = this.loadFilms.bind(this);
    }

    componentDidMount() {
        this.loadFilms();
    }

    loadFilms() {
        const url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({ films: json })
        });
    }

    render() {
        return (
            <div className="container">
                <div className="list-films">
                    { 
                        this.state.films.map((film) => {
                            return (
                                <article key={film.id} className="film">
                                    <strong>{film.nome}</strong>
                                    <img src={film.foto} alt="capa"/>
                                    <Link to="/">Acessar</Link>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;