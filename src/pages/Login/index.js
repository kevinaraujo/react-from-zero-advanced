import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import './index.css';
import logo from '../../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if ( email !== '' && password !== '') {
      login({email, password});
    }
  }

  return(
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="System Logo"/>
        </div>

        <form onSubmit={ handleSubmit }>
          <h1>Login</h1>

          <input type="text" placeholder="email@email.com" 
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }/>

          <input type="password" placeholder="********" 
            value={ password }
            onChange={ (e) => setPassword(e.target.value) } />

          <button type="submit">
            { loadingAuth ? 'Loading...' : 'Access' }
          </button>

          <Link to="/register">Create new account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;