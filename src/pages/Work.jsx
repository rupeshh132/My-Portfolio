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
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: '#EFEFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="/assets/devlens-ai.png" alt="DevLens AI" className="card-mockup" />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>DevLens AI</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>AI-Powered Code Assistant</p>
            </div>
          </a>
          
          <a href="https://jankalyan-coral.vercel.app" target="_blank" rel="noreferrer" className="card scroll-reveal stagger-2">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: '#EFEFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <img src="/assets/jankalyan.png" alt="JanKalyan" className="card-mockup" />
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>JanKalyan</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Public Welfare Portal</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-3">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div style={{ width: '100%', height: '100%', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <div style={{ color: 'rgba(255,255,255,0.8)', marginTop: '16px', fontWeight: 500, fontSize: '14px', letterSpacing: '0.1em' }}>MARKETPLACE ARCHITECTURE</div>
              </div>
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>BookMyVendor</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>Modular Monolith & PostgreSQL</p>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-4">
            <div className="card-img-wrapper" style={{ aspectRatio: '1.45/1', background: '#EFEFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div style={{ width: '100%', height: '100%', border: '2px solid rgba(0,0,0,0.1)', borderRadius: '4px', background: 'rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <div style={{ color: 'var(--ink)', marginTop: '16px', fontWeight: 500, fontSize: '14px', letterSpacing: '0.1em' }}>AGRITECH / ML</div>
              </div>
            </div>
            <div className="card-content" style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>FarmChain</h3>
              <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '4px' }}>AI-Driven Crop Forecasting</p>
            </div>
          </a>

        </div>
      </div>
    </main>
  );
};

export default Work;
