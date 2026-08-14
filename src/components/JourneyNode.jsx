import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const JourneyNode = ({ ev, index, isLast }) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Triggers when the element hits the middle of the screen
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  const typeStyles = {
    education:  { border: 'var(--ink)',   dot: 'var(--ink)',   tag: '#f0f0ee' },
    leadership: { border: '#667eea',      dot: '#667eea',      tag: '#ede8ff' },
    project:    { border: '#11998e',      dot: '#11998e',      tag: '#e0f7f4' },
    milestone:  { border: 'var(--accent)',dot: 'var(--accent)', tag: '#ffeef1' },
  };

  const s = typeStyles[ev.type];

  // Determine final states based on reduced motion
  const opacity = prefersReducedMotion ? 1 : (isInView ? 1 : 0.2);
  const scale = prefersReducedMotion ? 1 : (isInView ? 1.2 : 1);
  const bgColor = prefersReducedMotion || isInView ? s.dot : 'var(--bg-color)';
  const borderColor = prefersReducedMotion || isInView ? s.dot : 'var(--border-color)';

  return (
    <motion.div
      ref={ref}
      animate={{ opacity }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: '0 40px',
        paddingBottom: isLast ? '0' : '64px',
        position: 'relative',
      }}
    >
      {/* Year */}
      <div style={{ paddingTop: '2px', textAlign: 'right', paddingRight: '0' }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: 'var(--muted-ink)',
          textTransform: 'uppercase',
        }}>{ev.year}</span>
      </div>

      {/* Content */}
      <div style={{ position: 'relative' }}>
        {/* Animated Dot on the line */}
        <motion.div 
          animate={{ 
            backgroundColor: bgColor,
            borderColor: borderColor,
            scale: scale
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            left: '-25px', // Mathematically positions dot center at exactly 141px
            top: '6px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '2px solid',
            zIndex: 2,
          }} 
        />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <h3 style={{
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: 0,
            color: 'var(--ink)',
            flex: '1 1 200px',
          }}>{ev.title}</h3>

          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.03em',
            background: s.tag,
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            marginTop: '2px',
          }}>{ev.tag}</span>
        </div>

        <p style={{
          fontSize: '16px',
          color: 'var(--muted-ink)',
          lineHeight: 1.7,
          margin: 0,
          maxWidth: '680px',
        }}>{ev.desc}</p>
      </div>
    </motion.div>
  );
};

export default JourneyNode;
