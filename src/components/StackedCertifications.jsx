import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

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

const StackedCertifications = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Progress mapping: 0 = stacked, 1 = fully fanned out
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} style={{ height: prefersReducedMotion ? "auto" : "300vh", position: "relative" }}>
      <div style={{ 
        position: prefersReducedMotion ? "relative" : "sticky", 
        top: 0, 
        height: prefersReducedMotion ? "auto" : "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        overflow: "hidden",
        backgroundColor: "var(--bg-color)",
        padding: prefersReducedMotion ? "80px 0" : "0"
      }}>
        
        {/* Section Header */}
        <div style={{ position: prefersReducedMotion ? 'relative' : 'absolute', top: prefersReducedMotion ? '0' : '15%', left: 0, width: '100%', textAlign: 'center', zIndex: 10, padding: '0 20px', marginBottom: prefersReducedMotion ? '60px' : '0' }}>
          <h2 className="h2">Certifications</h2>
          <p className="small" style={{ color: 'var(--muted-ink)', marginTop: '8px' }}>
            Proof of craft, not just code.
          </p>
        </div>

        {/* The Cards Area */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1200px', 
          height: prefersReducedMotion ? 'auto' : '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: prefersReducedMotion ? 'column' : 'row',
          gap: prefersReducedMotion ? '24px' : '0'
        }}>
          {certs.map((cert, idx) => {
            // Initial stacked state
            const initialScale = 0.9 + (idx * 0.05); // 0.9, 0.95, 1.0
            const initialY = -40 + (idx * 20);       // -40, -20, 0
            
            // Fanned out state (Desktop: radial, Mobile: vertical list)
            let finalX = 0;
            let finalY = 0;
            let finalRotate = 0;
            const finalScale = 1;

            if (isMobile) {
              // Mobile: Vertical Fan
              finalY = (idx - 1) * 220; // Spread them vertically: -220, 0, 220
            } else {
              // Desktop: Radial Fan
              if (idx === 0) { finalX = -350; finalY = 40; finalRotate = -8; } // Left
              if (idx === 1) { finalX = 0; finalY = -20; finalRotate = 0; }    // Center
              if (idx === 2) { finalX = 350; finalY = 40; finalRotate = 8; }   // Right
            }

            // Map the scroll progress to the actual transform values
            const scale = useTransform(progress, [0, 1], [initialScale, finalScale]);
            const y = useTransform(progress, [0, 1], [initialY, finalY]);
            const x = useTransform(progress, [0, 1], [0, finalX]);
            const rotate = useTransform(progress, [0, 1], [0, finalRotate]);

            return (
              <motion.a
                key={idx}
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                style={{
                  position: prefersReducedMotion ? 'relative' : 'absolute',
                  zIndex: idx,
                  scale: prefersReducedMotion ? 1 : scale,
                  y: prefersReducedMotion ? 0 : y,
                  x: prefersReducedMotion ? 0 : x,
                  rotate: prefersReducedMotion ? 0 : rotate,
                  width: '100%',
                  maxWidth: '360px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  background: cert.color,
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  textDecoration: 'none',
                  border: '1px solid transparent',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  transformOrigin: 'center bottom'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: prefersReducedMotion ? -4 : (isMobile ? -4 : (idx === 1 ? -30 : 30)), 
                  borderColor: cert.accent,
                  boxShadow: `0 12px 40px ${cert.accent}30`,
                  zIndex: 10 // Bring to front on hover
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
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
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StackedCertifications;
