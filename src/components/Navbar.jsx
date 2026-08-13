import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isOpen ? 'open' : ''}`} id="main-nav">
        <div className="nav-header">
          <Link to="/" className="nav-logo" onClick={closeMenu}>Rupesh</Link>
          <button className="nav-trigger" id="nav-trigger" aria-label="Toggle Menu" onClick={toggleMenu}>
            <div className="nav-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="nav-menu">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/work" className="nav-link" onClick={closeMenu}>
            Works
          </Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
