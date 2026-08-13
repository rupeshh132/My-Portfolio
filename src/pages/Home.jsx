import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import StatementReveal from '../components/StatementReveal';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Success');
      e.target.reset();
      setTimeout(() => setFormStatus('Submit Inquiry'), 3000);
    }, 1500);
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
          <div className="services-list" style={{ borderTop: '1px solid var(--border-color)' }}>
            
            <div className="service-row scroll-reveal stagger-1" style={{ padding: '32px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div className="h3">Full-Stack Development</div>
              <div className="small" style={{ color: 'var(--muted-ink)', fontWeight: 600 }}>
                React.js &bull; Spring Boot &bull; PostgreSQL
              </div>
            </div>
            
            <div className="service-row scroll-reveal stagger-2" style={{ padding: '32px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div className="h3">AI Integration</div>
              <div className="small" style={{ color: 'var(--muted-ink)', fontWeight: 600 }}>
                AI Features &bull; Resume Analysis &bull; Interview Bots
              </div>
            </div>
            
            <div className="service-row scroll-reveal stagger-3" style={{ padding: '32px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div className="h3">Frontend Architecture</div>
              <div className="small" style={{ color: 'var(--muted-ink)', fontWeight: 600 }}>
                Modern UI &bull; Tailwind CSS &bull; Framer Motion
              </div>
            </div>

            <div className="service-row scroll-reveal stagger-4" style={{ padding: '32px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div className="h3">API Design & Backend</div>
              <div className="small" style={{ color: 'var(--muted-ink)', fontWeight: 600 }}>
                Scalable APIs &bull; Security &bull; Database Management
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <h2 className="h2 scroll-reveal">Featured Projects</h2>
            <a href="/work" className="btn-arrow dark scroll-reveal stagger-1">
              <span className="rolling-text"><span className="rolling-text-inner"><span>View All Work</span><span>View All Work</span></span></span>
              <div className="arrow-box">
                <div className="arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <a href="https://devlens-ai-pearl.vercel.app" target="_blank" rel="noreferrer" className="card scroll-reveal stagger-1">
              <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
                <img src="/assets/devlens-ai.png" alt="DevLens AI" className="card-mockup" />
              </div>
              <div className="card-content" style={{ marginTop: '12px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>DevLens AI</h3>
                <p style={{ fontSize: '16px', color: 'var(--ink)', margin: '4px 0 0 0', opacity: 0.8 }}>AI-Powered Career Prep Platform / SaaS Web App</p>
              </div>
            </a>
            
            <a href="https://jankalyan-coral.vercel.app" target="_blank" rel="noreferrer" className="card scroll-reveal stagger-2">
              <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
                <img src="/assets/jankalyan.png" alt="JanKalyan" className="card-mockup" />
              </div>
              <div className="card-content" style={{ marginTop: '12px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>JanKalyan</h3>
                <p style={{ fontSize: '16px', color: 'var(--ink)', margin: '4px 0 0 0', opacity: 0.8 }}>Civic Tech Platform / Public Grievance Redressal</p>
              </div>
            </a>

            <a href="#" className="card scroll-reveal stagger-3">
              <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Kavi" className="card-mockup" />
              </div>
              <div className="card-content" style={{ marginTop: '12px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>AI Portfolio</h3>
                <p style={{ fontSize: '16px', color: 'var(--ink)', margin: '4px 0 0 0', opacity: 0.8 }}>Personal Web Experience</p>
              </div>
            </a>

            <a href="#" className="card scroll-reveal stagger-4">
              <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="PostWing" className="card-mockup" />
              </div>
              <div className="card-content" style={{ marginTop: '12px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>Dashboard Pro</h3>
                <p style={{ fontSize: '16px', color: 'var(--ink)', margin: '4px 0 0 0', opacity: 0.8 }}>React Analytics Dashboard</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="h2 scroll-reveal" style={{ marginBottom: '60px' }}>Testimonials</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            
            <div className="flip-card scroll-reveal stagger-1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="h3" style={{ color: 'white' }}>Colleague</h3>
                </div>
                <div className="flip-card-back">
                  <p className="small" style={{ marginBottom: '24px', fontStyle: 'italic' }}>"Rupesh is an exceptional developer with a great eye for design and architecture. His work on AI integration is top-notch."</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>Senior Developer</div>
                      <div style={{ color: 'var(--muted-light-text)', fontSize: '12px' }}>Client/Colleague</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card scroll-reveal stagger-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="h3" style={{ color: 'white' }}>GlobalTech</h3>
                </div>
                <div className="flip-card-back">
                  <p className="small" style={{ marginBottom: '24px', fontStyle: 'italic' }}>"The clear, scalable systems built have completely transformed our workflow. Highly recommended."</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>John Smith</div>
                      <div style={{ color: 'var(--muted-light-text)', fontSize: '12px' }}>CTO, GlobalTech</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flip-card scroll-reveal stagger-3">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="h3" style={{ color: 'white' }}>Nexus</h3>
                </div>
                <div className="flip-card-back">
                  <p className="small" style={{ marginBottom: '24px', fontStyle: 'italic' }}>"Incredible design sensibilities matched with flawless execution."</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>Alex Chen</div>
                      <div style={{ color: 'var(--muted-light-text)', fontSize: '12px' }}>Founder, Nexus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card scroll-reveal stagger-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="h3" style={{ color: 'white' }}>Vertex</h3>
                </div>
                <div className="flip-card-back">
                  <p className="small" style={{ marginBottom: '24px', fontStyle: 'italic' }}>"The best creative developer we've worked with. Period."</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>Sarah Lee</div>
                      <div style={{ color: 'var(--muted-light-text)', fontSize: '12px' }}>Design Lead, Vertex</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Thoughts / Blog */}
      <section className="section">
        <div className="container">
          <h2 className="h2 scroll-reveal" style={{ marginBottom: '60px' }}>Thoughts</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            <a href="#" className="card scroll-reveal stagger-1" style={{ height: '460px' }}>
              <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
                <img src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80" alt="Blog 1" className="card-img" style={{ filter: 'grayscale(100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                  <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Oct 12, 2026</div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>Building Trust Through Clear Design</h3>
                  <p className="small" style={{ opacity: 0.8 }}>How simplicity fosters user confidence.</p>
                </div>
              </div>
            </a>

            <a href="#" className="card scroll-reveal stagger-2" style={{ height: '460px' }}>
              <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
                <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80" alt="Blog 2" className="card-img" style={{ filter: 'grayscale(100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                  <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Sep 28, 2026</div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>The Role of Art Direction</h3>
                  <p className="small" style={{ opacity: 0.8 }}>Elevating brand systems in digital products.</p>
                </div>
              </div>
            </a>

            <div className="scroll-reveal stagger-3" style={{ height: '460px', backgroundColor: 'var(--ink)', borderRadius: 'var(--radius-lg)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/>%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"/>%3C/svg%3E")', opacity: 0.1, pointerEvents: 'none' }}></div>
              
              <h3 className="h3" style={{ color: 'var(--light-text)', position: 'relative', zIndex: 1 }}>See how we shape brands with clarity and craft— explore our blog</h3>
              
              <a href="/blog" className="btn-arrow light" style={{ position: 'relative', zIndex: 1, alignSelf: 'flex-start' }}>
                <span className="rolling-text"><span className="rolling-text-inner"><span>Read Blog</span><span>Read Blog</span></span></span>
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
              <h2 className="massive-title scroll-reveal" style={{ textAlign: 'left', fontSize: 'var(--font-h1)', marginBottom: '24px' }}>Let's talk.</h2>
              <p className="body scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', marginBottom: '40px' }}>Support line: +91 8090683207</p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com/rupeshh132" target="_blank" rel="noreferrer" className="btn-arrow dark scroll-reveal stagger-1" aria-label="GitHub">
                  <div className="arrow-box">
                    <div className="social-icon-wrapper">
                      <div className="social-icon-inner">
                        <span>GH</span>
                        <span>GH</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/rupesh-vishwakarma-10a904225/" target="_blank" rel="noreferrer" className="btn-arrow dark scroll-reveal stagger-2" aria-label="LinkedIn">
                  <div className="arrow-box">
                    <div className="social-icon-wrapper">
                      <div className="social-icon-inner">
                        <span>IN</span>
                        <span>IN</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://leetcode.com/u/rupeshh132/" target="_blank" rel="noreferrer" className="btn-arrow dark scroll-reveal stagger-3" aria-label="LeetCode">
                  <div className="arrow-box">
                    <div className="social-icon-wrapper">
                      <div className="social-icon-inner">
                        <span>LC</span>
                        <span>LC</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="btn-arrow dark scroll-reveal stagger-4" aria-label="X (Twitter)">
                  <div className="arrow-box">
                    <div className="social-icon-wrapper">
                      <div className="social-icon-inner">
                        <span>X</span>
                        <span>X</span>
                      </div>
                    </div>
                  </div>
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
                  <textarea id="project" className="form-input" rows="4" required style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn-submit" disabled={formStatus === 'Sending...'}>
                  <span className="rolling-text"><span className="rolling-text-inner"><span>{formStatus}</span><span>{formStatus}</span></span></span>
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
