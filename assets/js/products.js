/* ========================================
   PRODUCTS SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Products Tabs Functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  if (tabButtons.length > 0) {
    // Initialize tab indicator
    const tabsNav = document.querySelector('.tabs-nav');
    const indicator = document.createElement('div');
    indicator.className = 'tab-indicator';
    tabsNav.appendChild(indicator);
    
    // Set initial indicator position
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
      updateIndicator(activeTab, indicator);
    }
    
    // Tab switching
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.dataset.tab;
        
        // Remove active class from all tabs and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding pane
        this.classList.add('active');
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
          targetPane.classList.add('active');
          
          // Animate content
          animateTabContent(targetPane);
        }
        
        // Update indicator position
        updateIndicator(this, indicator);
        
        // Track tab click for analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'tab_click', {
            'tab_name': targetTab
          });
        }
      });
    });
    
    // Update indicator position
    function updateIndicator(activeTab, indicator) {
      const tabRect = activeTab.getBoundingClientRect();
      const navRect = activeTab.parentElement.getBoundingClientRect();
      
      indicator.style.width = tabRect.width + 'px';
      indicator.style.left = (tabRect.left - navRect.left) + 'px';
    }
    
    // Animate tab content
    function animateTabContent(pane) {
      const elements = pane.querySelectorAll('.product-image, .product-info');
      elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = index === 0 ? 'translateX(-20px)' : 'translateX(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.5s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }, index * 100);
      });
    }
  }
  
  // Product Image Gallery
  function initProductGallery() {
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(imageContainer => {
      // Sample gallery images (replace with actual images)
      const galleryImages = [
        imageContainer.querySelector('img')?.src || 'assets/images/product-1.png',
        'assets/images/product-2.png',
        'assets/images/product-3.png'
      ];
      
      let currentImageIndex = 0;
      const img = imageContainer.querySelector('img');
      
      // Create dots
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'image-dots';
      
      galleryImages.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          changeImage(index);
        });
        dotsContainer.appendChild(dot);
      });
      
      imageContainer.appendChild(dotsContainer);
      
      // Change image function
      function changeImage(index) {
        if (!img) return;
        
        currentImageIndex = index;
        
        // Fade out
        img.style.opacity = '0';
        
        setTimeout(() => {
          img.src = galleryImages[index];
          // Fade in
          img.style.opacity = '1';
        }, 300);
        
        // Update dots
        dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
      
      // Auto-rotate images
      let autoRotateInterval;
      
      function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
          const nextIndex = (currentImageIndex + 1) % galleryImages.length;
          changeImage(nextIndex);
        }, 3000);
      }
      
      function stopAutoRotate() {
        clearInterval(autoRotateInterval);
      }
      
      // Start auto-rotate on hover
      imageContainer.addEventListener('mouseenter', stopAutoRotate);
      imageContainer.addEventListener('mouseleave', startAutoRotate);
      
      // Initialize
      if (img) {
        img.style.transition = 'opacity 0.3s ease';
      }
    });
  }
  
  // Initialize product gallery after a delay
  setTimeout(initProductGallery, 500);
  
  // Product Showcase Parallax
  const productShowcases = document.querySelectorAll('.product-showcase');
  
  productShowcases.forEach(showcase => {
    showcase.addEventListener('mousemove', (e) => {
      const rect = showcase.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      const image = showcase.querySelector('.product-image');
      if (image) {
        image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
    
    showcase.addEventListener('mouseleave', () => {
      const image = showcase.querySelector('.product-image');
      if (image) {
        image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    });
  });
  
  // Technical Cards Animation
  const technicalCards = document.querySelectorAll('.technical-card');
  
  if (technicalCards.length > 0) {
    const technicalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.dataset.delay || index * 100;
          
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, delay);
          
          technicalObserver.unobserve(element);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    technicalCards.forEach(card => {
      technicalObserver.observe(card);
    });
  }
  
  // Product Feature Highlighting
  const productFeatures = document.querySelectorAll('.feature ul li');
  
  productFeatures.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    
    // Stagger animation on scroll
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.5s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 50);
          
          featureObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    featureObserver.observe(feature);
  });
  
  // Create floating specs animation
  function createFloatingSpecs() {
    const productsSection = document.querySelector('.products');
    if (!productsSection) return;
    
    const specs = ['ISO 9001', 'UV Resistant', '30% Energy Saving', '15+ Years', 'Eco-Friendly'];
    const specsContainer = document.createElement('div');
    specsContainer.className = 'floating-specs';
    
    specs.forEach((spec, index) => {
      const specElement = document.createElement('div');
      specElement.className = 'floating-spec';
      specElement.textContent = spec;
      specElement.style.animationDelay = `${index * 2}s`;
      specElement.style.left = `${10 + (index * 20)}%`;
      specsContainer.appendChild(specElement);
    });
    
    productsSection.appendChild(specsContainer);
  }
  
  // Initialize floating specs
  setTimeout(createFloatingSpecs, 1000);
  
  // Quick view modal for products
  function initQuickView() {
    const learnMoreButtons = document.querySelectorAll('.product-info .btn');
    
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `
          <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>Product Details</h2>
            <p>Full product specifications and details would appear here.</p>
            <p>This would typically link to the services page or open a detailed view.</p>
          </div>
        `;
        
        document.body.appendChild(modal);
        
        // Show modal
        setTimeout(() => {
          modal.classList.add('active');
        }, 10);
        
        // Close modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
          modal.classList.remove('active');
          setTimeout(() => {
            modal.remove();
          }, 300);
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
              modal.remove();
            }, 300);
          }
        });
      });
    });
  }
  
  // Initialize quick view
  initQuickView();
  
  // Add additional styles
  const additionalStyles = `
    .floating-specs {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }
    
    .floating-spec {
      position: absolute;
      top: 100%;
      background: var(--color-accent);
      color: var(--color-white);
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--radius-full);
      font-size: var(--fs-xs);
      font-weight: 600;
      opacity: 0;
      animation: floatSpec 15s linear infinite;
    }
    
    @keyframes floatSpec {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.7;
      }
      90% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    .product-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .product-modal.active {
      opacity: 1;
    }
    
    .modal-content {
      background: var(--color-white);
      padding: var(--spacing-2xl);
      border-radius: var(--radius-lg);
      max-width: 600px;
      width: 90%;
      position: relative;
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }
    
    .product-modal.active .modal-content {
      transform: scale(1);
    }
    
    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: var(--color-gray);
      transition: color 0.3s ease;
    }
    
    .modal-close:hover {
      color: var(--color-primary);
    }
    
    @media (max-width: 768px) {
      .floating-specs {
        display: none;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
});