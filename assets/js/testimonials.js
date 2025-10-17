/* ========================================
   TESTIMONIALS CAROUSEL JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Testimonials Carousel
  const testimonialCarousel = {
    slides: document.querySelectorAll('.testimonial-slide'),
    prevBtn: document.querySelector('.testimonial-prev'),
    nextBtn: document.querySelector('.testimonial-next'),
    currentIndex: 0,
    autoPlayInterval: null,
    autoPlayDelay: 5000,
    isTransitioning: false,
    
    init() {
      if (this.slides.length === 0) return;
      
      // Create indicators
      this.createIndicators();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start autoplay
      this.startAutoPlay();
      
      // Add background elements
      this.addBackgroundElements();
      
      // Initialize trust badges animation
      this.animateTrustBadges();
    },
    
    createIndicators() {
      const indicatorsContainer = document.createElement('div');
      indicatorsContainer.className = 'testimonial-indicators';
      
      this.slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => this.goToSlide(index));
        indicatorsContainer.appendChild(dot);
      });
      
      const carousel = document.querySelector('.testimonials-carousel');
      carousel.appendChild(indicatorsContainer);
      
      this.indicators = indicatorsContainer.querySelectorAll('.testimonial-dot');
    },
    
    setupEventListeners() {
      // Previous/Next buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
      }
      
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
      }
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.isElementInViewport(this.slides[0])) return;
        
        if (e.key === 'ArrowLeft') {
          this.previousSlide();
        } else if (e.key === 'ArrowRight') {
          this.nextSlide();
        }
      });
      
      // Touch/Swipe support
      this.addSwipeSupport();
      
      // Pause on hover
      const carousel = document.querySelector('.testimonials-carousel');
      if (carousel) {
        carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
      }
      
      // Pause when not visible
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseAutoPlay();
        } else {
          this.startAutoPlay();
        }
      });
    },
    
    changeSlide(newIndex) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      
      // Hide current slide
      const currentSlide = this.slides[this.currentIndex];
      currentSlide.style.animation = 'testimonialFadeOut 0.3s ease-out';
      
      setTimeout(() => {
        currentSlide.classList.remove('active');
        currentSlide.style.animation = '';
        
        // Update indicators
        if (this.indicators) {
          this.indicators[this.currentIndex].classList.remove('active');
          this.indicators[newIndex].classList.add('active');
        }
        
        // Show new slide
        this.currentIndex = newIndex;
        const newSlide = this.slides[this.currentIndex];
        newSlide.classList.add('active');
        newSlide.style.animation = 'testimonialFade 0.5s ease-out';
        
        // Animate content elements
        this.animateSlideContent(newSlide);
        
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }, 300);
    },
    
    nextSlide() {
      const nextIndex = (this.currentIndex + 1) % this.slides.length;
      this.changeSlide(nextIndex);
    },
    
    previousSlide() {
      const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.changeSlide(prevIndex);
    },
    
    goToSlide(index) {
      if (index !== this.currentIndex && index >= 0 && index < this.slides.length) {
        this.changeSlide(index);
      }
    },
    
    startAutoPlay() {
      this.pauseAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    },
    
    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    },
    
    animateSlideContent(slide) {
      const stars = slide.querySelector('.testimonial-stars');
      const text = slide.querySelector('.testimonial-text');
      const author = slide.querySelector('.testimonial-author');
      
      // Animate stars
      if (stars) {
        stars.style.animation = 'none';
        setTimeout(() => {
          stars.style.animation = 'starDrop 0.5s ease-out';
        }, 100);
      }
      
      // Animate text
      if (text) {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        setTimeout(() => {
          text.style.transition = 'all 0.5s ease';
          text.style.opacity = '1';
          text.style.transform = 'translateY(0)';
        }, 200);
      }
      
      // Animate author
      if (author) {
        author.style.opacity = '0';
        author.style.transform = 'scale(0.9)';
        setTimeout(() => {
          author.style.transition = 'all 0.5s ease';
          author.style.opacity = '1';
          author.style.transform = 'scale(1)';
        }, 300);
      }
    },
    
    addSwipeSupport() {
      const carousel = document.querySelector('.testimonials-carousel');
      let touchStartX = 0;
      let touchEndX = 0;
      
      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
      
      this.handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            this.nextSlide();
          } else {
            this.previousSlide();
          }
        }
      };
    },
    
    addBackgroundElements() {
      const section = document.querySelector('.testimonials');
      if (!section) return;
      
      for (let i = 0; i < 2; i++) {
        const element = document.createElement('div');
        element.className = 'testimonial-bg-element';
        section.appendChild(element);
      }
    },
    
    animateTrustBadges() {
      // Create trust badges if they don't exist
      const section = document.querySelector('.testimonials .container');
      if (!section || document.querySelector('.trust-badges')) return;
      
      const trustBadgesHtml = `
        <div class="trust-badges">
          <div class="trust-badge" data-animate="fade-up" data-delay="100">
            <div class="trust-badge-icon">⭐</div>
            <span>5-Star Rated</span>
          </div>
          <div class="trust-badge" data-animate="fade-up" data-delay="200">
            <div class="trust-badge-icon">✓</div>
            <span>Verified Reviews</span>
          </div>
          <div class="trust-badge" data-animate="fade-up" data-delay="300">
            <div class="trust-badge-icon">💬</div>
            <span>500+ Happy Clients</span>
          </div>
        </div>
      `;
      
      const cta = document.querySelector('.testimonials-cta');
      if (cta) {
        cta.insertAdjacentHTML('afterend', trustBadgesHtml);
      }
      
      // Animate badges on scroll
      const badges = document.querySelectorAll('.trust-badge');
      const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const badge = entry.target;
            const delay = badge.dataset.delay || 0;
            
            setTimeout(() => {
              badge.style.animation = 'fadeInUp 0.5s ease forwards';
            }, delay);
            
            badgeObserver.unobserve(badge);
          }
        });
      }, {
        threshold: 0.5
      });
      
      badges.forEach(badge => {
        badge.style.opacity = '0';
        badgeObserver.observe(badge);
      });
    },
    
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  };
  
  // Initialize carousel
  testimonialCarousel.init();
  
  // Animate section on scroll
  const testimonialsSection = document.querySelector('.testimonials');
  if (testimonialsSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Start typing effect for testimonial text
          const activeText = entry.target.querySelector('.testimonial-slide.active .testimonial-text');
          if (activeText) {
            typewriterEffect(activeText);
          }
          
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    sectionObserver.observe(testimonialsSection);
  }
  
  // Typewriter effect for testimonials
  function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        element.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
  }
  
  // Rating stars animation
  const stars = document.querySelectorAll('.testimonial-stars');
  stars.forEach(starGroup => {
    starGroup.addEventListener('mouseenter', function() {
      const starsArray = this.textContent.split('');
      this.innerHTML = '';
      
      starsArray.forEach((star, index) => {
        const span = document.createElement('span');
        span.textContent = star;
        span.style.display = 'inline-block';
        span.style.animation = `starJump 0.5s ease ${index * 0.1}s`;
        this.appendChild(span);
      });
    });
  });
  
  // Add additional animations CSS
  const additionalStyles = `
    @keyframes testimonialFadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    
    @keyframes starDrop {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    @keyframes starJump {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-10px) rotate(360deg);
      }
    }
    
    .testimonials.in-view .section-header {
      animation: fadeInDown 0.6s ease-out;
    }
    
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
});