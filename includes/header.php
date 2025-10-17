<?php
/**
 * Header Component - EliteBuild Solutions
 * Includes navigation and full-screen mobile menu
 */

// Get current page for active menu highlighting
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EliteBuild Solutions - Premium UPVC/Steel Windows, Bathroom Doors, Gypsum, and Handrails">
    <meta name="keywords" content="UPVC windows, steel doors, bathroom doors, gypsum ceiling, handrails, Dubai, UAE">
    
    <title><?php echo isset($page_title) ? $page_title . ' - ' : ''; ?>EliteBuild Solutions</title>
    
    <!-- Fonts -->
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"> -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Signika:wght@300..700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/common.css">
    <link rel="stylesheet" href="assets/css/header.css">
    
    <?php 
    // Include page-specific CSS files
    if(isset($page_css) && is_array($page_css)) {
        foreach($page_css as $css_file) {
            echo '<link rel="stylesheet" href="assets/css/' . $css_file . '">';
        }
    }
    ?>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="preloader-inner">
            <div class="spinner"></div>
            <p>Loading Excellence...</p>
        </div>
    </div>

    <!-- Header Navigation -->
    <header class="header" id="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <!-- Logo -->
                    <a href="index.php" class="logo">
                        <span class="logo-icon">🏗️</span>
                        <span class="logo-text">EliteBuild</span>
                        <span class="logo-tagline">Solutions</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="index.php" class="nav-link <?php echo $current_page == 'index' ? 'active' : ''; ?>">
                                Home
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="services.php" class="nav-link <?php echo $current_page == 'services' ? 'active' : ''; ?>">
                                Services
                                <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" fill="none"/>
                                </svg>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="services.php#upvc">UPVC Windows & Doors</a></li>
                                <li><a href="services.php#steel">Steel Windows & Doors</a></li>
                                <li><a href="services.php#gypsum">Gypsum Works</a></li>
                                <li><a href="services.php#bathroom">Bathroom Doors</a></li>
                                <li><a href="services.php#handrails">Handrails</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="portfolio.php" class="nav-link <?php echo $current_page == 'portfolio' ? 'active' : ''; ?>">
                                Portfolio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="about.php" class="nav-link <?php echo $current_page == 'about' ? 'active' : ''; ?>">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.php" class="nav-link <?php echo $current_page == 'contact' ? 'active' : ''; ?>">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <!-- CTA Button -->
                    <div class="nav-cta">
                        <a href="quote.php" class="btn btn-primary nav-btn">
                            Get Quote
                        </a>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                        <span class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Full Screen Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-menu-content">
                <div class="mobile-menu-header">
                    <a href="index.php" class="mobile-logo">
                        <span class="logo-icon">🏗️</span>
                        <span class="logo-text">EliteBuild</span>
                    </a>
                    <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <nav class="mobile-menu-nav">
                    <ul class="mobile-menu-list">
                        <li class="mobile-menu-item" data-animation-delay="100">
                            <a href="index.php" class="mobile-menu-link">Home</a>
                        </li>
                        <li class="mobile-menu-item has-dropdown" data-animation-delay="200">
                            <a href="#" class="mobile-menu-link mobile-dropdown-toggle">
                                Services
                                <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" fill="none"/>
                                </svg>
                            </a>
                            <ul class="mobile-dropdown">
                                <li><a href="services.php#upvc">UPVC Windows & Doors</a></li>
                                <li><a href="services.php#steel">Steel Windows & Doors</a></li>
                                <li><a href="services.php#gypsum">Gypsum Works</a></li>
                                <li><a href="services.php#bathroom">Bathroom Doors</a></li>
                                <li><a href="services.php#handrails">Handrails</a></li>
                            </ul>
                        </li>
                        <li class="mobile-menu-item" data-animation-delay="300">
                            <a href="portfolio.php" class="mobile-menu-link">Portfolio</a>
                        </li>
                        <li class="mobile-menu-item" data-animation-delay="400">
                            <a href="about.php" class="mobile-menu-link">About Us</a>
                        </li>
                        <li class="mobile-menu-item" data-animation-delay="500">
                            <a href="contact.php" class="mobile-menu-link">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div class="mobile-menu-footer">
                    <a href="quote.php" class="btn btn-primary mobile-cta-btn">Get Free Quote</a>
                    
                    <div class="mobile-contact-info">
                        <a href="tel:+971501234567" class="mobile-contact-link">
                            <span>📞</span> +971 50 123 4567
                        </a>
                        <a href="mailto:info@elitebuildsolutions.com" class="mobile-contact-link">
                            <span>✉️</span> info@elitebuildsolutions.com
                        </a>
                    </div>

                    <div class="mobile-social-links">
                        <a href="#" aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content Wrapper -->
    <main class="main-content">