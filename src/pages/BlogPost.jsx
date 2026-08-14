import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find(p => p.id === id);
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <main style={{ paddingTop: '160px', minHeight: '100vh', textAlign: 'center' }}>
        <h1 className="h2">Article not found</h1>
        <Link to="/blog" className="btn-arrow dark" style={{ marginTop: '24px' }}>
          <span>Back to Blog</span>
          <div className="arrow-box">
            <div className="arrow-inner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </div>
          </div>
        </Link>
      </main>
    );
  }

  // A very basic markdown-to-html parser for bold and headers
  const renderContent = (content) => {
    return content.split('\n').map((line, idx) => {
      if (line.trim().startsWith('### ')) {
        return <h3 key={idx} className="h3" style={{ marginTop: '40px', marginBottom: '16px' }}>{line.replace('### ', '')}</h3>;
      }
      if (line.trim().startsWith('- ') || line.trim().match(/^\d+\.\s/)) {
        return <li key={idx} className="body" style={{ marginLeft: '24px', marginBottom: '8px', color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: parseInline(line) }} />;
      }
      if (line.trim() === '') {
        return <br key={idx} />;
      }
      return <p key={idx} className="body" style={{ marginBottom: '16px', color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: parseInline(line) }} />;
    });
  };

  const parseInline = (text) => {
    let parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    parsed = parsed.replace(/\*(.*?)\*/g, '<em>$1</em>');
    parsed = parsed.replace(/\`(.*?)\`/g, '<code style="background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">$1</code>');
    return parsed;
  };

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Image Section */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--ink)', zIndex: 1 }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, filter: 'grayscale(50%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '80px' }}>
          <div className="small" style={{ color: 'var(--light-text)', marginBottom: '16px', opacity: 0.8, fontWeight: 600 }}>{post.date}</div>
          <h1 className="h1" style={{ color: 'var(--light-text)', maxWidth: '900px', fontSize: 'clamp(40px, 5vw, 64px)' }}>{post.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--muted-ink)', fontWeight: 600, textDecoration: 'none', marginBottom: '40px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to articles
          </Link>

          <p className="lead" style={{ fontWeight: 600, marginBottom: '40px', color: 'var(--ink)' }}>
            {post.description}
          </p>

          <div style={{ fontSize: '18px', lineHeight: 1.8 }}>
            {renderContent(post.content)}
          </div>

        </div>
      </section>
    </main>
  );
};

export default BlogPost;
