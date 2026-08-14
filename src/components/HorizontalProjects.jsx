import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "DevLens AI",
    category: "AI-Powered Career Prep Platform / SaaS Web App",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    image: "/assets/devlens-ai.png",
    link: "https://devlens-ai-pearl.vercel.app"
  },
  {
    title: "JanKalyan",
    category: "Civic Tech Platform / Public Grievance Redressal",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/assets/jankalyan.png",
    link: "https://jankalyan-coral.vercel.app"
  },
  {
    title: "AI Portfolio",
    category: "Personal Web Experience",
    gradient: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Dashboard Pro",
    category: "React Analytics Dashboard",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  
  // Track scroll progress of the targetRef container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map vertical scroll (0 to 1) to horizontal movement (0 to -100)
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Use a mapping function to avoid Framer Motion's string parsing bugs with calc()
  const x = useTransform(xRaw, (val) => `calc(${val}% + ${-val}vw)`);

  return (
    <section ref={targetRef} style={{ height: "400vh", position: "relative" }}>
      {/* Sticky container that locks to viewport */}
      <div style={{ 
        position: "sticky", 
        top: 0, 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        overflow: "hidden",
        backgroundColor: "var(--bg-color)" 
      }}>
        
        {/* The horizontally moving track */}
        <motion.div style={{ x, display: "flex", gap: "60px", paddingLeft: "5%", paddingRight: "5%", alignItems: "center", height: "100%" }}>
          
          {/* Section Header (Now acts as the first "slide") */}
          <div style={{ flexShrink: 0, width: "clamp(300px, 30vw, 500px)", paddingRight: "40px" }}>
            <h2 className="h2" style={{ fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, margin: 0 }}>Featured Projects</h2>
            <a href="/work" className="btn-arrow dark" style={{ marginTop: '32px' }}>
              <span>View All Work</span>
              <div className="arrow-box">
                <div className="arrow-inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
          </div>
          {projects.map((project, idx) => (
            <div key={idx} style={{ width: "80vw", maxWidth: "900px", flexShrink: 0, position: 'relative' }}>
              <a href={project.link} target="_blank" rel="noreferrer" className="card" style={{ display: 'block' }}>
                <div 
                  className="card-img-wrapper" 
                  style={{ 
                    aspectRatio: '16/9', 
                    background: project.gradient, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '40px',
                    overflow: 'hidden'
                  }}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-mockup"
                    style={{
                      scale: 1.05, 
                    }}
                  />
                </div>
                <div className="card-content" style={{ marginTop: '24px', paddingLeft: '8px' }}>
                  <h3 style={{ fontSize: '48px', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, margin: 0 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '18px', color: 'var(--muted-ink)', margin: '8px 0 0 0', fontWeight: 500 }}>
                    {project.category}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
