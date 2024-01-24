// SignUp.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://your-django-api/signup/', formData);
      // Handle successful signup (e.g., redirect to login page)
      console.log(response.data);
    } catch (error) {
      // Handle signup error
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
