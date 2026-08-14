import React from 'react';

const Journey = () => {
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
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="h2 scroll-reveal">The Journey</h2>
          <p className="small scroll-reveal stagger-1" style={{ color: 'var(--muted-ink)', maxWidth: '360px', textAlign: 'right' }}>
            Not a straight line. A set of deliberate moves.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '8px',
            bottom: 0,
            width: '1px',
            background: 'var(--border-color)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {events.map((ev, i) => {
              const s = typeStyles[ev.type];
              return (
                <div
                  key={i}
                  className={`scroll-reveal stagger-${(i % 4) + 1}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '0 40px',
                    paddingBottom: i < events.length - 1 ? '48px' : '0',
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
                  <div style={{ paddingLeft: '40px', position: 'relative' }}>
                    {/* Dot on the line */}
                    <div style={{
                      position: 'absolute',
                      left: '-1px',
                      top: '6px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      background: s.dot,
                      transform: 'translateX(-50%)',
                      border: '2px solid var(--bg-color)',
                      outline: `1px solid ${s.dot}`,
                    }} />

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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
