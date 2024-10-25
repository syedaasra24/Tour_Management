// import React from 'react';
// import './footer.css';

// import { Link } from 'react-router-dom';


// import logo from '../../assets/images/logo2.png';

// const quick_links = [
//   {
//     path: "/gallery",
//     display: 'Gallery',
//   },
//   {
//     path: '/login',
//     display: 'Login',
//   },
//   {
//     path: '/register',
//     display: 'Register',
//   },
// ];

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3">
//             <div className="logo">
//               <img src={logo} alt="" />
//               <p>lorem</p>
//               <div className="social-links">
//                 <a href="https://your-youtube-link" target="_blank" rel="noopener noreferrer">
//                   <i className="ri-youtube-line"></i>
//                 </a>
//                 <a href="https://your-github-link" target="_blank" rel="noopener noreferrer">
//                   <i className="ri-github-line"></i>
//                 </a>
//                 <a href="https://your-facebook-link" target="_blank" rel="noopener noreferrer">
//                   <i className="ri-facebook-line"></i>
//                 </a>
//                 <a href="https://your-instagram-link" target="_blank" rel="noopener noreferrer">
//                   <i className="ri-instagram-line"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <h5 className="footer-link-title">Discover</h5>
//             <ul>
//               {quick_links.map((item, index) => (
//                 <li key={index}>
//                   <Link to={item.path}>{item.display}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ... Similar structure for Quick Links and Contact sections */}

//           <div className="col-lg-3">
//             <h5 className="footer-link-title">Contact</h5>
//             <ul>
//               <li>
//                 <i className="ri-map-pin-line"></i>
//                 Address: Your Address
//               </li>
//               <li>
//                 <i className="ri-mail-line"></i>
//                 Email: your@email.com
//               </li>
//               <li>
//                 <i className="ri-phone-fill"></i>
//                 Phone: Your Phone Number
//               </li>
//             </ul>
//           </div>

//           <div className="col-lg-12 text-center pt-5">
//             <p className="copyright">
//               Copyright {year}, design and develop by abc. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';

const quickLinks = [
  { path: "/about", display: 'About Us' },
  { path: "/services", display: 'Our Services' },
  { path: "/contact", display: 'Contact Us' },
  { path: "/gallery", display: 'Gallery' },
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
              <p>Follow us at :-</p>
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
