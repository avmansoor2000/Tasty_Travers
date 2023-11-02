import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleLogin = () => {
    // You can add authentication logic here (e.g., check against a database, API).
    // For a basic example, you can hardcode a username and password to check.
    if (username === 'user' && password === 'password') {
      // Authentication successful, redirect or show a success message.
      console.log('Authentication successful');
    } else {
      // Authentication failed, show an error message.
      console.error('Authentication failed');
    }
  }

  return (
    <div className='login-form'>
      
      <form className='form'>
      <h1 className='login'>Login</h1>
        <div>
          <label>Username:</label>
          
          <input type="text" name="username" value={username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        <br />
        <Link to='/signup'>
        <h3 href="">Don't have an account ? Signup</h3>
        </Link>
      </form>
      
    </div>
  );
}

export default LoginForm;
