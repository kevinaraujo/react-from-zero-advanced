import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import firebase from './firebase';
import './App.css';
import './global.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firebaseInitialized: false
    }
  }

  componentDidMount() {    
    firebase.isInitialized().then(result => {
      this.setState({ firebaseInitialized: result });
    });
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>  Loading...</h1>
    )
  }
}

export default App;
