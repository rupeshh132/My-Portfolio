import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  // Trigger animations on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="container">
        
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <h1 className="h1 scroll-reveal" style={{ fontSize: 'clamp(56px, 8vw, 96px)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Thoughts & Writing
          </h1>
          <p className="body scroll-reveal stagger-1" style={{ fontSize: '20px', color: 'var(--muted-ink)' }}>
            Insights, essays, and deep dives into design engineering, creative development, and the future of digital products.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {blogPosts.map((post, idx) => (
            <Link to={`/blog/${post.id}`} key={post.id} className={`card scroll-reveal stagger-${(idx % 3) + 1}`} style={{ height: '460px', textDecoration: 'none' }}>
              <div className="card-img-wrapper" style={{ height: '100%', borderRadius: '4px' }}>
                <img src={post.image} alt={post.title} className="card-img" style={{ filter: 'grayscale(100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px 24px', background: 'linear-gradient(transparent, rgba(17,17,17,0.9))', color: 'var(--light-text)' }}>
                  <div className="small" style={{ color: 'var(--muted-light-text)', marginBottom: '8px' }}>{post.date}</div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>{post.title}</h3>
                  <p className="small" style={{ opacity: 0.8 }}>{post.description}</p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Blog;
