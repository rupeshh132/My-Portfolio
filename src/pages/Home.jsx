import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import StatementReveal from '../components/StatementReveal';
import Journey from '../components/Journey';
import StackedCertifications from '../components/StackedCertifications';
import OpenSourceActivity from '../components/OpenSourceActivity';
import ServicesList from '../components/ServicesList';
import HorizontalProjects from '../components/HorizontalProjects';
import BentoTestimonials from '../components/BentoTestimonials';

const Home = () => {
  const [formStatus, setFormStatus] = useState('Submit Inquiry');

  useEffect(() => {
    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOptions = {
      threshold: 0,
      rootMargin: "0px 0px -45% 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (!entry.target.classList.contains('footer-huge-text')) {
            observer.unobserve(entry.target);
          }
        } else {
          if (entry.target.classList.contains('footer-huge-text')) {
            entry.target.classList.remove('visible');
          }
        }
      });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Faded Statement Observer
    const fadedStatements = document.querySelectorAll('.faded-statement');
    const statementObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -40% 0px" });

    fadedStatements.forEach(el => statementObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      statementObserver.disconnect();
    };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // Web3Forms Integration
    const ACCESS_KEY = "3493c270-29c8-44ff-9eb6-ba3ba7b599c0"; 

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('Success');
        e.target.reset();
        setTimeout(() => setFormStatus('Submit Inquiry'), 3000);
      } else {
        console.error("Error", data);
        setFormStatus('Error. Try again.');
        setTimeout(() => setFormStatus('Submit Inquiry'), 3000);
      }
    } catch (error) {
      console.error(error);
      setFormStatus('Error. Try again.');
      setTimeout(() => setFormStatus('Submit Inquiry'), 3000);
    }
  };

  return (
    <main>
      <Hero />
      
      {/* Scroll-Driven Statement Reveal */}
      <StatementReveal />

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="h2 scroll-reveal" style={{ marginBottom: '60px' }}>Services</h2>
          <ServicesList />
        </div>
      </section>

      {/* Featured Projects */}
      <HorizontalProjects />

      {/* Journey */}
      <Journey />

      {/* Certifications */}
      <StackedCertifications />

      {/* Open Source Activity */}
      <OpenSourceActivity />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="h2 scroll-reveal">Recommendations</h2>
            <p className="small scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', maxWidth: '360px', textAlign: 'right' }}>
              Words from people I've built with.
            </p>
          </div>
          
          <div className="scroll-reveal stagger-1">
            <BentoTestimonials />
          </div>
        </div>
      </section>

      {/* Thoughts / Blog */}
      <section className="section">
        <div className="container">
          <h2 className="h2 scroll-reveal" style={{ marginBottom: '60px' }}>Thoughts</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            <a href="#" className="card scroll-reveal stagger-1" style={{ height: '460px' }}>
              <div className="card-img-wrapper" style={{ height: '100%', borderRadius: '4px' }}>
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="Blog 1" className="card-img" style={{ filter: 'grayscale(100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                  <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Oct 12, 2026</div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>Building Trust Through Clear Design</h3>
                  <p className="small" style={{ opacity: 0.8 }}>How simplicity fosters user confidence.</p>
                </div>
              </div>
            </a>

            <a href="#" className="card scroll-reveal stagger-2" style={{ height: '460px' }}>
              <div className="card-img-wrapper" style={{ height: '100%', borderRadius: '4px' }}>
                <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80" alt="Blog 2" className="card-img" style={{ filter: 'grayscale(100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                  <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Sep 28, 2026</div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>The Role of Art Direction</h3>
                  <p className="small" style={{ opacity: 0.8 }}>Elevating brand systems in digital products.</p>
                </div>
              </div>
            </a>

            <div className="scroll-reveal stagger-3" style={{ height: '460px', backgroundColor: 'var(--ink)', borderRadius: '4px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/>%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"/>%3C/svg%3E")', opacity: 0.1, pointerEvents: 'none' }}></div>
              
              <h3 className="h3" style={{ color: 'var(--light-text)', position: 'relative', zIndex: 1 }}>See how we shape brands with clarity and craft— explore our blog</h3>
              
              <a href="/blog" className="btn-arrow light" style={{ position: 'relative', zIndex: 1, alignSelf: 'flex-start' }}>
                <span>Read Blog</span>
                <div className="arrow-box">
                  <div className="arrow-inner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
            
            <div>
              <h2 className="scroll-reveal" style={{ textAlign: 'left', fontSize: 'clamp(56px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '24px' }}>Let's talk.</h2>
              <p className="body scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', marginBottom: '40px' }}>Support line: +91 8090683207</p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://github.com/rupeshh132" target="_blank" rel="noreferrer" className="social-icon github scroll-reveal stagger-1" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rupesh-vishwakarma-10a904225/" target="_blank" rel="noreferrer" className="social-icon linkedin scroll-reveal stagger-2" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/rupeshh132/" target="_blank" rel="noreferrer" className="social-icon leetcode scroll-reveal stagger-3" aria-label="LeetCode">
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
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="project">Your Project</label>
                  <textarea id="project" name="project" className="form-input" rows="4" required style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={formStatus === 'Sending...'}>
                  <span>{formStatus}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
