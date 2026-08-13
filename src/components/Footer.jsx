import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col scroll-reveal stagger-1">
          <h2 className="statement" style={{ color: 'var(--light-text)', maxWidth: '400px', marginBottom: '24px' }}>Scaling Start-ups for Growth.</h2>
        </div>
        <div className="footer-col scroll-reveal stagger-2">
          <h3 className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '16px' }}>/Quick links</h3>
          <ul>
            <li><Link to="/" className="footer-pill">Home</Link></li>
            <li><Link to="/work" className="footer-pill">Works</Link></li>
            <li><Link to="/blog" className="footer-pill">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-col scroll-reveal stagger-3">
          <h3 className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '16px' }}>/Contact</h3>
          <a href="mailto:vrupesh132@gmail.com" className="footer-pill">vrupesh132@gmail.com</a>
        </div>
      </div>
      <div className="footer-huge-text scroll-reveal">RUPESH</div>
    </footer>
  );
};

export default Footer;
