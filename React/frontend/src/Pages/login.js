// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://your-django-api/login/', credentials);
      // Handle successful login (e.g., store token in local storage)
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
