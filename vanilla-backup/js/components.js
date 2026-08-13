// Component Injectors

function injectNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
    <div class="navbar-wrapper">
      <nav class="navbar" id="main-nav">
        <div class="nav-header">
          <a href="index.html" class="nav-logo">Rupesh</a>
          <button class="nav-trigger" id="nav-trigger" aria-label="Toggle Menu">
            <div class="nav-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div class="nav-menu">
          <a href="index.html" class="nav-link">
            <span class="rolling-text"><span class="rolling-text-inner"><span>Home</span><span>Home</span></span></span>
          </a>
          <a href="work.html" class="nav-link">
            <span class="rolling-text"><span class="rolling-text-inner"><span>Works</span><span>Works</span></span></span>
          </a>
          <a href="blog.html" class="nav-link">
            <span class="rolling-text"><span class="rolling-text-inner"><span>Blog</span><span>Blog</span></span></span>
          </a>
          <a href="#contact" class="nav-link" id="contact-link">
            <span class="rolling-text"><span class="rolling-text-inner"><span>Contact</span><span>Contact</span></span></span>
          </a>
        </div>
      </nav>
    </div>
  `;

  // Navbar logic
  const trigger = document.getElementById('nav-trigger');
  const nav = document.getElementById('main-nav');
  const contactLink = document.getElementById('contact-link');

  if (trigger && nav) {
    trigger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
  
  if (contactLink) {
      contactLink.addEventListener('click', (e) => {
          if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
              nav.classList.remove('open');
          } else {
              window.location.href = 'index.html#contact';
          }
      });
  }
}

function injectFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col scroll-reveal stagger-1">
          <h2 class="statement" style="color: var(--light-text); max-width: 400px; margin-bottom: 24px;">Scaling Start-ups for Growth.</h2>
        </div>
        <div class="footer-col scroll-reveal stagger-2">
          <h3 class="small" style="color: var(--muted-light-text); margin-bottom: 16px;">/Quick links</h3>
          <ul>
            <li><a href="index.html" class="footer-pill">Home</a></li>
            <li><a href="work.html" class="footer-pill">Works</a></li>
            <li><a href="blog.html" class="footer-pill">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col scroll-reveal stagger-3">
          <h3 class="small" style="color: var(--muted-light-text); margin-bottom: 16px;">/Contact</h3>
          <a href="mailto:vrupesh132@gmail.com" class="footer-pill">vrupesh132@gmail.com</a>
        </div>
      </div>
      <div class="footer-huge-text scroll-reveal">RUPESH</div>
    </footer>
  `;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
});
