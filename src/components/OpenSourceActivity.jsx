import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import LeetCodeStats from './LeetCodeStats';

const GITHUB_USERNAME = 'rupeshh132';

const OpenSourceActivity = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 0.4], [45, 0]);
  const rotateX = useTransform(rotateXRaw, val => `${val}deg`);
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);

  return (
    <section ref={containerRef} style={{ 
      background: 'var(--bg-color)', 
      color: 'var(--ink)', 
      height: prefersReducedMotion ? 'auto' : '200vh', 
      position: 'relative'
    }}>
      <div style={{
        position: prefersReducedMotion ? 'relative' : 'sticky',
        top: 0,
        height: prefersReducedMotion ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1200px',
        padding: prefersReducedMotion ? '100px 0' : '0 20px'
      }}>
        
        <motion.div style={{
           width: '100%',
           maxWidth: '1200px',
           rotateX: prefersReducedMotion ? 0 : rotateX,
           scale: prefersReducedMotion ? 1 : scale,
           opacity: prefersReducedMotion ? 1 : opacity,
           transformStyle: "preserve-3d",
           background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
           border: '1px solid rgba(0,0,0,0.05)',
           borderRadius: '32px',
           padding: 'clamp(24px, 5vw, 60px)',
           boxShadow: '0 40px 100px rgba(0,0,0,0.08)',
           backdropFilter: 'blur(20px)'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 className="h2" style={{ color: 'var(--ink)', marginBottom: '8px' }}>
                Open Source Activity
              </h2>
              <p className="small" style={{ color: 'var(--muted-ink)' }}>
                Showing up every day. The streak matters.
              </p>
            </div>
            
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '100px',
                border: '1px solid var(--border-color)',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg-color)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              @{GITHUB_USERNAME}
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 4vw, 36px)',
            marginBottom: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#3fb950', boxShadow: '0 0 8px #3fb950',
                animation: 'pulse-green 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted-ink)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                GitHub Contributions
              </span>
            </div>

            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="light"
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              }}
              fontSize={12}
              blockSize={13}
              blockMargin={4}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <LeetCodeStats />
          </div>

        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #3fb950; }
          50% { opacity: 0.5; box-shadow: 0 0 16px #3fb950; }
        }
      `}</style>
    </section>
  );
};

export default OpenSourceActivity;
