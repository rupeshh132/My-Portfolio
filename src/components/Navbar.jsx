import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleScrollToTop = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isOpen ? 'open' : ''}`} id="main-nav">
        <Link to="/" className="nav-logo" onClick={handleScrollToTop}>Rupesh</Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link" onClick={handleScrollToTop}>
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
          <a href="/assets/Rupesh_Vishwakarma_Resume.pdf" target="_blank" rel="noreferrer" className="nav-link" style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '24px', fontWeight: 600 }}>
            Resume
          </a>
        </div>

        <button className="nav-trigger" id="nav-trigger" aria-label="Toggle Menu" onClick={toggleMenu}>
          <div className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
