/* ========================================
   HERO SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Hero Slideshow Configuration
  const slideshow = {
    slides: document.querySelectorAll('.slide'),
    indicators: document.querySelectorAll('.indicator'),
    prevBtn: document.querySelector('.slider-prev'),
    nextBtn: document.querySelector('.slider-next'),
    currentSlide: 0,
    slideInterval: null,
    autoPlayDelay: 5000,
    isTransitioning: false,
    
    // Initialize slideshow
    init() {
      if (this.slides.length === 0) return;
      
      // Load background images
      this.loadBackgroundImages();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start autoplay
      this.startAutoPlay();
      
      // Animate first slide content
      this.animateSlideContent(0);
    },
    
    // Load background images with lazy loading
    loadBackgroundImages() {
      this.slides.forEach((slide, index) => {
        const bgImage = slide.dataset.bg;
        if (bgImage) {
          slide.setAttribute('data-loading', 'true');
          
          const img = new Image();
          img.onload = () => {
            slide.style.backgroundImage = `url(${bgImage})`;
            slide.removeAttribute('data-loading');
            
            // Add parallax effect on mouse move for active slide
            if (index === 0) {
              this.addParallaxEffect(slide);
            }
          };
          img.src = bgImage;
        }
      });
    },
    
    // Set up event listeners
    setupEventListeners() {
      // Previous/Next buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => {
          this.previousSlide();
        });
      }
      
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => {
          this.nextSlide();
        });
      }
      
      // Indicators
      this.indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          this.goToSlide(index);
        });
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.previousSlide();
        } else if (e.key === 'ArrowRight') {
          this.nextSlide();
        }
      });
      
      // Touch/Swipe support
      this.addSwipeSupport();
      
      // Pause on hover
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
          this.pauseAutoPlay();
        });
        
        heroSection.addEventListener('mouseleave', () => {
          this.startAutoPlay();
        });
      }
      
      // Visibility change (pause when tab is not visible)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseAutoPlay();
        } else {
          this.startAutoPlay();
        }
      });
    },
    
    // Change slide
    changeSlide(newIndex) {
      if (this.isTransitioning) return;
      
      this.isTransitioning = true;
      
      // Remove active class from current slide and indicator
      this.slides[this.currentSlide].classList.remove('active');
      this.indicators[this.currentSlide].classList.remove('active');
      
      // Update current slide index
      this.currentSlide = newIndex;
      
      // Add active class to new slide and indicator
      this.slides[this.currentSlide].classList.add('active');
      this.indicators[this.currentSlide].classList.add('active');
      
      // Animate slide content
      this.animateSlideContent(this.currentSlide);
      
      // Add parallax effect to new slide
      this.addParallaxEffect(this.slides[this.currentSlide]);
      
      // Reset transition flag
      setTimeout(() => {
        this.isTransitioning = false;
      }, 1000);
      
      // Reset autoplay timer
      this.resetAutoPlay();
    },
    
    // Go to next slide
    nextSlide() {
      const nextIndex = (this.currentSlide + 1) % this.slides.length;
      this.changeSlide(nextIndex);
    },
    
    // Go to previous slide
    previousSlide() {
      const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.changeSlide(prevIndex);
    },
    
    // Go to specific slide
    goToSlide(index) {
      if (index !== this.currentSlide && index >= 0 && index < this.slides.length) {
        this.changeSlide(index);
      }
    },
    
    // Autoplay functionality
    startAutoPlay() {
      this.pauseAutoPlay();
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    },
    
    pauseAutoPlay() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
        this.slideInterval = null;
      }
    },
    
    resetAutoPlay() {
      this.pauseAutoPlay();
      this.startAutoPlay();
    },
    
    // Animate slide content
    animateSlideContent(slideIndex) {
      const slide = this.slides[slideIndex];
      const animatedElements = slide.querySelectorAll('[data-animate]');
      
      animatedElements.forEach(element => {
        const animation = element.dataset.animate;
        const delay = element.dataset.delay || 0;
        
        // Reset animation
        element.style.opacity = '0';
        element.classList.remove(`animate-${animation}`);
        
        // Apply animation
        setTimeout(() => {
          element.style.opacity = '1';
          element.classList.add(`animate-${animation}`);
        }, delay);
      });
    },
    
    // Add parallax effect on mouse move
    addParallaxEffect(slide) {
      const heroSection = document.querySelector('.hero');
      
      const handleMouseMove = (e) => {
        if (!slide.classList.contains('active')) return;
        
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;
        
        slide.style.transform = `scale(1.05) translate(${xPos}px, ${yPos}px)`;
      };
      
      const handleMouseLeave = () => {
        slide.style.transform = 'scale(1) translate(0, 0)';
      };
      
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    },
    
    // Add swipe support for mobile
    addSwipeSupport() {
      const heroSection = document.querySelector('.hero');
      let touchStartX = 0;
      let touchEndX = 0;
      
      heroSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      heroSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
      
      this.handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            // Swiped left - next slide
            this.nextSlide();
          } else {
            // Swiped right - previous slide
            this.previousSlide();
          }
        }
      };
    }
  };
  
  // Initialize slideshow
  slideshow.init();
  
  // Quick Navigation Animation
  const quickNavItems = document.querySelectorAll('.quick-nav-item');
  
  quickNavItems.forEach((item, index) => {
    // Add stagger animation on load
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 1000 + (index * 100));
    
    // Add hover effect
    item.addEventListener('mouseenter', function() {
      quickNavItems.forEach(navItem => {
        if (navItem !== this) {
          navItem.style.opacity = '0.6';
        }
      });
    });
    
    item.addEventListener('mouseleave', function() {
      quickNavItems.forEach(navItem => {
        navItem.style.opacity = '1';
      });
    });
  });
  
  // Scroll down indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.innerHTML = `
    <svg width="30" height="30" viewBox="0 0 30 30">
      <path d="M15 3L15 20M15 20L10 15M15 20L20 15" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
  `;
  document.querySelector('.hero').appendChild(scrollIndicator);
  
  // Hide scroll indicator on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  });
  
  // Click to scroll down
  scrollIndicator.addEventListener('click', () => {
    const nextSection = document.querySelector('.expertise');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Add scroll indicator styles
  const scrollIndicatorStyles = `
    .scroll-indicator {
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      z-index: 10;
      animation: bounce 2s infinite;
      transition: opacity var(--transition-base);
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    .scroll-indicator:hover {
      color: var(--color-accent);
    }
    
    @media (max-width: 768px) {
      .scroll-indicator {
        bottom: 120px;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = scrollIndicatorStyles;
  document.head.appendChild(styleSheet);
  
  // Preload critical images
  const preloadImages = [
    'assets/images/hero-slide-1.png',
    'assets/images/hero-slide-2.png',
    'assets/images/hero-slide-3.jpg'
  ];
  
  preloadImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
});