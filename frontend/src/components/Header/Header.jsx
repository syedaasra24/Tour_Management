
import React, { useRef, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaAngleLeft } from 'react-icons/fa'; 
import './header.css';
import logo from '../../assets/images/logo2.png';
import { AuthContext } from './../../context/AuthContext';

const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-content-evenly'>
            {/* =======  logo start ======== */}
            <div className='logo'>
              <img src={logo} alt="Logo" />
            </div>
            {/* ===========  logo end  ======= */}

            {/* ===========  menu start  ======= */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={({ isActive }) => isActive ? 'active_link' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ===========  menu end ======= */}

            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                {user ? (
                  <>
                    <h5 className="mb-0 text-white">{user.username}</h5>
                    <button className="btn-logout" onClick={logout}><FaAngleLeft className='icon' />&nbsp;Logout</button>
                  </>
                ) : (
                  <>
                    <button className='btn secondary_btn'>
                      <Link to='/login'>
                        <FaSignInAlt className="icon" />&nbsp;Login
                      </Link>
                    </button>
                    <button className='btn primary_btn'>
                      <Link to='/register'>
                        <FaUserPlus className="icon" />&nbsp;Register
                      </Link>
                    </button>
                  </>
                )}
              </div>

              <span className='mobile_menu' onClick={toggleMenu}>
                <i className="ri-menu-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
