import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const sentence = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
const words = sentence.split(" ");

const Word = ({ children, progress, range }) => {
  const isFirstWord = children === "From";

  // Color transforms smoothly from muted gray to dark ink.
  const color = useTransform(progress, range, ["#9ca3af", "#111827"]);
  
  // Font weight snaps at 70% of the word's individual scroll slice.
  // We use useTransform to create a step function.
  const snapPoint = range[0] + (range[1] - range[0]) * 0.7;
  const fontWeight = useTransform(progress, [range[0], snapPoint, snapPoint + 0.001, range[1]], [400, 400, 900, 900]);

  if (isFirstWord) {
    return (
      <span style={{ display: 'inline' }}>
        <span style={{ color: "#111827", fontWeight: 900 }}>
          {children}
        </span>
        {" "}
      </span>
    );
  }

  return (
    <span style={{ display: 'inline' }}>
      <motion.span style={{ color, fontWeight }}>
        {children}
      </motion.span>
      {" "}
    </span>
  );
};

const StatementReveal = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headingStyle = {
    textAlign: 'center', 
    maxWidth: '1000px', 
    margin: '0 auto', 
    fontSize: 'clamp(32px, 4.5vw, 56px)', 
    lineHeight: 1.3,
    letterSpacing: '-0.02em'
  };

  if (shouldReduceMotion) {
    return (
      <section className="section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h3 className="statement" style={headingStyle}>
            <span style={{ color: "#111827", fontWeight: 900 }}>From</span>{" "}
            {words.slice(1).map((word, i) => (
              <span key={i} style={{ display: 'inline' }}>
                <span style={{ color: "#111827", fontWeight: 900 }}>
                  {word}
                </span>
                {" "}
              </span>
            ))}
          </h3>
        </div>
      </section>
    );
  }

  // 80% of scroll is dedicated to the reveal phase
  const revealPhase = 0.8;
  const totalAnimatedWords = words.length - 1;
  
  // offset is the gap between each word starting
  const offset = revealPhase / totalAnimatedWords;
  // duration is 50% longer than offset to create smooth overlap
  const duration = offset * 1.5;

  return (
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="container">
          <h3 className="statement" style={headingStyle}>
            {words.map((word, i) => {
              // Skip "From" (i === 0) for calculation to spread the rest evenly
              const animIndex = i === 0 ? 0 : i - 1; 
              
              const start = animIndex * offset;
              const end = start + duration;

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatementReveal;
