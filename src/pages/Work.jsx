import React, { useEffect } from 'react';

const Work = () => {
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

  return (
    <main style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container">
        
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <h1 className="h1 scroll-reveal" style={{ fontSize: 'clamp(56px, 8vw, 96px)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Selected Works
          </h1>
          <p className="body scroll-reveal stagger-1" style={{ fontSize: '20px', color: 'var(--muted-ink)' }}>
            A curated collection of my recent projects, blending strategic design with deep technical execution to create digital experiences that perform.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          
          <a href="https://devlens-ai-pearl.vercel.app" target="_blank" rel="noreferrer" className="card scroll-reveal stagger-1">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="/assets/devlens-ai.png" alt="DevLens AI" className="card-mockup" />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>DevLens AI</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>AI-Powered Code Assistant</p>
            </div>
          </a>
          
          <a href="https://jankalyan-coral.vercel.app" target="_blank" rel="noreferrer" className="card scroll-reveal stagger-2">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="/assets/jankalyan.png" alt="JanKalyan" className="card-mockup" />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>JanKalyan</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Public Welfare Portal</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-3">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="AI Portfolio" className="card-mockup" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12px' }} />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>AI Portfolio</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Interactive AI Experience</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-4">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard Pro" className="card-mockup" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12px' }} />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>Dashboard Pro</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Analytics & Data Vis</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-1">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="FinTech App" className="card-mockup" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12px' }} />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>FinTech App</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Secure Banking UI</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-2">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="E-Commerce" className="card-mockup" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12px' }} />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>Nova Shop</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>E-Commerce Platform</p>
            </div>
          </a>

        </div>
      </div>
    </main>
  );
};

export default Work;
