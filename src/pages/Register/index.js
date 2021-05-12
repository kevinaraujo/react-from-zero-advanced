import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';

function Register() {
  const [name, setName] = useState('');
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
          <h1>Registration</h1>
      
          <input type="text" placeholder="Your name" 
            value={ name }
            onChange={ (e) => setName(e.target.value) }/>

          <input type="text" placeholder="email@email.com" 
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }/>

          <input type="password" placeholder="********" 
            value={ password }
            onChange={ (e) => setPassword(e.target.value) } />
          <button type="submit">Create</button>

          <Link to="/login">Have you an account? Login here</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;