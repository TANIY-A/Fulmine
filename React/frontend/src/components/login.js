 import React, { useState } from 'react';
import axios from 'axios';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleAuthentication = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8000/api/${isLogin ? 'login' : 'signup'}/`, credentials);
      console.log(response.data); // Handle successful authentication (e.g., store token in local storage)
    } catch (error) {
      console.error(error.response.data); // Handle authentication error
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleAuthentication}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      {/* Toggle between Login and Sign Up */}
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default Authentication;
