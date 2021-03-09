import React, {Component} from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle/>
        <Routes/>
      </>
    );
  }
}

export default App;
