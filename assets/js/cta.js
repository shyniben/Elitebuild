/* ========================================
   CTA SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // CTA Section Animation
  const ctaSection = document.querySelector('.cta-section');
  
  if (ctaSection) {
    // Add animated lines
    createAnimatedLines();
    
    // Initialize parallax background
    initParallaxBackground();
    
    // Animate CTA content on scroll
    animateCTAContent();
    
    // Add contact methods if not exists
    createContactMethods();
    
    // Initialize CTA stats animation
    animateCTAStats();
    
    // Add interactive effects to buttons
    addButtonEffects();
    
    // Social links hover effects
    addSocialEffects();
  }
  
  // Create animated lines
  function createAnimatedLines() {
    const linesContainer = document.createElement('div');
    linesContainer.className = 'cta-lines';
    
    for (let i = 0; i < 4; i++) {
      const line = document.createElement('div');
      line.className = 'cta-line';
      linesContainer.appendChild(line);
    }
    
    if (!ctaSection.querySelector('.cta-lines')) {
      ctaSection.appendChild(linesContainer);
    }
  }
  
  // Parallax background effect
  function initParallaxBackground() {
    const ctaBg = document.querySelector('.cta-bg');
    if (!ctaBg) return;
    
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      ctaBg.style.transform = `translateY(${rate}px)`;
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick);
  }
  
  // Animate CTA content on scroll
  function animateCTAContent() {
    const ctaContent = document.querySelector('.cta-content');
    if (!ctaContent) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate buttons sequentially
          const buttons = entry.target.querySelectorAll('.cta-buttons .btn');
          buttons.forEach((btn, index) => {
            setTimeout(() => {
              btn.style.animation = 'bounceIn 0.6s ease forwards';
            }, index * 100);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    observer.observe(ctaContent);
  }
  
  // Create contact methods grid
  function createContactMethods() {
    const ctaContent = document.querySelector('.cta-content');
    if (!ctaContent || document.querySelector('.contact-methods')) return;
    
    const contactMethodsHtml = `
      <div class="contact-methods">
        <div class="contact-method" data-method="quote">
          <span class="contact-icon">📋</span>
          <h4>Request Quote</h4>
          <p>Get a detailed estimate</p>
        </div>
        <div class="contact-method" data-method="schedule">
          <span class="contact-icon">📅</span>
          <h4>Schedule Visit</h4>
          <p>Book a consultation</p>
        </div>
        <div class="contact-method" data-method="chat">
          <span class="contact-icon">💬</span>
          <h4>Live Chat</h4>
          <p>Instant support</p>
        </div>
      </div>
    `;
    
    ctaContent.insertAdjacentHTML('beforeend', contactMethodsHtml);
    
    // Add click handlers
    const methods = document.querySelectorAll('.contact-method');
    methods.forEach(method => {
      method.addEventListener('click', function() {
        const type = this.dataset.method;
        handleContactMethod(type);
      });
    });
  }
  
  // Handle contact method clicks
  function handleContactMethod(type) {
    switch(type) {
      case 'quote':
        window.location.href = 'quote.php';
        break;
      case 'schedule':
        openScheduleModal();
        break;
      case 'chat':
        openChatWidget();
        break;
    }
  }
  
  // Schedule modal
  function openScheduleModal() {
    const modal = document.createElement('div');
    modal.className = 'schedule-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h3>Schedule a Visit</h3>
        <p>Select your preferred date and time:</p>
        <form class="schedule-form">
          <input type="date" required min="${new Date().toISOString().split('T')[0]}">
          <select required>
            <option value="">Select Time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
          <input type="tel" placeholder="Your Phone Number" required>
          <button type="submit" class="btn btn-primary">Schedule Now</button>
        </form>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    
    // Close handlers
    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.onclick = (e) => {
      if (e.target === modal) closeModal(modal);
    };
    
    // Form submission
    modal.querySelector('.schedule-form').onsubmit = (e) => {
      e.preventDefault();
      showNotification('Visit scheduled successfully! We\'ll contact you soon.', 'success');
      closeModal(modal);
    };
  }
  
  // Chat widget
  function openChatWidget() {
    // Simulate opening chat widget
    const chatButton = document.querySelector('.whatsapp-float');
    if (chatButton) {
      chatButton.click();
    } else {
      showNotification('Chat feature coming soon!', 'info');
    }
  }
  
  // Close modal
  function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  // Animate CTA stats
  function animateCTAStats() {
    // Create stats if not exists
    const ctaContent = document.querySelector('.cta-content');
    if (!ctaContent || document.querySelector('.cta-stats')) return;
    
    const statsHtml = `
      <div class="cta-stats">
        <div class="cta-stat">
          <span class="cta-stat-number" data-value="24">0</span>
          <span class="cta-stat-label">Hour Response</span>
        </div>
        <div class="cta-stat">
          <span class="cta-stat-number" data-value="100">0</span>
          <span class="cta-stat-label">% Satisfaction</span>
        </div>
        <div class="cta-stat">
          <span class="cta-stat-number" data-value="5">0</span>
          <span class="cta-stat-label">Year Warranty</span>
        </div>
      </div>
    `;
    
    ctaContent.insertAdjacentHTML('beforeend', statsHtml);
    
    // Animate numbers
    const statNumbers = document.querySelectorAll('.cta-stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const targetValue = parseInt(element.dataset.value);
          animateNumber(element, targetValue);
          statsObserver.unobserve(element);
        }
      });
    }, {
      threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
      statsObserver.observe(stat);
    });
  }
  
  // Animate number counter
  function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 30);
  }
  
  // Add button effects
  function addButtonEffects() {
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    
    ctaButtons.forEach(button => {
      // Magnetic effect on hover
      button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
      });
      
      // Click ripple effect
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'cta-ripple';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
  
  // Social links effects
  function addSocialEffects() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach((link, index) => {
      // Stagger animation on load
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        link.style.transition = 'all 0.5s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
      }, 2000 + (index * 100));
      
      // Hover effect
      link.addEventListener('mouseenter', function() {
        socialLinks.forEach(otherLink => {
          if (otherLink !== this) {
            otherLink.style.opacity = '0.6';
            otherLink.style.transform = 'scale(0.95)';
          }
        });
      });
      
      link.addEventListener('mouseleave', function() {
        socialLinks.forEach(otherLink => {
          otherLink.style.opacity = '1';
          otherLink.style.transform = 'scale(1)';
        });
      });
    });
  }
  
  // Add additional styles
  const additionalStyles = `
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .schedule-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .schedule-modal.active {
      opacity: 1;
    }
    
    .schedule-modal .modal-content {
      background: var(--color-white);
      padding: var(--spacing-2xl);
      border-radius: var(--radius-lg);
      max-width: 400px;
      width: 90%;
      position: relative;
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }
    
    .schedule-modal.active .modal-content {
      transform: scale(1);
    }
    
    .schedule-modal .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: var(--color-gray);
    }
    
    .schedule-form {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      margin-top: var(--spacing-lg);
    }
    
    .schedule-form input,
    .schedule-form select {
      padding: var(--spacing-md);
      border: 1px solid var(--color-gray-light);
      border-radius: var(--radius-md);
      font-size: var(--fs-base);
    }
    
    .schedule-form button {
      width: 100%;
      padding: var(--spacing-md);
    }
    
    .cta-ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ctaRipple 0.6s ease-out;
      pointer-events: none;
    }
    
    @keyframes ctaRipple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .cta-buttons .btn {
      position: relative;
      overflow: hidden;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
  
  // Show notification helper
  function showNotification(message, type) {
    if (window.showNotification) {
      window.showNotification(message, type);
    } else {
      console.log(message);
    }
  }
});