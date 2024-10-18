import React, { useState,useContext } from "react";

import{ Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

import { Link } from "react-router-dom" ;

import "../styles/login.css";

import registering from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from '../context/AutoContext';
import { BASE_URL } from "../utils/config"; 


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or API call for registration
    console.log('User registered:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Your Account</h2>
        <p className="welcome-text">Join us and plan your dream trips!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="footer-text">Already have an account? <a href="/ login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;