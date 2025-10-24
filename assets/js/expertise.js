/* ========================================
   EXPERTISE SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Expertise Section Elements
  const expertiseSection = document.querySelector('.expertise');
  const expertiseCards = document.querySelectorAll('.expertise-card');
  const statItems = document.querySelectorAll('.expertise-stats .stat-item');
  
  if (expertiseSection) {
    // Initialize animations
    initExpertiseAnimations();
    
    // Counter animations
    initCounterAnimations();
    
    // Card interactions
    initCardInteractions();
    
    // Add floating elements
    createFloatingElements();
    
    // Expertise progress bars
    createProgressBars();
  }
  
  // Initialize expertise animations
  function initExpertiseAnimations() {
    // Section header animation
    const sectionHeader = expertiseSection.querySelector('.section-header');
    if (sectionHeader) {
      const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            headerObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.3
      });
      
      headerObserver.observe(sectionHeader);
    }
    
    // Stats section animation
    const expertiseStats = expertiseSection.querySelector('.expertise-stats');
    if (expertiseStats) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Trigger counter animations
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
              animateCounter(counter);
            });
            
            statsObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.3
      });
      
      statsObserver.observe(expertiseStats);
    }
    
    // Cards animation
    expertiseCards.forEach((card, index) => {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Animate features list
            const features = entry.target.querySelectorAll('.expertise-features li');
            features.forEach((feature, i) => {
              setTimeout(() => {
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
              }, 100 + (i * 50));
            });
            
            cardObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2
      });
      
      cardObserver.observe(card);
    });
  }
  
  // Counter animations
  function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      counter.textContent = '0';
      
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });
      
      counterObserver.observe(counter);
    });
  }
  
  // Animate counter function
  function animateCounter(element) {
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
  }
  
  // Card interactions
  function initCardInteractions() {
    expertiseCards.forEach((card, index) => {
      // Set up features animation
      const features = card.querySelectorAll('.expertise-features li');
      features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';
        feature.style.transition = 'all 0.5s ease';
      });
      
      // Hover effects
      card.addEventListener('mouseenter', function() {
        // Scale neighboring cards
        const cards = Array.from(expertiseCards);
        const currentIndex = cards.indexOf(this);
        
        cards.forEach((otherCard, i) => {
          if (i !== currentIndex) {
            const distance = Math.abs(i - currentIndex);
            otherCard.style.transform = `scale(${1 - (distance * 0.02)})`;
            otherCard.style.opacity = `${1 - (distance * 0.1)}`;
          }
        });
        
        // Animate icon
        const icon = this.querySelector('.expertise-icon');
        if (icon) {
          icon.style.animation = 'iconPulse 0.5s ease';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        // Reset all cards
        expertiseCards.forEach(otherCard => {
          otherCard.style.transform = '';
          otherCard.style.opacity = '';
        });
        
        // Reset icon animation
        const icon = this.querySelector('.expertise-icon');
        if (icon) {
          icon.style.animation = '';
        }
      });
      
      // Click interaction
      card.addEventListener('click', function() {
        openExpertiseModal(this);
      });
    });
  }
  
  // Open expertise modal
  function openExpertiseModal(card) {
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    const features = Array.from(card.querySelectorAll('.expertise-features li')).map(li => li.textContent);
    
    const modal = document.createElement('div');
    modal.className = 'expertise-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-header">
          <div class="modal-icon">${card.querySelector('.expertise-icon').innerHTML}</div>
          <h2>${title}</h2>
        </div>
        <div class="modal-body">
          <p>${description}</p>
          <h4>Key Features:</h4>
          <ul class="modal-features">
            ${features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="modal-stats">
            <div class="modal-stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Customer Satisfaction</span>
            </div>
            <div class="modal-stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="modal-stat">
              <span class="stat-number">5yr</span>
              <span class="stat-label">Warranty Period</span>
            </div>
          </div>
          <a href="services.php" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 10);
    
    // Close handlers
    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.onclick = (e) => {
      if (e.target === modal) closeModal(modal);
    };
  }
  
  // Close modal
  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  // Create floating elements
  function createFloatingElements() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    
    const elements = ['🪟', '🚪', '🏗️', '🔧', '✨'];
    
    elements.forEach((element, index) => {
      const floater = document.createElement('div');
      floater.className = 'floater';
      floater.textContent = element;
      floater.style.left = `${10 + (index * 20)}%`;
      floater.style.animationDelay = `${index * 2}s`;
      floater.style.animationDuration = `${15 + (index * 3)}s`;
      floatingContainer.appendChild(floater);
    });
    
    if (expertiseSection && !expertiseSection.querySelector('.floating-elements')) {
      expertiseSection.appendChild(floatingContainer);
    }
  }
  
  // Create progress bars for expertise levels
  function createProgressBars() {
    expertiseCards.forEach(card => {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'expertise-progress';
      
      // Sample progress data
      const progressData = [
        { label: 'Quality', value: 95 },
        { label: 'Speed', value: 90 },
        { label: 'Innovation', value: 85 }
      ];
      
      progressData.forEach(data => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        progressItem.innerHTML = `
          <div class="progress-label">
            <span>${data.label}</span>
            <span class="progress-value">${data.value}%</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" data-progress="${data.value}"></div>
          </div>
        `;
        progressContainer.appendChild(progressItem);
      });
      
      // Add to card (optional - can be shown on hover)
      card.appendChild(progressContainer);
      progressContainer.style.display = 'none';
      
      // Show on hover
      card.addEventListener('mouseenter', () => {
        progressContainer.style.display = 'block';
        
        // Animate progress bars
        const progressBars = progressContainer.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
          const progress = bar.dataset.progress;
          setTimeout(() => {
            bar.style.width = progress + '%';
          }, 100);
        });
      });
      
      card.addEventListener('mouseleave', () => {
        progressContainer.style.display = 'none';
      });
    });
  }
  
  // Add additional styles
  const additionalStyles = `
    @keyframes iconPulse {
      0%, 100% {
        transform: scale(1) rotate(0deg);
      }
      25% {
        transform: scale(1.1) rotate(5deg);
      }
      75% {
        transform: scale(0.95) rotate(-5deg);
      }
    }
    
    .expertise-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .expertise-modal.active {
      opacity: 1;
    }
    
    .expertise-modal .modal-content {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }
    
    .expertise-modal.active .modal-content {
      transform: scale(1);
    }
    
    .modal-header {
      padding: var(--spacing-2xl);
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      color: var(--color-white);
      text-align: center;
    }
    
    .modal-icon {
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-lg);
    }
    
    .modal-body {
      padding: var(--spacing-2xl);
    }
    
    .modal-features {
      list-style: none;
      padding: 0;
      margin: var(--spacing-lg) 0;
    }
    
    .modal-features li {
      padding: var(--spacing-sm) 0;
      padding-left: var(--spacing-xl);
      position: relative;
    }
    
    .modal-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-success);
      font-weight: bold;
    }
    
    .modal-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-lg);
      margin: var(--spacing-xl) 0;
      text-align: center;
    }
    
    .modal-stat .stat-number {
      display: block;
      font-size: var(--fs-2xl);
      font-weight: 700;
      color: var(--color-accent);
    }
    
    .modal-stat .stat-label {
      font-size: var(--fs-xs);
      color: var(--color-gray);
      text-transform: uppercase;
    }
    
    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 1;
    }
    
    .modal-close:hover {
      background: var(--color-white);
      transform: rotate(90deg);
    }
    
    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
    
    .floater {
      position: absolute;
      font-size: 2rem;
      opacity: 0.1;
      animation: floatAround 20s infinite ease-in-out;
    }
    
    @keyframes floatAround {
      0%, 100% {
        transform: translateY(100vh) rotate(0deg);
      }
      25% {
        transform: translateY(75vh) translateX(20px) rotate(90deg);
      }
      50% {
        transform: translateY(50vh) translateX(-20px) rotate(180deg);
      }
      75% {
        transform: translateY(25vh) translateX(20px) rotate(270deg);
      }
    }
    
    .expertise-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: var(--spacing-lg);
      border-top: 1px solid var(--color-gray-light);
      backdrop-filter: blur(10px);
    }
    
    .progress-item {
      margin-bottom: var(--spacing-sm);
    }
    
    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-xs);
      font-size: var(--fs-xs);
    }
    
    .progress-value {
      color: var(--color-accent);
      font-weight: 600;
    }
    
    .progress-bar-container {
      height: 6px;
      background: var(--color-gray-light);
      border-radius: var(--radius-full);
      overflow: hidden;
    }
    
    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));
      border-radius: var(--radius-full);
      width: 0;
      transition: width 1s ease;
    }
    
    @media (max-width: 768px) {
      .expertise-modal .modal-content {
        max-height: 100vh;
        border-radius: 0;
        width: 100%;
        max-width: 100%;
      }
      
      .modal-stats {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
});