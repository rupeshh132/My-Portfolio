import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Rupesh is an exceptional developer with a great eye for design and architecture. His work on AI integration completely shifted our perspective on what scalable systems can look like. The execution is simply top-notch.",
    author: "Senior Colleague",
    role: "Tech Lead",
    span: "col-span-2 row-span-2", // Large square
    size: "large"
  },
  {
    id: 2,
    quote: "Incredible design sensibilities matched with flawless execution.",
    author: "Alex Chen",
    role: "Founder, Nexus",
    span: "col-span-1 row-span-1", // Small square
    size: "small"
  },
  {
    id: 3,
    quote: "The clean, scalable systems he built transformed our workflow.",
    author: "John Smith",
    role: "CTO, GlobalTech",
    span: "col-span-1 row-span-1", // Small square
    size: "small"
  },
  {
    id: 4,
    quote: "One of the best creative developers we've worked with. Period. He doesn't just write code, he crafts premium digital experiences that users genuinely love to interact with.",
    author: "Sarah Lee",
    role: "Design Lead, Vertex",
    span: "col-span-3 row-span-1", // Wide rectangle
    size: "wide"
  }
];

const BentoTestimonials = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="bento-grid">
      {testimonials.map((t, idx) => {
        const isHovered = hoveredIdx === idx;
        const isOtherHovered = hoveredIdx !== null && hoveredIdx !== idx;

        return (
          <motion.div
            key={t.id}
            className={`bento-card ${t.span}`}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
            onTapStart={() => setHoveredIdx(idx)}
            onTapCancel={() => setHoveredIdx(null)}
            animate={{
              scale: isHovered ? 1.02 : (isOtherHovered ? 0.96 : 1),
              opacity: isOtherHovered ? 0.4 : 1,
              filter: isOtherHovered ? 'blur(2px)' : 'blur(0px)',
              zIndex: isHovered ? 10 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              // Humanized square: very sharp radius
              borderRadius: '4px',
              padding: t.size === 'small' ? '24px' : '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
              cursor: 'default'
            }}
          >
            <div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.1, marginBottom: '20px' }}>
                <path d="M10 11L8 15H5L7 11H5V5H11V11H10ZM20 11L18 15H15L17 11H15V5H21V11H20Z" fill="currentColor"/>
              </svg>
              <h3 style={{ 
                fontSize: t.size === 'large' ? 'clamp(24px, 3vw, 32px)' : (t.size === 'wide' ? 'clamp(20px, 2.5vw, 28px)' : '18px'),
                fontWeight: 600, 
                lineHeight: 1.3, 
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                margin: 0
              }}>
                "{t.quote}"
              </h3>
            </div>
            
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'var(--ink)', 
                borderRadius: '2px', // Sharp avatar to match
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--bg-color)',
                fontWeight: 700,
                fontSize: '14px'
              }}>
                {t.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{t.author}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted-ink)', fontWeight: 500 }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        );
      })}

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
          gap: 20px;
          width: 100%;
        }
        
        .col-span-2 { grid-column: span 2; }
        .col-span-3 { grid-column: span 3; }
        .col-span-1 { grid-column: span 1; }
        .row-span-2 { grid-row: span 2; }
        .row-span-1 { grid-row: span 1; }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
          }
          .col-span-3 { grid-column: span 2; }
          .col-span-2 { grid-column: span 2; }
        }

        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .col-span-1, .col-span-2, .col-span-3 {
            grid-column: span 1;
          }
          .row-span-2 {
            grid-row: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BentoTestimonials;
