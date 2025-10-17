<?php
/**
 * Footer Component - EliteBuild Solutions
 */
?>
    </main>
    <!-- End Main Content -->
    <link rel="stylesheet" href="assets/css/footer.css">

    <!-- Footer -->
    <footer class="footer" id="footer">
        <div class="footer-wave">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M0,20 C150,60 350,0 600,30 C850,60 1050,0 1300,30 L1440,20 L1440,60 L0,60 Z"></path>
            </svg>
        </div>

        <div class="footer-content">
            <div class="container">
                <div class="footer-grid">
                    <!-- Company Info -->
                    <div class="footer-column footer-company" data-animate="fade-up">
                        <div class="footer-logo">
                            <span class="logo-icon">🏗️</span>
                            <span class="logo-text">EliteBuild Solutions</span>
                        </div>
                        <p class="footer-description">
                            Transforming spaces with premium UPVC/Steel Windows, Bathroom Doors, Gypsum, and Handrails. 
                            15+ years of excellence in the UAE.
                        </p>
                        <div class="footer-certifications">
                            <img src="images/iso-badge.svg" alt="ISO 9001 Certified" class="cert-badge">
                            <img src="images/quality-badge.svg" alt="Quality Assured" class="cert-badge">
                        </div>
                    </div>

                    <!-- Services -->
                    <div class="footer-column" data-animate="fade-up" data-delay="100">
                        <h4 class="footer-title">Our Services</h4>
                        <ul class="footer-links">
                            <li><a href="services.php#upvc">UPVC Windows & Doors</a></li>
                            <li><a href="services.php#steel">Steel Windows & Doors</a></li>
                            <li><a href="services.php#gypsum">Gypsum Works</a></li>
                            <li><a href="services.php#bathroom">Bathroom Doors</a></li>
                            <li><a href="services.php#handrails">Handrails & Balustrades</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-column" data-animate="fade-up" data-delay="200">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="about.php">About Us</a></li>
                            <li><a href="portfolio.php">Our Projects</a></li>
                            <li><a href="testimonials.php">Client Reviews</a></li>
                            <li><a href="blog.php">Blog & News</a></li>
                            <li><a href="careers.php">Careers</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div class="footer-column footer-contact" data-animate="fade-up" data-delay="300">
                        <h4 class="footer-title">Get In Touch</h4>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span class="contact-icon">📍</span>
                                <div>
                                    <strong>Head Office</strong><br>
                                    123 Business Bay<br>
                                    Dubai, UAE
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">📞</span>
                                <div>
                                    <a href="tel:+971501234567">+971 50 123 4567</a><br>
                                    <a href="tel:+97142345678">+971 4 234 5678</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">✉️</span>
                                <a href="mailto:info@elitebuildsolutions.com">info@elitebuildsolutions.com</a>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">🕐</span>
                                <div>
                                    Mon-Sat: 9AM - 6PM<br>
                                    Friday: Closed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Newsletter Section -->
                <div class="footer-newsletter" data-animate="fade-up" data-delay="400">
                    <div class="newsletter-content">
                        <div class="newsletter-text">
                            <h3>Stay Updated</h3>
                            <p>Subscribe to get the latest news, offers, and project showcases</p>
                        </div>
                        <form class="newsletter-form" id="newsletterForm">
                            <div class="form-group">
                                <input type="email" 
                                       placeholder="Enter your email address" 
                                       required 
                                       class="newsletter-input"
                                       name="email">
                                <button type="submit" class="btn btn-primary newsletter-btn">
                                    Subscribe
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10L17 10M17 10L11 4M17 10L11 16" stroke="currentColor" stroke-width="2" fill="none"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <div class="footer-copyright">
                            <p>&copy; <?php echo date('Y'); ?> EliteBuild Solutions. All Rights Reserved.</p>
                        </div>
                        <div class="footer-legal">
                            <a href="privacy.php">Privacy Policy</a>
                            <a href="terms.php">Terms of Service</a>
                            <a href="sitemap.php">Sitemap</a>
                        </div>
                        <div class="footer-social">
                            <a href="#" aria-label="Facebook" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                                    <circle cx="12" cy="12" r="3.2"/>
                                    <circle cx="18.4" cy="5.6" r="1.44"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="WhatsApp" class="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.031 2c-5.52 0-10 4.48-10 10 0 1.75.45 3.39 1.24 4.81l-1.29 4.7 4.81-1.26c1.39.76 2.98 1.19 4.68 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.04 14.23c-.22.62-1.29 1.2-1.78 1.25-.48.05-.48.39-3.02-.63-2.54-1.02-4.14-3.6-4.27-3.77-.13-.17-1.03-1.37-1.03-2.61s.65-1.85.88-2.1c.23-.25.5-.31.67-.31s.34.01.49.02c.16.01.37-.06.58.44.22.52.74 1.81.81 1.95.07.13.12.29.02.47-.1.17-.15.28-.29.43-.15.15-.31.34-.44.46-.15.13-.31.27-.13.53.17.25.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.08.18-.21.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.15 1.37z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- WhatsApp Floating Button -->
        <a href="https://wa.me/971501234567" 
           target="_blank" 
           class="whatsapp-float" 
           aria-label="Chat on WhatsApp">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2c-5.52 0-10 4.48-10 10 0 1.75.45 3.39 1.24 4.81l-1.29 4.7 4.81-1.26c1.39.76 2.98 1.19 4.68 1.19 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.04 14.23c-.22.62-1.29 1.2-1.78 1.25-.48.05-.48.39-3.02-.63-2.54-1.02-4.14-3.6-4.27-3.77-.13-.17-1.03-1.37-1.03-2.61s.65-1.85.88-2.1c.23-.25.5-.31.67-.31s.34.01.49.02c.16.01.37-.06.58.44.22.52.74 1.81.81 1.95.07.13.12.29.02.47-.1.17-.15.28-.29.43-.15.15-.31.34-.44.46-.15.13-.31.27-.13.53.17.25.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.08.18-.21.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.15 1.37z"/>
            </svg>
            <span class="whatsapp-text">Chat with us</span>
        </a>
    </footer>

    <!-- JavaScript Files -->
    <script src="assets/js/common.js"></script>
    <script src="assets/js/header.js"></script>
    <script src="assets/js/footer.js"></script>
    
    <?php 
    // Include page-specific JS files
    if(isset($page_js) && is_array($page_js)) {
        foreach($page_js as $js_file) {
            echo '<script src="assets/js/' . $js_file . '"></script>';
        }
    }
    ?>
</body>
</html>