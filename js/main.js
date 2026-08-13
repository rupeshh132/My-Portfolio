// Main Logic & Animations

document.addEventListener('DOMContentLoaded', () => {
  // Page Transition Fade In
  const body = document.body;
  
  // Create transition overlay
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);
  
  // Remove overlay after a short delay to trigger fade
  setTimeout(() => {
    document.body.classList.add('page-loaded');
  }, 100);

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  // Trigger when element reaches ~45-50% from bottom of viewport
  const revealOptions = {
    threshold: 0,
    rootMargin: "0px 0px -45% 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Unobserve to ensure standard elements only animate once
        // EXCEPT the huge footer wordmark which replays
        if (!entry.target.classList.contains('footer-huge-text')) {
          observer.unobserve(entry.target);
        }
      } else {
        // Remove class if it's the footer wordmark to allow replay
        if (entry.target.classList.contains('footer-huge-text')) {
          entry.target.classList.remove('visible');
        }
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Faded Editorial Text Section Observer (Line-by-Line)
  const fadedStatements = document.querySelectorAll('.faded-statement');
  const statementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -40% 0px" });

  fadedStatements.forEach(el => {
    statementObserver.observe(el);
  });

  // Testimonial Flip Cards Logic
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    // Only toggling class on tap for mobile; desktop uses hover in CSS
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // ==========================================
  // Sticky Hero Portrait Scroll Reveal & Color Flip
  // ==========================================
  const scrollPortrait = document.getElementById('scroll-portrait');

  if (scrollPortrait) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      let ticking = false;

      // Spring interpolation variables
      let currentScale = 0.35;
      let currentX = 150;
      let currentY = -120;
      let currentGrayscale = 100;
      let currentRotateY = 0;

      function updateScrollPortrait() {
        const scrollY = window.scrollY;
        // Hero is 250vh. 150vh is the scroll distance.
        const endScroll = window.innerHeight * 1.5;
        
        let progress = 0;
        if (scrollY > 0) {
          progress = Math.min(scrollY / endScroll, 1);
        }

        const isMobile = window.innerWidth <= 768;
        
        let targetScale, targetX, targetY, targetGrayscale, targetRotateY;

        // 1. Scale: 0.35 -> 1 (Mobile starts slightly larger)
        targetScale = isMobile ? 0.45 + (progress * 0.55) : 0.35 + (progress * 0.65);
        
        // 2. Position (X, Y): Shift to center
        const startX = isMobile ? 80 : 150;
        const startY = isMobile ? -80 : -120;
        targetX = startX - (progress * startX);
        targetY = startY - (progress * startY);

        // 3. Grayscale: 100% -> 0%
        targetGrayscale = 100 - (progress * 100);

        // 4. Subtle RotateY: 0deg -> 15deg -> 0deg
        if (progress <= 0.5) {
            targetRotateY = (progress / 0.5) * 15;
        } else {
            targetRotateY = 15 - (((progress - 0.5) / 0.5) * 15);
        }

        // Apply smooth spring (lerp)
        currentScale += (targetScale - currentScale) * 0.12;
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        currentGrayscale += (targetGrayscale - currentGrayscale) * 0.12;
        currentRotateY += (targetRotateY - currentRotateY) * 0.12;
        
        // Compute brightness (darker when embedded, normal when full)
        const brightness = 0.6 + (1 - currentGrayscale/100) * 0.4;
        
        scrollPortrait.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale}) rotateY(${currentRotateY}deg)`;
        scrollPortrait.style.filter = `grayscale(${currentGrayscale}%) contrast(1.1) brightness(${brightness})`;
        
        if (scrollY < window.innerHeight * 2.5) {
          window.requestAnimationFrame(updateScrollPortrait);
        } else {
          ticking = false;
        }
      }

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollPortrait);
          ticking = true;
        }
      });
      updateScrollPortrait();
    } else {
      scrollPortrait.style.transform = `translate(0px, 0px) scale(1) rotateY(0deg)`;
      scrollPortrait.style.filter = `grayscale(0%) contrast(1.1) brightness(1)`;
    }
  }

  // Form Submission Logic (Dummy states)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const innerRolling = btn.querySelector('.rolling-text-inner');
      
      // Loading State
      if (innerRolling) {
        innerRolling.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4 31.4" stroke-dashoffset="0"/></svg></span><span>Loading...</span>`;
      }
      btn.disabled = true;
      contactForm.classList.remove('error');
      
      setTimeout(() => {
        // Success State
        if (innerRolling) {
            innerRolling.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg></span><span>Success</span>`;
        }
        btn.style.backgroundColor = '#4caf50';
        btn.style.color = '#fff';
        contactForm.reset();
        
        setTimeout(() => {
          // Reset State
          if (innerRolling) {
              innerRolling.innerHTML = `<span>Submit Inquiry</span><span>Submit Inquiry</span>`;
          }
          btn.style.backgroundColor = 'var(--bg-color)';
          btn.style.color = 'var(--ink)';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});

// Handle outgoing links for page transition
window.addEventListener('beforeunload', () => {
  document.body.classList.remove('page-loaded');
});

// Inject keyframes for form spinner dynamically or assume they exist
const style = document.createElement('style');
style.textContent = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);
