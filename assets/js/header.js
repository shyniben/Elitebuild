/* ========================================
   HEADER & MOBILE MENU JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const header = document.getElementById('header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  const body = document.body;

  // Header scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuToggle.classList.add('active');
    body.style.overflow = 'hidden';
    
    // Animate menu items
    const menuItems = document.querySelectorAll('.mobile-menu-item');
    menuItems.forEach((item, index) => {
      item.style.animation = 'none';
      setTimeout(() => {
        item.style.animation = '';
      }, 10);
    });
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    body.style.overflow = '';
    
    // Close all dropdowns
    document.querySelectorAll('.has-dropdown').forEach(item => {
      item.classList.remove('active');
    });
  }

  // Event listeners for mobile menu
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Mobile dropdown toggles
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.has-dropdown');
      
      // Close other dropdowns
      document.querySelectorAll('.has-dropdown').forEach(item => {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      parent.classList.toggle('active');
    });
  });

  // Close mobile menu when clicking on a link (except dropdown toggles)
  document.querySelectorAll('.mobile-menu-link:not(.mobile-dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu when clicking on dropdown links
  document.querySelectorAll('.mobile-dropdown a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Desktop dropdown hover effect with delay
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  let dropdownTimeout;

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(dropdownTimeout);
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'block';
        setTimeout(() => {
          menu.style.opacity = '1';
          menu.style.visibility = 'visible';
          menu.style.transform = 'translateY(0)';
        }, 10);
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        dropdownTimeout = setTimeout(() => {
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
          menu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            menu.style.display = 'none';
          }, 300);
        }, 100);
      }
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#0') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active menu item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', EliteBuild.utils.throttle(highlightActiveSection, 100));

  // Header hide/show on mobile swipe
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    if (!mobileMenu.classList.contains('active')) {
      if (touchEndY < touchStartY - 50) {
        // Swipe up - hide header
        header.style.transform = 'translateY(-100%)';
      }
      if (touchEndY > touchStartY + 50) {
        // Swipe down - show header
        header.style.transform = 'translateY(0)';
      }
    }
  }

  // Prevent body scroll when mobile menu is open
  function preventBodyScroll(prevent) {
    if (prevent) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }

  // Update mobile menu state on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    }, 250);
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
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
});

// Add ripple effect styles
const rippleStyles = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .btn {
    position: relative;
    overflow: hidden;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);