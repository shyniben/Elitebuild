<?php
/**
 * EliteBuild Solutions - Homepage
 */

// Page configuration
$page_title = 'Premium UPVC Windows, Doors & Interior Solutions';
$page_css = ['hero.css', 'expertise.css', 'features.css', 'products.css', 'testimonials.css', 'projects.css', 'cta.css'];
$page_js = ['hero.js', 'expertise*.js', 'features.js', 'products.js', 'testimonials.js', 'projects.js'];

// Include header
include('includes/header.php');
?>

<!-- Hero Section with Slideshow -->
<section class="hero" id="hero">
    <div class="hero-slider">
        <div class="slide active" data-bg="assets/images/hero-slide-1.png">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title" data-animate="fade-up">
                            Welcome to <span class="text-accent">EliteBuild Solutions</span>
                        </h1>
                        <p class="hero-subtitle" data-animate="fade-up" data-delay="200">
                            Transforming Spaces with Premium UPVC/Steel Windows, Bathroom Doors, Gypsum, and Handrails
                        </p>
                        <p class="hero-description" data-animate="fade-up" data-delay="400">
                            Discover high-quality, durable, and stylish building solutions tailored to your needs
                        </p>
                        <div class="hero-buttons" data-animate="fade-up" data-delay="600">
                            <a href="quote.php" class="btn btn-primary btn-lg">
                                Get a Quote Now
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M10 4L16 10L10 16M4 10H16" stroke="currentColor" stroke-width="2" fill="none"/>
                                </svg>
                            </a>
                            <a href="portfolio.php" class="btn btn-white btn-lg">
                                Explore Our Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="slide" data-bg="assets/images/hero-slide-2.png">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <div class="container">
                    <div class="hero-content">
                        <h2 class="hero-title">Energy-Efficient UPVC Windows</h2>
                        <p class="hero-subtitle">Reduce energy costs by up to 30% with thermal insulation</p>
                        <div class="hero-buttons">
                            <a href="services.php#upvc" class="btn btn-primary btn-lg">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="slide" data-bg="assets/images/hero-slide-3.jpg">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <div class="container">
                    <div class="hero-content">
                        <h2 class="hero-title">Premium Steel Security Doors</h2>
                        <p class="hero-subtitle">Maximum security with contemporary industrial design</p>
                        <div class="hero-buttons">
                            <a href="services.php#steel" class="btn btn-primary btn-lg">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Slider Controls -->
    <div class="slider-controls">
        <button class="slider-prev" aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
        <button class="slider-next" aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
    </div>
    
    <!-- Slider Indicators -->
    <div class="slider-indicators">
        <span class="indicator active" data-slide="0"></span>
        <span class="indicator" data-slide="1"></span>
        <span class="indicator" data-slide="2"></span>
    </div>
    
    <!-- Quick Navigation -->
    <div class="quick-nav">
        <div class="container">
            <div class="quick-nav-grid">
                <a href="services.php#upvc" class="quick-nav-item">
                    <div class="quick-nav-icon">🪟</div>
                    <span>UPVC Windows</span>
                </a>
                <a href="services.php#steel" class="quick-nav-item">
                    <div class="quick-nav-icon">🚪</div>
                    <span>Steel Doors</span>
                </a>
                <a href="services.php#gypsum" class="quick-nav-item">
                    <div class="quick-nav-icon">🏗️</div>
                    <span>Gypsum Works</span>
                </a>
                <a href="services.php#bathroom" class="quick-nav-item">
                    <div class="quick-nav-icon">🚿</div>
                    <span>Bathroom Doors</span>
                </a>
                <a href="services.php#handrails" class="quick-nav-item">
                    <div class="quick-nav-icon">🛡️</div>
                    <span>Handrails</span>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Areas of Expertise Section -->
