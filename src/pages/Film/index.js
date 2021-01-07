import React, {Component} from 'react';
import './film.css';

class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({ film: json });
        });
        
    }

    render() {
        return (
            <div className="film-info">
                <h1>{this.state.film.nome}</h1>
                <img src={this.state.film.foto}/>
                {
                    this.state.film.length ? 
                        <h3>Sinopse</h3> 
                    : null
                }
                {this.state.film.sinopse}
            </div>
        );
    }
}

export default Film;