/* ========================================
   ELITEBUILD SOLUTIONS - COMMON JS
   Global Functions, Animations & Behaviors
   ======================================== */

// Global EliteBuild namespace
window.EliteBuild = {
  // Configuration
  config: {
    animationDuration: 600,
    scrollOffset: 80,
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280
    }
  },

  // Initialize all common functions
  init() {
    this.initScrollAnimations();
    this.initSmoothScroll();
    this.initLazyLoading();
    this.initParallax();
    this.initScrollToTop();
    this.initPreloader();
    this.initAnimationObserver();
  },

  // Scroll-triggered animations using Intersection Observer
  initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (!animatedElements.length) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.dataset.animate;
          const delay = element.dataset.delay || 0;
          
          setTimeout(() => {
            element.classList.add('animate-' + animation);
            element.style.opacity = '1';
            element.style.transform = 'none';
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    animatedElements.forEach(element => {
      element.style.opacity = '0';
      observer.observe(element);
    });
  },

  // Smooth scroll for anchor links
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - EliteBuild.config.scrollOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  // Lazy loading for images
  initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (!lazyImages.length) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  },

  // Parallax scrolling effect
  initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;

    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);
  },

  // Scroll to top button
  initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  // Page preloader
  initPreloader() {
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add('fade-out');
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 500);
      }
    });
  },

  // Enhanced animation observer
  initAnimationObserver() {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        
        if (element.classList.contains('counter')) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.animateCounter(element);
            progressObserver.unobserve(element);
          }
        }

        if (element.classList.contains('progress-bar')) {
          if (entry.isIntersecting) {
            const progress = element.dataset.progress || 0;
            element.style.width = progress + '%';
            progressObserver.unobserve(element);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.counter, .progress-bar').forEach(el => {
      progressObserver.observe(el);
    });
  },

  // Animate number counters
  animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = parseInt(element.dataset.duration) || 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  },

  // Utility Functions
  utils: {
    // Debounce function for performance
    debounce(func, wait = 100) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function for performance
    throttle(func, limit = 100) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Check if element is in viewport
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Get scroll percentage
    getScrollPercent() {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    },

    // Format number with commas
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Get current breakpoint
    getCurrentBreakpoint() {
      const width = window.innerWidth;
      if (width < EliteBuild.config.breakpoints.mobile) return 'mobile';
      if (width < EliteBuild.config.breakpoints.tablet) return 'tablet';
      if (width < EliteBuild.config.breakpoints.desktop) return 'desktop';
      return 'wide';
    }
  },

  // Animation Effects Library
  animations: {
    // Fade in element
    fadeIn(element, duration = 500) {
      element.style.opacity = '0';
      element.style.display = 'block';
      
      const start = performance.now();
      
      const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        element.style.opacity = progress;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    },

    // Fade out element
    fadeOut(element, duration = 500) {
      const start = performance.now();
      const initialOpacity = parseFloat(window.getComputedStyle(element).opacity);
      
      const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        element.style.opacity = initialOpacity * (1 - progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          element.style.display = 'none';
        }
      };
      
      requestAnimationFrame(animate);
    },

    // Slide toggle
    slideToggle(element, duration = 500) {
      if (window.getComputedStyle(element).display === 'none') {
        this.slideDown(element, duration);
      } else {
        this.slideUp(element, duration);
      }
    },

    // Slide down
    slideDown(element, duration = 500) {
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;
      if (display === 'none') display = 'block';
      element.style.display = display;
      
      const height = element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      element.offsetHeight; // Force reflow
      
      element.style.boxSizing = 'border-box';
      element.style.transitionProperty = 'height, margin, padding';
      element.style.transitionDuration = duration + 'ms';
      element.style.height = height + 'px';
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      
      setTimeout(() => {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
      }, duration);
    },

    // Slide up
    slideUp(element, duration = 500) {
      element.style.transitionProperty = 'height, margin, padding';
      element.style.transitionDuration = duration + 'ms';
      element.style.boxSizing = 'border-box';
      element.style.height = element.offsetHeight + 'px';
      element.offsetHeight; // Force reflow
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      
      setTimeout(() => {
        element.style.display = 'none';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
      }, duration);
    }
  },

  // Form validation helper
  validateForm(form) {
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
        
        // Add error message
        let errorMsg = input.parentElement.querySelector('.error-message');
        if (!errorMsg) {
          errorMsg = document.createElement('span');
          errorMsg.className = 'error-message';
          errorMsg.textContent = 'This field is required';
          input.parentElement.appendChild(errorMsg);
        }
      } else {
        input.classList.remove('error');
        const errorMsg = input.parentElement.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
      }
    });

    return isValid;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  EliteBuild.init();
});

// Add scroll to top button styles
const scrollTopStyles = `
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--color-accent);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    z-index: var(--z-toast);
  }
  
  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
  
  .scroll-to-top:hover {
    background: var(--color-accent-light);
    transform: translateY(-5px);
  }
`;

// Inject scroll to top styles
const styleSheet = document.createElement('style');
styleSheet.textContent = scrollTopStyles;
document.head.appendChild(styleSheet);