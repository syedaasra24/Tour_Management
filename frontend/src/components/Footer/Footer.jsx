import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';

const quickLinks = [
  { path: "/about", display: 'About Us' },
  { path: "/tours", display: 'Our Services' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

const socialLinks = [
  { href: 'https://www.youtube.com', iconClass: 'ri-youtube-line' },
  { href: 'https://www.github.com', iconClass: 'ri-github-line' },
  { href: 'https://www.facebook.com', iconClass: 'ri-facebook-line' },
  { href: 'https://www.instagram.com', iconClass: 'ri-instagram-line' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
              <p>Creating memorable experiences one journey at a time.</p>
              <div className="follow-us">
              <h5>Fllow us at : </h5>
              </div>
            </div>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="ri-map-pin-line"></i> Address: 123 Main St, City, Country</li>
              <li><i className="ri-mail-line"></i> Email: info@website.com</li>
              <li><i className="ri-phone-fill"></i> Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} Designed and developed by Tours Tales Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;