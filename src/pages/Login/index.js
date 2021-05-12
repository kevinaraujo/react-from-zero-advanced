import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    alert('clicked');
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
          <button type="submit">Access</button>

          <Link to="/register">Create new account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;