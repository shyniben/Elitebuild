/* ========================================
   FEATURES SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Feature items animation on scroll
  const featureItems = document.querySelectorAll('.feature-item');
  
  if (featureItems.length > 0) {
    // Create observer for feature items
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Add stagger effect
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }, index * 50);
          
          // Add pulse animation to icon
          const icon = element.querySelector('.feature-icon');
          if (icon) {
            setTimeout(() => {
              icon.style.animation = 'pulse 0.6s ease';
            }, 300 + (index * 50));
          }
          
          featureObserver.unobserve(element);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    featureItems.forEach(item => {
      featureObserver.observe(item);
    });
  }
  
  // Interactive hover effects
  featureItems.forEach(item => {
    const icon = item.querySelector('.feature-icon');
    
    // Mouse follow effect on hover
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
    
    // Icon animation on hover
    if (icon) {
      item.addEventListener('mouseenter', () => {
        const iconSpan = icon.querySelector('span');
        if (iconSpan) {
          iconSpan.style.animation = 'iconBounce 0.5s ease';
        }
      });
      
      item.addEventListener('animationend', () => {
        const iconSpan = icon.querySelector('span');
        if (iconSpan) {
          iconSpan.style.animation = '';
        }
      });
    }
  });
  
  // Create floating particles effect
  function createFloatingParticles() {
    const featuresSection = document.querySelector('.features');
    if (!featuresSection) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    featuresSection.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (20 + Math.random() * 20) + 's';
      particlesContainer.appendChild(particle);
    }
  }
  
  // Initialize particles after a delay
  setTimeout(createFloatingParticles, 500);
  
  // Feature statistics counter animation
  const featureStats = [
    { element: null, value: 98, suffix: '%', label: 'Customer Satisfaction' },
    { element: null, value: 15, suffix: '+', label: 'Years Experience' },
    { element: null, value: 1000, suffix: '+', label: 'Projects Completed' }
  ];
  
  // Create and append stats if they don't exist
  function createFeatureStats() {
    const featuresSection = document.querySelector('.features .container');
    if (!featuresSection || document.querySelector('.features-stats')) return;
    
    const statsContainer = document.createElement('div');
    statsContainer.className = 'features-stats';
    
    featureStats.forEach(stat => {
      const statElement = document.createElement('div');
      statElement.className = 'feature-stat';
      statElement.innerHTML = `
        <span class="stat-value" data-value="${stat.value}">0</span>
        <span class="stat-suffix">${stat.suffix}</span>
        <p class="stat-label">${stat.label}</p>
      `;
      statsContainer.appendChild(statElement);
    });
    
    // Insert after features grid
    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid && featuresGrid.parentNode) {
      featuresGrid.parentNode.insertBefore(statsContainer, featuresGrid.nextSibling);
    }
  }
  
  // Animate stats on scroll
  function animateFeatureStats() {
    const stats = document.querySelectorAll('.features-stats .stat-value');
    
    if (stats.length > 0) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const targetValue = parseInt(element.dataset.value);
            const duration = 2000;
            const start = 0;
            const increment = targetValue / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                element.textContent = targetValue.toLocaleString();
                clearInterval(timer);
              } else {
                element.textContent = Math.floor(current).toLocaleString();
              }
            }, 16);
            
            statsObserver.unobserve(element);
          }
        });
      }, {
        threshold: 0.5
      });
      
      stats.forEach(stat => {
        statsObserver.observe(stat);
      });
    }
  }
  
  // Initialize stats after a delay
  setTimeout(() => {
    createFeatureStats();
    animateFeatureStats();
  }, 100);
  
  // Add click interaction for feature items
  featureItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.className = 'feature-ripple';
      this.appendChild(ripple);
      
      // Position ripple at click point
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (rect.width / 2 - size / 2) + 'px';
      ripple.style.top = (rect.height / 2 - size / 2) + 'px';
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Optional: Track feature clicks for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'feature_click', {
          'feature_name': this.querySelector('h3').textContent
        });
      }
    });
  });
  
  // Add CSS for particles and stats
  const additionalStyles = `
    .particles-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--color-accent);
      border-radius: 50%;
      opacity: 0.3;
      animation: floatUp 20s linear infinite;
    }
    
    @keyframes floatUp {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.3;
      }
      90% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    .features-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-2xl);
      margin-top: var(--spacing-3xl);
      padding: var(--spacing-2xl);
      background: rgba(184, 115, 51, 0.05);
      border-radius: var(--radius-lg);
    }
    
    .feature-stat {
      text-align: center;
    }
    
    .feature-stat .stat-value {
      font-size: var(--fs-3xl);
      font-weight: 700;
      color: var(--color-primary);
      font-family: var(--font-heading);
    }
    
    .feature-stat .stat-suffix {
      font-size: var(--fs-2xl);
      color: var(--color-accent);
      margin-left: 5px;
    }
    
    .feature-stat .stat-label {
      color: var(--color-gray);
      margin-top: var(--spacing-sm);
      font-size: var(--fs-sm);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .feature-ripple {
      position: absolute;
      border-radius: 50%;
      background: var(--color-accent);
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out;
      pointer-events: none;
      opacity: 0.3;
    }
    
    @keyframes rippleEffect {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @media (max-width: 768px) {
      .features-stats {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
});