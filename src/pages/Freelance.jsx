import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Freelance = () => {
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    document.title = "Services | Rupesh Vishwakarma";
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(r => observer.observe(r));
    return () => reveals.forEach(r => observer.unobserve(r));
  }, []);

  const prices = {
    landing: { inr: 'Starts at ₹25,000', usd: 'Starts at $300' },
    ecommerce: { inr: 'Starts at ₹85,000', usd: 'Starts at $1,000' },
    saas: { inr: 'Starts at ₹1,50,000', usd: 'Starts at $1,800' },
    maintenance: { inr: '₹5,000 / month', usd: '$60 / month' }
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ marginBottom: '100px', maxWidth: '800px' }}>
          <h1 className="h1 scroll-reveal" style={{ marginBottom: '24px' }}>Build Scalable Products.</h1>
          <p className="lead scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)' }}>
            I build production-grade web applications for startups and businesses. 
            No generic templates. Strict engineering, secure payments, and custom aesthetics.
          </p>
        </div>

        {/* Pricing Tiers Header & Toggle */}
        <div className="scroll-reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', gap: '20px' }}>
          <h2 className="h2">Project Tiers</h2>
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.05)', borderRadius: '30px', padding: '4px' }}>
            <button 
              onClick={() => setCurrency('INR')}
              style={{ padding: '8px 24px', borderRadius: '24px', border: 'none', background: currency === 'INR' ? 'var(--ink)' : 'transparent', color: currency === 'INR' ? 'var(--light-text)' : 'var(--ink)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              INR (₹)
            </button>
            <button 
              onClick={() => setCurrency('USD')}
              style={{ padding: '8px 24px', borderRadius: '24px', border: 'none', background: currency === 'USD' ? 'var(--ink)' : 'transparent', color: currency === 'USD' ? 'var(--light-text)' : 'var(--ink)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              USD ($)
            </button>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          
          {/* Tier 1 */}
          <div className="card scroll-reveal stagger-1" style={{ border: '1px solid var(--border-color)', borderRadius: '4px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <h3 className="h3" style={{ marginBottom: '8px' }}>Landing Page / Portfolio</h3>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)' }}>{currency === 'INR' ? prices.landing.inr : prices.landing.usd}</div>
            <p className="small" style={{ color: 'var(--muted-ink)', marginBottom: '32px', minHeight: '48px' }}>High-conversion, SEO-optimized static sites for personal brands or single-product launches.</p>
            <ul style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                React or Next.js (Static)
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                Responsive Design
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                Basic SEO Setup
              </li>
            </ul>
            <Link to="/contact" className="btn-arrow dark" style={{ marginTop: 'auto' }}>
              <span className="arrow-box"><span className="arrow-inner">↗</span></span>
              <span style={{ fontWeight: 600 }}>Inquire</span>
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="card scroll-reveal stagger-2" style={{ background: 'var(--ink)', color: 'var(--light-text)', border: '1px solid var(--ink)', borderRadius: '4px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '16px', alignSelf: 'flex-start' }}>MOST POPULAR</div>
            <h3 className="h3" style={{ marginBottom: '8px' }}>E-commerce Platform</h3>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--light-text)' }}>{currency === 'INR' ? prices.ecommerce.inr : prices.ecommerce.usd}</div>
            <p className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '32px', minHeight: '48px' }}>Full-stack e-commerce exactly like PrintBloom. Secure, fast, and fully custom.</p>
            <ul style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--light-text)', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--light-text)', borderRadius: '50%' }}></div>
                Next.js 15 SSR + Supabase
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--light-text)', borderRadius: '50%' }}></div>
                Razorpay Payment Gateway
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--light-text)', borderRadius: '50%' }}></div>
                Custom Admin Dashboard
              </li>
            </ul>
            <Link to="/contact" className="btn-arrow light" style={{ marginTop: 'auto' }}>
              <span className="arrow-box"><span className="arrow-inner">↗</span></span>
              <span style={{ fontWeight: 600 }}>Inquire</span>
            </Link>
          </div>

          {/* Tier 3 */}
          <div className="card scroll-reveal stagger-3" style={{ border: '1px solid var(--border-color)', borderRadius: '4px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <h3 className="h3" style={{ marginBottom: '8px' }}>Custom SaaS App</h3>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)' }}>{currency === 'INR' ? prices.saas.inr : prices.saas.usd}</div>
            <p className="small" style={{ color: 'var(--muted-ink)', marginBottom: '32px', minHeight: '48px' }}>Complex web applications with AI integrations, real-time features, and scalable architecture.</p>
            <ul style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                AI API Integrations (RAG, OpenAI)
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                Complex Database (PostgreSQL)
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                Real-time WebSockets
              </li>
            </ul>
            <Link to="/contact" className="btn-arrow dark" style={{ marginTop: 'auto' }}>
              <span className="arrow-box"><span className="arrow-inner">↗</span></span>
              <span style={{ fontWeight: 600 }}>Inquire</span>
            </Link>
          </div>

        </div>

        {/* Maintenance Section */}
        <div className="scroll-reveal" style={{ paddingTop: '80px', borderTop: '1px solid var(--border-color)', marginBottom: '120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            <div>
              <h2 className="h2" style={{ marginBottom: '16px' }}>Maintenance & Retainers</h2>
              <p className="small" style={{ color: 'var(--muted-ink)' }}>Keep your application running smoothly with zero downtime.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 600 }}>Standard Maintenance</h4>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', background: 'rgba(0,0,0,0.05)', padding: '6px 16px', borderRadius: '20px' }}>
                    {currency === 'INR' ? prices.maintenance.inr : prices.maintenance.usd}
                  </span>
                </div>
                <p className="small" style={{ color: 'var(--muted-ink)', marginBottom: '24px' }}>Includes server management, database backups, security patches, and minor UI updates.</p>
                <Link to="/contact" className="btn-arrow dark">
                  <span className="arrow-box"><span className="arrow-inner">↗</span></span>
                  <span style={{ fontWeight: 600 }}>Let's Talk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Freelance;
