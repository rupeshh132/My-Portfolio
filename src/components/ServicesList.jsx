import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const services = [
  {
    title: "Full-Stack Development",
    tech: "React.js • Spring Boot • PostgreSQL",
    longDescription: "Engineered end-to-end web applications like Jankalyan (a civic tech platform) featuring a 6-table PostgreSQL schema, 18 REST endpoints, and JWT authentication. Managed the complete lifecycle from secure backend architecture to role-based admin and citizen dashboards."
  },
  {
    title: "AI Integration",
    tech: "AI Features • Resume Analysis • Interview Bots",
    longDescription: "Integrated generative AI capabilities into DevLens AI to power automated resume parsing and a real-time Interview Simulator. Built the end-to-end pipeline to evaluate user answers, calculate technical scores, and generate dynamic skill-gap roadmaps."
  },
  {
    title: "Frontend Architecture",
    tech: "Modern UI • Tailwind CSS • Framer Motion",
    longDescription: "Architected premium, animation-rich UIs using React, Tailwind CSS, and Framer Motion. Engineered polished user experiences featuring glassmorphism, dynamic word-rotating text (AnimatePresence), scroll-linked interactions, and highly interactive layouts for projects like DevLens AI and Jankalyan."
  },
  {
    title: "API Design & Backend",
    tech: "Scalable APIs • Security • Database Management",
    longDescription: "Designed secure REST APIs with Spring Boot handling OAuth2, Cloudinary uploads, and PostgreSQL data modeling. Successfully resolved complex production challenges—from Flyway migration mismatches to optimizing static asset delivery on Vercel to prevent build timeouts."
  }
];

// Magnetic Text Component
const MagneticTitle = ({ children, disabled }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      if (Math.abs(distanceX) < 150 && Math.abs(distanceY) < 50) {
        x.set(distanceX * 0.1);
        y.set(distanceY * 0.1);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [disabled, x, y]);

  return (
    <motion.div ref={ref} style={{ x, y }} className="h3">
      {children}
    </motion.div>
  );
};

const ServicesList = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleInteraction = (idx, isHoverOrFocus) => {
    if (isTouchDevice && isHoverOrFocus) return; // Touch devices ignore hover/focus for expansion
    if (!isTouchDevice && !isHoverOrFocus) return; // Desktop ignores tap for expansion
    setActiveIdx(idx);
  };

  const handleLeave = () => {
    if (!isTouchDevice) setActiveIdx(null);
  };

  return (
    <div className="services-list" style={{ borderTop: '1px solid var(--border-color)' }}>
      {services.map((service, idx) => {
        const isActive = activeIdx === idx;
        
        return (
          <button
            key={idx}
            className="service-row scroll-reveal"
            style={{ 
              width: '100%', 
              padding: '32px 0', 
              borderBottom: '1px solid var(--border-color)', 
              display: 'block', 
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={() => handleInteraction(idx, true)}
            onMouseLeave={handleLeave}
            onFocus={() => handleInteraction(idx, true)}
            onBlur={handleLeave}
            onClick={() => {
              if (isTouchDevice) {
                setActiveIdx(isActive ? null : idx);
              }
            }}
            aria-expanded={isActive}
          >
            {/* Always visible header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <MagneticTitle disabled={isTouchDevice || prefersReducedMotion}>
                {service.title}
              </MagneticTitle>
              {/* Static tech stack visible by default */}
              <div className="small" style={{ color: 'var(--muted-ink)', fontWeight: 600 }}>
                {service.tech}
              </div>
            </div>

            {/* Expandable Blur-Reveal Description */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={prefersReducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { height: 'auto' } : { height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? { height: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <motion.p
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, filter: 'blur(6px)' }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, filter: 'blur(0px)' }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, filter: 'blur(6px)' }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{ 
                      margin: '24px 0 0 0', 
                      color: 'var(--ink)', 
                      fontSize: '18px',
                      maxWidth: '800px',
                      lineHeight: 1.5,
                      textAlign: 'left'
                    }}
                  >
                    {service.longDescription}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
};

export default ServicesList;
