/* ========================================
   FOOTER JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Newsletter Form Handler
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[name="email"]');
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Basic email validation
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        emailInput.focus();
        return;
      }
      
      // Show loading state
      submitBtn.innerHTML = '<span class="spinner-small"></span> Subscribing...';
      submitBtn.disabled = true;
      
      // Simulate API call (replace with actual API endpoint)
      setTimeout(() => {
        // Success response
        showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
        emailInput.value = '';
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        // Add success animation
        newsletterForm.classList.add('success');
        setTimeout(() => {
          newsletterForm.classList.remove('success');
        }, 3000);
      }, 1500);
    });
  }
  
  // Footer Animation on Scroll
  const footerElements = document.querySelectorAll('[data-animate]');
  
  if (footerElements.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.dataset.delay || 0;
          
          setTimeout(() => {
            element.classList.add('in-view');
          }, delay);
          
          footerObserver.unobserve(element);
        }
      });
    }, observerOptions);
    
    footerElements.forEach(element => {
      footerObserver.observe(element);
    });
  }
  
  // WhatsApp Button Enhancement
  const whatsappFloat = document.querySelector('.whatsapp-float');
  
  if (whatsappFloat) {
    // Show/hide based on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', EliteBuild.utils.throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        whatsappFloat.style.transform = 'translateY(100px)';
      } else {
        // Scrolling up
        whatsappFloat.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    }, 100));
    
    // Add click tracking
    whatsappFloat.addEventListener('click', () => {
      // Track WhatsApp click (integrate with analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Contact',
          'event_label': 'WhatsApp Float Button'
        });
      }
    });
  }
  
  // Dynamic Copyright Year
  const copyrightYear = document.querySelector('.footer-copyright p');
  if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = copyrightYear.innerHTML.replace(/\d{4}/, currentYear);
  }
  
  // Social Links Animation
  const socialLinks = document.querySelectorAll('.social-link');
  
  // socialLinks.forEach(link => {
  //   link.addEventListener('mouseenter', function() {
  //     this.style.animation = 'bounce 0.5s ease';
  //   });
    
  //   link.addEventListener('animationend', function() {
  //     this.style.animation = '';
  //   });
  // });
  
  // Footer Links Hover Effect
  const footerLinks = document.querySelectorAll('.footer-links a');
  
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      // Add stagger effect to siblings
      const siblings = Array.from(this.parentElement.parentElement.querySelectorAll('a'));
      const currentIndex = siblings.indexOf(this);
      
      siblings.forEach((sibling, index) => {
        if (index !== currentIndex) {
          const distance = Math.abs(index - currentIndex);
          sibling.style.transform = `translateX(${distance * 2}px)`;
          sibling.style.opacity = Math.max(0.5, 1 - (distance * 0.1));
        }
      });
    });
    
    link.addEventListener('mouseleave', function() {
      const siblings = Array.from(this.parentElement.parentElement.querySelectorAll('a'));
      siblings.forEach(sibling => {
        sibling.style.transform = '';
        sibling.style.opacity = '';
      });
    });
  });
  
  // Notification System
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification-toast');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-toast notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${getNotificationIcon(type)}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close">×</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Auto dismiss after 5 seconds
    const autoDismiss = setTimeout(() => {
      dismissNotification(notification);
    }, 5000);
    
    // Manual dismiss
    notification.querySelector('.notification-close').addEventListener('click', () => {
      clearTimeout(autoDismiss);
      dismissNotification(notification);
    });
  }
  
  function dismissNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }
  
  function getNotificationIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  }
  
  // Add animation keyframes
  const bounceKeyframes = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-10px); }
      75% { transform: translateY(5px); }
    }
  `;
  
  // Notification styles
  const notificationStyles = `
    .notification-toast {
      position: fixed;
      top: 100px;
      right: -400px;
      background: white;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      padding: var(--spacing-md) var(--spacing-lg);
      z-index: var(--z-toast);
      transition: right var(--transition-base);
      max-width: 400px;
    }
    
    .notification-toast.show {
      right: var(--spacing-lg);
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }
    
    .notification-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .notification-success .notification-icon {
      background: var(--color-success);
      color: white;
    }
    
    .notification-error .notification-icon {
      background: var(--color-danger);
      color: white;
    }
    
    .notification-warning .notification-icon {
      background: var(--color-warning);
      color: white;
    }
    
    .notification-info .notification-icon {
      background: var(--color-info);
      color: white;
    }
    
    .notification-message {
      flex: 1;
      color: var(--color-primary);
    }
    
    .notification-close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--color-gray);
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color var(--transition-base);
    }
    
    .notification-close:hover {
      color: var(--color-primary);
    }
    
    .spinner-small {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      display: inline-block;
    }
    
    .newsletter-form.success {
      animation: successPulse 0.6s ease;
    }
    
    @keyframes successPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }
  `;
  
  // Inject styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = bounceKeyframes + notificationStyles;
  document.head.appendChild(styleSheet);
});

// Export notification function for global use
window.showNotification = function(message, type) {
  const event = new CustomEvent('showNotification', { 
    detail: { message, type } 
  });
  document.dispatchEvent(event);
};

document.addEventListener('showNotification', function(e) {
  const { message, type } = e.detail;
  showNotification(message, type);
});