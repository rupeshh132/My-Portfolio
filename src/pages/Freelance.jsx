import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Freelance = () => {
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

  const services = [
    {
      num: "01",
      title: "BUSINESS WEBSITES",
      desc: "Professional websites that establish credibility, showcase services and generate enquiries for businesses.",
      items: [
        "Corporate Websites", "Startup Websites", "Agency Websites", 
        "Service Business Websites", "Construction & Architecture Websites", 
        "Law Firm Websites", "Finance / CA Websites", "NGO / Non-profit Websites"
      ]
    },
    {
      num: "02",
      title: "E-COMMERCE & MARKETPLACES",
      desc: "Online platforms designed to showcase products, manage customers and support real-world selling workflows.",
      items: [
        "E-commerce Websites", "Product Catalogues", 
        "Multi-vendor Marketplaces", "Classifieds / Buy & Sell Platforms"
      ]
    },
    {
      num: "03",
      title: "BOOKING & LEAD GENERATION",
      desc: "Websites that help businesses receive enquiries, bookings, appointments and customer requests.",
      items: [
        "Real Estate Websites", "Hotel & Hospitality Websites", 
        "Restaurant Websites", "Clinic / Healthcare Websites", 
        "Gym & Fitness Websites", "Salon Websites", 
        "Travel & Tourism Websites", "Event Websites", "Appointment Booking Systems"
      ]
    },
    {
      num: "04",
      title: "PORTFOLIO & CONTENT",
      desc: "Fast, visually polished websites for individuals, creators, professionals and content-driven brands.",
      items: [
        "Personal Portfolio Websites", "Developer Portfolios", 
        "Photography Websites", "Blogs", 
        "News / Magazine Websites", "Wedding Websites"
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container">
        
        {/* Hero Section */}
        <div style={{ marginBottom: '100px', maxWidth: '900px' }}>
          <h1 className="h1 scroll-reveal" style={{ marginBottom: '24px', lineHeight: '1.1' }}>
            Websites & Web Applications Built for Real Businesses
          </h1>
          <p className="lead scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', maxWidth: '700px' }}>
            From high-converting business websites to custom web applications, I build digital products around your business goals.
          </p>
        </div>

        {/* Services List */}
        <div style={{ marginBottom: '120px' }}>
          {services.map((service, idx) => (
            <div 
              key={service.num} 
              className={`scroll-reveal stagger-${(idx % 4) + 1}`}
              style={{ 
                borderTop: '1px solid var(--border-color)', 
                padding: '40px 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '40px'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--muted-ink)', marginBottom: '8px' }}>{service.num}</span>
                <h2 className="h3" style={{ marginBottom: '16px' }}>{service.title}</h2>
              </div>
              
              <div>
                <p className="body" style={{ color: 'var(--muted-ink)', marginBottom: '32px', maxWidth: '500px' }}>{service.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  {service.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', background: 'var(--ink)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                      <span className="small" style={{ color: 'var(--ink)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 05 - Advanced Custom Web Apps (Highlighted) */}
          <div 
            className="scroll-reveal"
            style={{ 
              background: 'var(--ink)', 
              color: 'var(--light-text)',
              padding: '60px 40px',
              borderRadius: '4px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}
          >
            <div>
              <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--muted-light-text)', marginBottom: '8px' }}>05</span>
              <h2 className="h3" style={{ marginBottom: '16px' }}>CUSTOM WEB APPLICATIONS</h2>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '24px' }}>ADVANCED SOLUTIONS</div>
            </div>
            
            <div>
              <p className="body" style={{ color: 'var(--muted-light-text)', marginBottom: '32px', maxWidth: '500px' }}>
                Custom web applications built around specific business workflows, users, roles and operational requirements.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {[
                  "CRM Systems", "ERP / Business Management Systems", "LMS / Online Course Platforms", 
                  "Job Portals", "Inventory Management Systems", "Library Management Systems", 
                  "School Management Systems", "Hospital Management Systems", "Admin Dashboards", 
                  "SaaS Applications", "Custom Web Applications"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', background: 'var(--light-text)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                    <span className="small" style={{ color: 'var(--light-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="scroll-reveal" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Have a project in mind?</h2>
          <p className="body" style={{ color: 'var(--muted-ink)', marginBottom: '40px', maxWidth: '600px' }}>
            Tell me what you're building, and let's turn the idea into a reliable web experience.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-arrow dark" style={{ background: 'var(--ink)', color: 'var(--light-text)', padding: '12px 24px', borderRadius: '4px' }}>
              <span className="arrow-box" style={{ borderColor: 'rgba(255,255,255,0.2)' }}><span className="arrow-inner">↗</span></span>
              <span style={{ fontWeight: 600 }}>Start a Project</span>
            </Link>
            <Link to="/work" className="btn-arrow dark" style={{ border: '1px solid var(--border-color)', padding: '12px 24px', borderRadius: '4px' }}>
              <span className="arrow-box"><span className="arrow-inner">→</span></span>
              <span style={{ fontWeight: 600 }}>View My Work</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Freelance;