<section class="expertise" id="expertise">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Areas of Expertise</h2>
            <p class="section-subtitle">
                Specializing in trading and installing premium building materials designed for durability, 
                aesthetics, and functionality
            </p>
        </div>
        
        <div class="expertise-stats" data-animate="fade-up" data-delay="200">
            <div class="stat-item">
                <span class="stat-number counter" data-target="12" data-duration="2000">0</span>
                <span class="stat-suffix">+</span>
                <p class="stat-label">Years Experience</p>
            </div>
            <div class="stat-item">
                <span class="stat-number counter" data-target="700" data-duration="2500">0</span>
                <span class="stat-suffix">+</span>
                <p class="stat-label">Projects Completed</p>
            </div>
            <div class="stat-item">
                <span class="stat-icon">🏆</span>
                <p class="stat-label">ISO 9001 Certified</p>
            </div>
        </div>
        
        <div class="expertise-grid">
            <div class="expertise-card" data-animate="fade-up" data-delay="100">
                <div class="expertise-icon">
                    <img src="assets/images/upvc-icon.svg" alt="UPVC Windows">
                </div>
                <h3>UPVC and Steel Windows</h3>
                <p>Energy-efficient, soundproof, and weather-resistant windows for modern homes and offices</p>
                <ul class="expertise-features">
                    <li>Thermal insulation</li>
                    <li>UV-resistant frames</li>
                    <li>Multi-point locking</li>
                </ul>
            </div>
            
            <div class="expertise-card" data-animate="fade-up" data-delay="200">
                <div class="expertise-icon">
                    <img src="images/door-icon.svg" alt="Bathroom Doors">
                </div>
                <h3>Bathroom Doors</h3>
                <p>Waterproof, stylish, and customizable doors available in sliding, folding, and swing designs</p>
                <ul class="expertise-features">
                    <li>100% waterproof</li>
                    <li>Mold-resistant</li>
                    <li>15+ years lifespan</li>
                </ul>
            </div>
            
            <div class="expertise-card" data-animate="fade-up" data-delay="300">
                <div class="expertise-icon">
                    <img src="assets/images/gypsum-icon.svg" alt="Gypsum Products">
                </div>
                <h3>Gypsum Products</h3>
                <p>Lightweight, fire-resistant gypsum boards and ceilings for seamless interior finishes</p>
                <ul class="expertise-features">
                    <li>Fire-resistant (2hrs)</li>
                    <li>Acoustic insulation</li>
                    <li>Smooth finishes</li>
                </ul>
            </div>
            
            <div class="expertise-card" data-animate="fade-up" data-delay="400">
                <div class="expertise-icon">
                    <img src="images/handrail-icon.svg" alt="Handrails">
                </div>
                <h3>Handrails</h3>
                <p>Elegant and safe handrails in steel, wood, or composite materials for staircases and balconies</p>
                <ul class="expertise-features">
                    <li>Corrosion-resistant</li>
                    <li>ADA compliant</li>
                    <li>Custom designs</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="features" id="features">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Why Choose Us? Key Features</h2>
            <p class="section-subtitle">Experience excellence with our comprehensive solutions</p>
        </div>
        
        <div class="features-grid">
            <div class="feature-item" data-animate="slide-left" data-delay="100">
                <div class="feature-icon">
                    <span>🏆</span>
                </div>
                <h3>Premium Quality</h3>
                <p>Sourced from trusted global manufacturers, our products meet ISO 9001 standards</p>
            </div>
            
            <div class="feature-item" data-animate="slide-left" data-delay="200">
                <div class="feature-icon">
                    <span>🎨</span>
                </div>
                <h3>Custom Solutions</h3>
                <p>Tailored designs to match your style, from minimalist to classic</p>
            </div>
            
            <div class="feature-item" data-animate="slide-left" data-delay="300">
                <div class="feature-icon">
                    <span>👷</span>
                </div>
                <h3>Expert Installation</h3>
                <p>Certified technicians ensure flawless setup with a 5-year warranty</p>
            </div>
            
            <div class="feature-item" data-animate="slide-left" data-delay="400">
                <div class="feature-icon">
                    <span>🌱</span>
                </div>
                <h3>Eco-Friendly</h3>
                <p>Energy-efficient UPVC windows and recyclable materials reduce your carbon footprint</p>
            </div>
            
            <div class="feature-item" data-animate="slide-left" data-delay="500">
                <div class="feature-icon">
                    <span>💰</span>
                </div>
                <h3>Competitive Pricing</h3>
                <p>Transparent quotes with no hidden costs, starting at $150 per window installation</p>
            </div>
            
            <div class="feature-item" data-animate="slide-left" data-delay="600">
                <div class="feature-icon">
                    <span>⚡</span>
                </div>
                <h3>Fast Turnaround</h3>
                <p>Projects completed in as little as 5 days, depending on scope</p>
            </div>
        </div>
    </div>
</section>

