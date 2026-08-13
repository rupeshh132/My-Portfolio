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
            <span className="rolling-text"><span className="rolling-text-inner"><span>Home</span><span>Home</span></span></span>
          </Link>
          <Link to="/work" className="nav-link" onClick={closeMenu}>
            <span className="rolling-text"><span className="rolling-text-inner"><span>Works</span><span>Works</span></span></span>
          </Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>
            <span className="rolling-text"><span className="rolling-text-inner"><span>Blog</span><span>Blog</span></span></span>
          </Link>
          <a href="/#contact" className="nav-link" onClick={closeMenu}>
            <span className="rolling-text"><span className="rolling-text-inner"><span>Contact</span><span>Contact</span></span></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
