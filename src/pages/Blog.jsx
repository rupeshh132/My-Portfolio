import React, { useEffect } from 'react';

const Blog = () => {
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
            Thoughts & Writing
          </h1>
          <p className="body scroll-reveal stagger-1" style={{ fontSize: '20px', color: 'var(--muted-ink)' }}>
            Insights, essays, and deep dives into design engineering, creative development, and the future of digital products.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <a href="#" className="card scroll-reveal stagger-1" style={{ height: '460px' }}>
            <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="Blog 1" className="card-img" style={{ filter: 'grayscale(100%)' }} />
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

          <a href="#" className="card scroll-reveal stagger-3" style={{ height: '460px' }}>
            <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" alt="Blog 3" className="card-img" style={{ filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Aug 14, 2026</div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>Performance as a Design Feature</h3>
                <p className="small" style={{ opacity: 0.8 }}>Why speed matters more than ever.</p>
              </div>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-1" style={{ height: '460px' }}>
            <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Blog 4" className="card-img" style={{ filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Jul 02, 2026</div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>The Evolution of Web Typography</h3>
                <p className="small" style={{ opacity: 0.8 }}>Variable fonts and modern rendering.</p>
              </div>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-2" style={{ height: '460px' }}>
            <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Blog 5" className="card-img" style={{ filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>Jun 18, 2026</div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>Designing for Accessibility</h3>
                <p className="small" style={{ opacity: 0.8 }}>Inclusive design practices.</p>
              </div>
            </div>
          </a>

          <a href="#" className="card scroll-reveal stagger-3" style={{ height: '460px' }}>
            <div className="card-img-wrapper" style={{ height: '100%', borderRadius: 'var(--radius-lg)' }}>
              <img src="https://images.unsplash.com/photo-1481481600465-45c48b2512ba?auto=format&fit=crop&w=800&q=80" alt="Blog 6" className="card-img" style={{ filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>May 05, 2026</div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>The Power of Micro-Interactions</h3>
                <p className="small" style={{ opacity: 0.8 }}>Small details, big impact.</p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </main>
  );
};

export default Blog;
