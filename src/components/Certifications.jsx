import React from 'react';

const Certifications = () => {
  const certs = [
    {
      title: 'Master in Full-Stack Web Development with AWS',
      issuer: 'Infosys / Springboard',
      year: '2024',
      type: 'image',
      file: '/assets/masterinfullstackwebdevelopmentwithaws_50_1719924798.jpg',
      color: '#fff3e0',
      accent: '#ff6b00',
      tags: ['AWS', 'Full-Stack', 'React', 'Node.js'],
    },
    {
      title: 'IBM CEP — Computer Engineering Program',
      issuer: 'IBM / IT Vedant',
      year: '2024',
      type: 'pdf',
      file: '/assets/IBMCEP CEPYT1IN Certificate _ IT Vedant.pdf',
      color: '#e8f0fe',
      accent: '#1a73e8',
      tags: ['IBM', 'Computer Engineering', 'Industry Program'],
    },
    {
      title: 'Full-Stack Developer Certification',
      issuer: 'Infosys BPM Ltd.',
      year: '2024',
      type: 'pdf',
      file: '/assets/infoyse certificate.pdf',
      color: '#e6f4ea',
      accent: '#137333',
      tags: ['Java', 'Spring Boot', 'Infosys'],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="h2 scroll-reveal">Certifications</h2>
          <p className="small scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)' }}>
            Proof of craft, not just code.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className={`scroll-reveal stagger-${i + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                background: cert.color,
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                textDecoration: 'none',
                border: '1px solid transparent',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cert.accent;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${cert.accent}20`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Issuer badge */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: cert.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 15l-2 5L9 9l11 4-5-2z"/><path d="M9 9l-6 2 5 2"/>
                  </svg>
                </div>
                {/* View link */}
                <span style={{ fontSize: '13px', fontWeight: 600, color: cert.accent, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  View
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  margin: '0 0 6px',
                }}>{cert.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(17,17,17,0.55)', margin: 0, fontWeight: 500 }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {cert.tags.map((tag, j) => (
                  <span key={j} style={{
                    padding: '3px 10px',
                    background: 'rgba(17,17,17,0.07)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '0.02em',
                  }}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
