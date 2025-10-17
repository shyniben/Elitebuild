/* ========================================
   PROJECTS SECTION JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Project Cards Animation
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectCards.length > 0) {
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const delay = card.dataset.delay || index * 100;
          
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, delay);
          
          // Animate project stats
          const stats = card.querySelectorAll('.stat-value');
          stats.forEach(stat => {
            animateProjectStat(stat);
          });
          
          projectObserver.unobserve(card);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    projectCards.forEach(card => {
      projectObserver.observe(card);
    });
  }
  
  // Animate project statistics
  function animateProjectStat(element) {
    const text = element.textContent;
    const hasPercentage = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    
    if (!isNaN(number)) {
      let current = 0;
      const increment = number / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        
        let display = Math.floor(current);
        if (hasPercentage) display += '%';
        if (hasPlus) display += '+';
        element.textContent = display;
      }, 50);
    }
  }
  
  // Project Gallery Modal
  function initProjectGallery() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach(img => {
      img.style.cursor = 'zoom-in';
      
      img.addEventListener('click', function() {
        openGalleryModal(this.src, this.alt);
      });
    });
  }
  
  function openGalleryModal(src, alt) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.project-gallery-modal');
    
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'project-gallery-modal';
      modal.innerHTML = `
        <div class="gallery-content">
          <button class="gallery-close">&times;</button>
          <img src="" alt="">
          <div class="gallery-nav">
            <button class="gallery-prev">❮</button>
            <button class="gallery-next">❯</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    
    const modalImg = modal.querySelector('img');
    modalImg.src = src;
    modalImg.alt = alt;
    
    // Show modal
    setTimeout(() => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 10);
    
    // Close modal
    const closeBtn = modal.querySelector('.gallery-close');
    closeBtn.onclick = () => closeGalleryModal(modal);
    
    // Close on outside click
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeGalleryModal(modal);
      }
    };
    
    // Close on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
      if (e.key === 'Escape') {
        closeGalleryModal(modal);
        document.removeEventListener('keydown', closeOnEscape);
      }
    });
  }
  
  function closeGalleryModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  // Initialize gallery
  initProjectGallery();
  
  // Add project timeline animation
  function createProjectTimeline() {
    projectCards.forEach(card => {
      // Sample timeline data
      const timelineData = [
        { date: 'Week 1', title: 'Initial consultation & measurements' },
        { date: 'Week 2', title: 'Material procurement & preparation' },
        { date: 'Week 3-4', title: 'Installation & finishing' },
        { date: 'Week 5', title: 'Quality check & handover' }
      ];
      
      const timeline = document.createElement('div');
      timeline.className = 'project-timeline';
      
      timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.1}s`;
        timelineItem.innerHTML = `
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-title">${item.title}</div>
        `;
        timeline.appendChild(timelineItem);
      });
      
      // Add timeline to card (optional - can be toggled)
      const infoSection = card.querySelector('.project-info');
      if (infoSection && !card.querySelector('.project-timeline')) {
        // Commented out to avoid automatic insertion
        // infoSection.appendChild(timeline);
      }
    });
  }
  
  // Project card hover effects
  projectCards.forEach(card => {
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.project-overlay');
    
    if (image && overlay) {
      // Parallax effect on hover
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    }
    
    // Add project details animation
    const details = card.querySelectorAll('.project-scope, .project-outcome');
    details.forEach((detail, index) => {
      detail.style.opacity = '0';
      detail.style.transform = 'translateX(-20px)';
      
      const detailObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.transition = 'all 0.5s ease';
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            
            detailObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });
      
      detailObserver.observe(detail);
    });
  });
  
  // Create animated project tags
  function createProjectTags() {
    projectCards.forEach(card => {
      const tags = ['Premium Quality', 'On Time', 'Within Budget', 'ISO Certified'];
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'project-tags';
      
      tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'project-tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
      
      const imageContainer = card.querySelector('.project-image');
      if (imageContainer && !card.querySelector('.project-tags')) {
        imageContainer.appendChild(tagsContainer);
      }
    });
  }
  
  // Initialize tags
  createProjectTags();
  
  // Project filter animation
  function addProjectFilters() {
    const projectsSection = document.querySelector('.projects');
    if (!projectsSection || document.querySelector('.project-filters')) return;
    
    const filtersHtml = `
      <div class="project-filters">
        <button class="filter-btn active" data-filter="all">All Projects</button>
        <button class="filter-btn" data-filter="residential">Residential</button>
        <button class="filter-btn" data-filter="commercial">Commercial</button>
        <button class="filter-btn" data-filter="featured">Featured</button>
      </div>
    `;
    
    const sectionHeader = projectsSection.querySelector('.section-header');
    if (sectionHeader) {
      sectionHeader.insertAdjacentHTML('afterend', filtersHtml);
      
      // Add filter functionality
      const filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          const filter = this.dataset.filter;
          filterProjects(filter);
        });
      });
    }
  }
  
  function filterProjects(filter) {
    projectCards.forEach((card, index) => {
      card.style.transition = 'all 0.3s ease';
      
      if (filter === 'all') {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.display = 'block';
      } else {
        // Simulate filtering (in real implementation, check data attributes)
        const shouldShow = Math.random() > 0.3;
        
        if (shouldShow) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.display = 'block';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      }
    });
  }
  
  // Initialize filters
  setTimeout(addProjectFilters, 500);
  
  // Add additional styles
  const additionalStyles = `
    .project-tags {
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      gap: var(--spacing-sm);
      flex-wrap: wrap;
      z-index: 2;
    }
    
    .project-tag {
      background: rgba(255, 255, 255, 0.9);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      font-size: var(--fs-xs);
      font-weight: 500;
      color: var(--color-primary);
      backdrop-filter: blur(10px);
      opacity: 0;
      transform: translateY(10px);
      animation: tagFadeIn 0.5s ease forwards;
    }
    
    .project-tag:nth-child(1) { animation-delay: 0.1s; }
    .project-tag:nth-child(2) { animation-delay: 0.2s; }
    .project-tag:nth-child(3) { animation-delay: 0.3s; }
    .project-tag:nth-child(4) { animation-delay: 0.4s; }
    
    @keyframes tagFadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-filters {
      display: flex;
      justify-content: center;
      gap: var(--spacing-md);
      margin: var(--spacing-2xl) 0;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      background: var(--color-white);
      border: 2px solid var(--color-gray-light);
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-full);
      font-weight: 500;
      color: var(--color-gray);
      cursor: pointer;
      transition: all var(--transition-base);
    }
    
    .filter-btn:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
    }
    
    .filter-btn.active {
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-white);
    }
    
    .gallery-nav {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      pointer-events: none;
    }
    
    .gallery-prev,
    .gallery-next {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      pointer-events: all;
    }
    
    .gallery-prev:hover,
    .gallery-next:hover {
      background: var(--color-accent);
    }
    
    @media (max-width: 768px) {
      .project-tags {
        display: none;
      }
      
      .project-filters {
        padding: 0 var(--spacing-lg);
      }
      
      .filter-btn {
        font-size: var(--fs-sm);
        padding: var(--spacing-xs) var(--spacing-md);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);
});