<!-- Featured Products Section -->
<section class="products" id="products">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Featured Products</h2>
            <p class="section-subtitle">Discover our range of premium building solutions</p>
        </div>
        
        <div class="products-tabs">
            <div class="tabs-nav" data-animate="fade-up" data-delay="200">
                <button class="tab-btn active" data-tab="upvc">UPVC Windows</button>
                <button class="tab-btn" data-tab="bathroom">Bathroom Doors</button>
                <button class="tab-btn" data-tab="gypsum">Gypsum Ceilings</button>
                <button class="tab-btn" data-tab="handrails">Handrails</button>
            </div>
            
            <div class="tabs-content">
                <div class="tab-pane active" id="upvc">
                    <div class="product-showcase">
                        <div class="product-image">
                            <img src="assets/images/upvc-showcase.png" alt="UPVC Windows">
                        </div>
                        <div class="product-info">
                            <h3>UPVC Windows</h3>
                            <div class="product-features">
                                <div class="feature">
                                    <strong>Technical Advantages:</strong>
                                    <ul>
                                        <li>Thermal insulation reduces energy costs by up to 30%</li>
                                        <li>UV-resistant frames prevent fading</li>
                                        <li>Multi-point locking for enhanced security</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <strong>Styles:</strong> Casement, sliding, tilt-and-turn
                                </div>
                                <div class="feature">
                                    <strong>Applications:</strong> Homes, offices, retail spaces
                                </div>
                            </div>
                            <a href="services.php#upvc" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="bathroom">
                    <div class="product-showcase">
                        <div class="product-image">
                            <img src="assets/images/bathroom-doors-showcase.png" alt="Bathroom Doors">
                        </div>
                        <div class="product-info">
                            <h3>Bathroom Doors</h3>
                            <div class="product-features">
                                <div class="feature">
                                    <strong>Technical Advantages:</strong>
                                    <ul>
                                        <li>100% waterproof and mold-resistant</li>
                                        <li>Lightweight yet durable, with 15+ years lifespan</li>
                                        <li>Easy-clean surfaces for low maintenance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <strong>Styles:</strong> Frosted glass, paneled, solid designs
                                </div>
                            </div>
                            <a href="services.php#bathroom" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="gypsum">
                    <div class="product-showcase">
                        <div class="product-image">
                            <img src="assets/images/gypsum-showcase.jpg" alt="Gypsum Ceilings">
                        </div>
                        <div class="product-info">
                            <h3>Gypsum Ceilings & Partitions</h3>
                            <div class="product-features">
                                <div class="feature">
                                    <strong>Technical Advantages:</strong>
                                    <ul>
                                        <li>Fire-resistant (up to 2 hours per ASTM E119 standards)</li>
                                        <li>Acoustic insulation for noise reduction</li>
                                        <li>Smooth finishes for easy painting or texturing</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <strong>Applications:</strong> Commercial offices, residential interiors
                                </div>
                            </div>
                            <a href="services.php#gypsum" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="handrails">
                    <div class="product-showcase">
                        <div class="product-image">
                            <img src="assets/images/handrails-showcase.jpg" alt="Handrails">
                        </div>
                        <div class="product-info">
                            <h3>Handrails</h3>
                            <div class="product-features">
                                <div class="feature">
                                    <strong>Technical Advantages:</strong>
                                    <ul>
                                        <li>Corrosion-resistant stainless steel or treated wood</li>
                                        <li>Ergonomic designs for safety and comfort</li>
                                        <li>Compliant with ADA accessibility standards</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <strong>Styles:</strong> Modern, classic, or custom ornamental
                                </div>
                            </div>
                            <a href="services.php#handrails" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="products-cta">
            <a href="products.php" class="btn btn-secondary btn-lg">View Full Product Catalog</a>
        </div>
    </div>
</section>

