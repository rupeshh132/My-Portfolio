import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Submit Inquiry');

  // Trigger animations on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Sent Successfully!');
      e.target.reset();
      setTimeout(() => setFormStatus('Submit Inquiry'), 3000);
    }, 1500);
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <h1 className="scroll-reveal" style={{ textAlign: 'left', fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '24px' }}>
              Let's build<br />something great.
            </h1>
            <p className="body scroll-reveal stagger-1" style={{ fontSize: '20px', color: 'var(--muted-ink)', marginBottom: '32px', maxWidth: '400px' }}>
              Have an idea? Looking for a technical partner? Or just want to say hi? Drop a message.
            </p>
            
            <div className="scroll-reveal stagger-2" style={{ marginBottom: '32px' }}>
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>Direct contact</div>
              <a href="mailto:vrupesh132@gmail.com" style={{ display: 'block', color: 'var(--ink)', textDecoration: 'none', marginBottom: '8px', fontSize: '18px' }}>vrupesh132@gmail.com</a>
              <a href="tel:+918090683207" style={{ display: 'block', color: 'var(--ink)', textDecoration: 'none', fontSize: '18px' }}>+91 8090683207</a>
            </div>

            <div className="scroll-reveal stagger-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://github.com/rupeshh132" target="_blank" rel="noreferrer" className="social-icon github" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rupesh-vishwakarma-10a904225/" target="_blank" rel="noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/rupeshh132/" target="_blank" rel="noreferrer" className="social-icon leetcode" aria-label="LeetCode">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 1.91 5.345 5.345 0 0 0 1.258 2.768l.2.214s0 .001.001.002l1.97 2.115 2.138 2.296 2.134 2.292a1.373 1.373 0 0 0 2.378-1.077 1.372 1.372 0 0 0-.411-.912l-2.023-2.173-2.134-2.292-1.927-2.069a2.532 2.532 0 0 1-.617-1.326 2.529 2.529 0 0 1 .059-.955 2.535 2.535 0 0 1 .59-1.01l4.032-4.318c.253-.27.502-.544.757-.812 1.31-1.379 2.62-2.756 3.931-4.136a1.373 1.373 0 0 0 .399-.959 1.37 1.37 0 0 0-.422-.976A1.376 1.376 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form scroll-reveal stagger-2">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="project">Your Project</label>
                <textarea id="project" className="form-input" rows="5" required style={{ resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={formStatus === 'Sending...'}>
                <span>{formStatus}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
