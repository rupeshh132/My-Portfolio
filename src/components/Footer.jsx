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
          <h3 className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '24px' }}>/Quick links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/work" className="footer-link">Works</Link></li>
            <li><Link to="/blog" className="footer-link">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-col scroll-reveal stagger-3">
          <h3 className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '24px' }}>/Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a href="mailto:vrupesh132@gmail.com" className="footer-link">vrupesh132@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          <span className="marquee-text">Let's build something great • </span>
          <span className="marquee-text">Open for new opportunities • </span>
          <span className="marquee-text">Available for freelance • </span>
          <span className="marquee-text">Let's build something great • </span>
          <span className="marquee-text">Open for new opportunities • </span>
          <span className="marquee-text">Available for freelance • </span>
          {/* duplicate for seamless loop */}
          <span className="marquee-text">Let's build something great • </span>
          <span className="marquee-text">Open for new opportunities • </span>
          <span className="marquee-text">Available for freelance • </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
