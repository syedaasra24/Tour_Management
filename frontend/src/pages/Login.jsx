import React, { useState } from 'react';
import '../styles/login.css';

//import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Travel With Us</h2>
        <p className="welcome-text">Plan your perfect trip!</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="footer-text">New here? <a href="/ register">Register Now</a></p>
      </div>
    </div>
  );
};

export default Login;