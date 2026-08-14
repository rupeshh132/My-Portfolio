import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ── Motion values ──────────────────────────────────────────
  const scaleValue  = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.6,  1   ]);
  const xValue      = useTransform(scrollYProgress, [0, 0.5, 1], ["-3vw", "0vw", "0vw"]);
  const yValue      = useTransform(scrollYProgress, [0, 0.5, 1], ["22vh", "10vh", "0vh"]);
  const grayscale   = useTransform(scrollYProgress, [0, 0.5, 1], [100,  50,   0   ]);
  const filterValue = useTransform(grayscale, v => `grayscale(${v}%)`);
  const rotateValue = useTransform(scrollYProgress, [0, 0.5, 1], [0,  90,  0   ]);
  const radiusValue = useTransform(scrollYProgress, [0,       1], ["8px", "24px"]);
  // Image pops in front of text only after 60 % scroll
  const zIndexValue = useTransform(scrollYProgress, [0, 0.6, 0.61, 1], [1, 1, 20, 20]);

  // Headline travels up and completely EXITS the screen so it doesn't collide with Intro
  const headlineY = useTransform(scrollYProgress, [0, 0.7, 1], ["0vh", "-100vh", "-100vh"]);

  const imgStyle = {
    width: 'clamp(250px, 28vw, 400px)',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
  };

  return (
    /**
     * 300 vh outer container — gives the browser enough scroll room.
     * NO overflow / transform / filter here (all three break sticky).
     */
    <div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>

      {/**
       * STICKY PANEL — stays locked to viewport top while user scrolls
       * through the 300 vh container.
       *
       * ⚠️  Rules that must hold for sticky to work:
       *   1. No parent with overflow ≠ visible (checked — none found)
       *   2. No transform / filter / perspective on THIS element's parents
       *   3. The outer container must be taller than 100vh (300vh ✓)
       *
       * We intentionally do NOT put `perspective` here because it
       * creates a new containing block that breaks sticky in some engines.
       * The 3-D flip still works — browsers apply perspective from the
       * element's own transform-style.
       */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',   // clips image as it moves — safe on the sticky el itself
        zIndex: 2,
      }}>

        {/* ── Large editorial heading ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,          // always in front of image until 60 % scroll
          pointerEvents: 'none',
        }}>
          <motion.h1 style={{
            fontSize: '11vw',
            fontWeight: 900,
            textAlign: 'center',
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            y: shouldReduceMotion ? "-100vh" : headlineY,
          }}>
            SOFTWARE<br />
            ENGINEER
          </motion.h1>

          {/* Corner labels */}
          <span className="desktop-only" style={{ position: 'absolute', bottom: 40, left: 'var(--gutter)', fontWeight: 600, fontSize: '14px' }}>©2026</span>
          <span className="desktop-only" style={{ position: 'absolute', bottom: 40, right: 'var(--gutter)', fontWeight: 600, fontSize: '14px' }}>/CREATING SINCE 2022</span>
        </div>

        {/* ── Portrait (scroll-animated) ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {shouldReduceMotion ? (
            // Static fallback — show final state immediately
            <img
              src="/assets/portrait.jpg"
              style={{ borderRadius: '24px', zIndex: 5, ...imgStyle }}
            />
          ) : (
            <motion.img
              src="/assets/portrait.jpg"
              style={{
                position: 'absolute',
                scale: scaleValue,
                x: xValue,
                y: yValue,
                filter: filterValue,
                rotateY: rotateValue,
                borderRadius: radiusValue,
                zIndex: zIndexValue,
                transformStyle: 'preserve-3d',
                ...imgStyle,
              }}
            />
          )}
        </div>

      </div>{/* /sticky */}

      {/* ── INTRO SECTION — revealed as user scrolls out of hero ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1,
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}>

            {/* Left */}
            <div style={{ flex: '1 1 280px', maxWidth: '380px' }}>
              <h2 style={{ fontSize: 'clamp(56px, 7vw, 96px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.04em', lineHeight: 1 }}>Hey!</h2>
              <p className="lead">
                I'm Rupesh, a passionate Full Stack Engineer focused on building scalable, modern web applications.
              </p>
              {/* Download CV */}
              <a
                href="/assets/Rupesh_Vishwakarma_Resume.pdf"
                download="Rupesh_Vishwakarma_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '28px',
                  padding: '13px 24px',
                  background: 'var(--ink)',
                  color: 'var(--light-text)',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'background 0.25s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>

            {/* Centre spacer — image lands here */}
            <div className="desktop-only" style={{ width: 'clamp(250px, 28vw, 400px)', aspectRatio: '4 / 5', flexShrink: 0 }} />

            {/* Right */}
            <div style={{ flex: '1 1 280px', maxWidth: '380px', marginTop: '120px' }}>
              <p className="body" style={{ margin: 0, color: 'var(--muted-ink)', fontSize: '18px' }}>
                I specialize in React, Java Spring Boot, and integrating AI to solve real-world problems. I love crafting clean code and premium digital experiences.
              </p>
            </div>

          </div>
        </div>
      </div>{/* /intro */}

    </div>
  );
};

export default Hero;
