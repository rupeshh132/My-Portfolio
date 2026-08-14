import React, { useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import JourneyNode from './JourneyNode';

const Journey = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const events = [
    {
      year: '2022',
      title: 'B.Sc. Computer Science — MGM College, Mumbai University',
      type: 'education',
      desc: 'Secured 8.45 CGPA. Laid the foundation in DSA, OOP, and systems thinking. This is where curiosity turned into craft.',
      tag: 'B.Sc. CS · 8.45 CGPA',
    },
    {
      year: '2023',
      title: 'President — Cultural Committee Head',
      type: 'leadership',
      desc: 'Elected president after faculty saw my problem-solving and people skills. Managed freshers\' parties, sports events, and the entire Youth Festival. Led budget allocation for all events — learning how to do big things on small budgets. First real taste of leadership, team dynamics, and decision-making under pressure.',
      tag: 'Leadership · Event Management',
    },
    {
      year: '2023–24',
      title: 'Full-Stack & AI Projects — Building in public',
      type: 'project',
      desc: 'Built DevLens AI, a full-stack SaaS platform for career prep with AI integration. Built JanKalyan, a civic-tech platform for public grievance redressal. Earned certifications in Full-Stack Web Dev with AWS (Infosys, IBM) while shipping real products.',
      tag: 'React · Spring Boot · AI',
    },
    {
      year: '2024',
      title: 'B.Sc. Passout — Graduated with Distinction',
      type: 'milestone',
      desc: 'Graduated from MGM College with 8.45 CGPA and a portfolio of real-world projects. Left not just with a degree, but with proof of what I could build.',
      tag: 'Graduated · Distinction',
    },
    {
      year: '2025',
      title: 'MCA — Manipal University, Jaipur',
      type: 'education',
      desc: 'Currently pursuing MCA (1 year in). Deepening expertise in advanced software engineering, cloud architecture, and AI systems. The problems are getting harder — and I\'m enjoying every bit of it.',
      tag: 'MCA · In Progress',
    },
  ];

  const typeStyles = {
    education:  { border: 'var(--ink)',   dot: 'var(--ink)',   tag: '#f0f0ee' },
    leadership: { border: '#667eea',      dot: '#667eea',      tag: '#ede8ff' },
    project:    { border: '#11998e',      dot: '#11998e',      tag: '#e0f7f4' },
    milestone:  { border: 'var(--accent)',dot: 'var(--accent)', tag: '#ffeef1' },
  };

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="h2 scroll-reveal">The Journey</h2>
          <p className="small scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', maxWidth: '360px', textAlign: 'right' }}>
            Not a straight line. A set of deliberate moves.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Faint background line (Track) */}
          <div style={{
            position: 'absolute',
            left: '140px', // Centers perfectly in the 40px grid gap
            top: '8px',
            bottom: 0,
            width: '2px',
            background: 'var(--border-color)',
            opacity: 0.3
          }} />

          {/* The Scroll-Drawn Active Line */}
          <motion.div style={{
            position: 'absolute',
            left: '140px', // Matches background line
            top: '8px',
            bottom: 0,
            width: '2px',
            background: 'var(--ink)',
            scaleY: prefersReducedMotion ? 1 : scrollYProgress,
            transformOrigin: 'top',
            zIndex: 1
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((ev, i) => (
              <JourneyNode key={i} ev={ev} index={i} isLast={i === events.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
