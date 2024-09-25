import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Perform login logic
    // You can make an API call or check the credentials here
    if (username === 'admin' && password === 'password') {
      // Successful login, navigate to the dashboard or home page
      navigate('/dashboard');
    } else {
      // Display an error message or perform other actions
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="username" className="login-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="login-input"
            required
          />
        </div>
        <div className="login-field">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;