<!-- Key Projects Section -->
<section class="projects" id="projects">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Key Projects</h2>
            <p class="section-subtitle">Showcasing our commitment to excellence</p>
        </div>
        
        <div class="projects-grid">
            <div class="project-card" data-animate="scale" data-delay="100">
                <div class="project-image">
                    <img src="assets/images/project-oceanview.png" alt="Oceanview Residences">
                    <div class="project-overlay">
                        <a href="portfolio.php#oceanview" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Oceanview Residences, Dubai</h3>
                    <p class="project-scope">
                        <strong>Scope:</strong> Installed 120 UPVC casement windows and 50 bathroom doors for a 20-story residential tower
                    </p>
                    <p class="project-outcome">
                        <strong>Outcome:</strong> Reduced energy costs by 25% and enhanced aesthetic appeal
                    </p>
                    <blockquote class="project-testimonial">
                        "EliteBuild delivered on time with exceptional quality."
                    </blockquote>
                </div>
            </div>
            
            <div class="project-card" data-animate="scale" data-delay="200">
                <div class="project-image">
                    <img src="assets/images/project-skyline.png" alt="Skyline Corporate Park">
                    <div class="project-overlay">
                        <a href="portfolio.php#skyline" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Skyline Corporate Park, Abu Dhabi</h3>
                    <p class="project-scope">
                        <strong>Scope:</strong> Supplied and installed gypsum ceilings and steel handrails for a 10,000 sq. ft. office complex
                    </p>
                    <p class="project-outcome">
                        <strong>Outcome:</strong> Improved acoustics and safety, completed in 7 days
                    </p>
                    <blockquote class="project-testimonial">
                        "Their team was professional and exceeded expectations."
                    </blockquote>
                </div>
            </div>
        </div>
        
        <div class="projects-cta">
            <a href="portfolio.php" class="btn btn-primary btn-lg">See More Projects in Our Gallery</a>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Client Testimonials</h2>
            <p class="section-subtitle">What our satisfied customers say about us</p>
        </div>
        
        <div class="testimonials-carousel">
            <div class="testimonial-slide active">
                <div class="testimonial-content">
                    <div class="testimonial-stars">
                        ⭐⭐⭐⭐⭐
                    </div>
                    <p class="testimonial-text">
                        "EliteBuild transformed our home with their sleek UPVC windows. The installation was quick, and the team was professional. Highly recommend!"
                    </p>
                    <div class="testimonial-author">
                        <img src="assets/images/client-sarah.png" alt="Sarah Al-Mansoori">
                        <div class="author-info">
                            <h4>Sarah Al-Mansoori</h4>
                            <p>Homeowner, Sharjah</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-slide">
                <div class="testimonial-content">
                    <div class="testimonial-stars">
                        ⭐⭐⭐⭐⭐
                    </div>
                    <p class="testimonial-text">
                        "Their gypsum ceilings gave our office a modern look, and the soundproofing is fantastic. Great service from start to finish."
                    </p>
                    <div class="testimonial-author">
                        <img src="assets/images/client-mohammed.png" alt="Mohammed Khan">
                        <div class="author-info">
                            <h4>Mohammed Khan</h4>
                            <p>CEO, Skyline Enterprises</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="testimonial-slide">
                <div class="testimonial-content">
                    <div class="testimonial-stars">
                        ⭐⭐⭐⭐⭐
                    </div>
                    <p class="testimonial-text">
                        "The bathroom doors are stylish and durable. EliteBuild's attention to detail is unmatched."
                    </p>
                    <div class="testimonial-author">
                        <img src="assets/images/client-aisha.png" alt="Aisha Rahman">
                        <div class="author-info">
                            <h4>Aisha Rahman</h4>
                            <p>Interior Designer, Dubai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="testimonial-nav">
            <button class="testimonial-prev" aria-label="Previous testimonial">❮</button>
            <button class="testimonial-next" aria-label="Next testimonial">❯</button>
        </div>
        
        <div class="testimonials-cta">
            <a href="testimonials.php" class="btn btn-secondary">Read More Client Stories</a>
        </div>
    </div>
</section>

<!-- Technical Advantages Section -->
<section class="technical" id="technical">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="heading-2">Technical Advantages of Our Products</h2>
            <p class="section-subtitle">Industry-leading specifications and performance</p>
        </div>
        
        <div class="technical-grid">
            <div class="technical-card" data-animate="fade-up" data-delay="100">
                <div class="technical-icon">⚡</div>
                <h3>Energy Efficiency</h3>
                <p>UPVC windows with double glazing reduce heat transfer, lowering AC costs</p>
            </div>
            
            <div class="technical-card" data-animate="fade-up" data-delay="200">
                <div class="technical-icon">🛡️</div>
                <h3>Durability</h3>
                <p>Steel handrails and UPVC frames resist corrosion, ideal for humid climates</p>
            </div>
            
            <div class="technical-card" data-animate="fade-up" data-delay="300">
                <div class="technical-icon">🔒</div>
                <h3>Safety</h3>
                <p>Handrails meet international safety standards; windows feature anti-burglary locks</p>
            </div>
            
            <div class="technical-card" data-animate="fade-up" data-delay="400">
                <div class="technical-icon">🧹</div>
                <h3>Low Maintenance</h3>
                <p>Non-porous surfaces prevent mold and simplify cleaning</p>
            </div>
            
            <div class="technical-card" data-animate="fade-up" data-delay="500">
                <div class="technical-icon">🎨</div>
                <h3>Customization</h3>
                <p>Choose from 50+ colors, finishes, and sizes for all products</p>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="cta-section" id="cta">
    <div class="cta-bg" data-parallax="0.5"></div>
    <div class="container">
        <div class="cta-content" data-animate="fade-up">
            <h2 class="heading-2">Get Started Today</h2>
            <p class="cta-subtitle">
                Ready to upgrade your space? Contact us for a free consultation or explore our products.
            </p>
            <div class="cta-buttons">
                <a href="quote.php" class="btn btn-primary btn-lg">
                    Request a Quote
                </a>
                <a href="tel:+971501234567" class="btn btn-white btn-lg">
                    <span>📞</span> Call Us: +971-50-123-4567
                </a>
                <a href="mailto:info@elitebuildsolutions.com" class="btn btn-white btn-lg">
                    <span>✉️</span> Email Us
                </a>
            </div>
            
            <!-- <div class="follow-us">
                <p>Follow Us:</p>
                <div class="social-links">
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="Facebook">Facebook</a>
                </div>
            </div> -->
        </div>
    </div>
</section>

<?php
// Include footer
include('includes/footer.php');
?>