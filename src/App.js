import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Home, Login, Dashboard, Register, New} from './components';
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
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/dashboard/new" component={New}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>  Loading...</h1>
    )
  }
}

export default App;
