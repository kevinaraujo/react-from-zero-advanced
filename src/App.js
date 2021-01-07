import React, { Component } from 'react';
import {Container, Head, Title, Welcome} from './styles';

class App extends Component {
    render() {
        return (
            <Container>
                <Head>
                    <Title>Menu</Title>
                </Head>

                <Welcome color="00ff00" size="10">Welcome</Welcome>
            </Container>
        );  
    }
}

export default App;