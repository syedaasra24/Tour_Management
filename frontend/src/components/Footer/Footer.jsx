import React from 'react';
import './footer.css';

// Assuming you're using React Router DOM
import { Link } from 'react-router-dom';

// Replace with your actual logo image path
import logo from '../../assets/images/logo2.png';

const quick_links = [
  {
    path: "/gallery",
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>lorem</p>
              <div className="social-links">
                <a href="https://your-youtube-link" target="_blank" rel="noopener noreferrer">
                  <i className="ri-youtube-line"></i>
                </a>
                <a href="https://your-github-link" target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-line"></i>
                </a>
                <a href="https://your-facebook-link" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href="https://your-instagram-link" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <h5 className="footer-link-title">Discover</h5>
            <ul>
              {quick_links.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ... Similar structure for Quick Links and Contact sections */}

          <div className="col-lg-3">
            <h5 className="footer-link-title">Contact</h5>
            <ul>
              <li>
                <i className="ri-map-pin-line"></i>
                Address: Your Anshu
              </li>
              <li>
                <i className="ri-mail-line"></i>
                Email: your@email.com
              </li>
              <li>
                <i className="ri-phone-fill"></i>
                Phone: Your Phone Number
              </li>
            </ul>
          </div>

          <div className="col-lg-12 text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by abc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;