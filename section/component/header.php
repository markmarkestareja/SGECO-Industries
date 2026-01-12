<header>
    <div class="navbar">
        <div class="brand">
            <a href="home" class="logo">
                <img src="asset/img/logo/SG Eco Logo.webp" alt="SG Eco Logo">
            </a>
        </div>

        <button class="menu-toggle" id="menu-toggle">&#9776;</button>

        <nav class="nav" id="nav">
            <ul class="nav-list">
                <li><a href="home" class="<?= $page === 'home' ? 'active' : '';?>">Home</a></li>
                <li><a href="about" class="<?= $page ==='about' ? 'active' : ''; ?>">About Us</a></li>

                <li class="dropdown">
                    <a href="#" class="<?= $page === 'products' || 
                        $page === 'skylight' || $page === 'ventilator' || 
                        $page === 'custom-manufacturing' ||
                        $page === 'how-skylight-work' ||
                        $page === 'faq' ||
                        $page === 'why-you-need-skytunnel' ||
                        $page === 'optional-ventilation-skylight' ||
                        $page === 'rigid98-reflection-calculator' || 
                        $page === 'skytunnel-accessories' ||
                        $page === 'skylight-component' ||
                        $page === 'large-commercial-sky-tunnel' ||
                        $page === 'product-service' ||
                        $page === 'custom-services' ||
                        $page === 'accessories'
                        ? 'active' 
                        : '';?>">Products & Services ▾</a>
                    <ul class="dropdown-menu">
                        <!-- Skylight -->
                        <li class="menu-heading"><a href="skylight">SKYLIGHT</a></li>
                        <li class="dropdown-sub">
                            <a href="#">Sky Tunnel Skylight ▸</a>
                            <ul class="dropdown-inner">
                                <li><a href="how-skylight-work">How Does It Work?</a></li>
                                <li><a href="faq">FAQs</a></li>
                                <li><a href="why-you-need-skytunnel">Why You Need Sky Tunnel</a></li>
                                <li><a href="optional-ventilation-skylight">Optional Ventilation for Sky Tunnel</a></li>
                                <li>
                                    <a href="rigid98-reflection-calculator">Sky Tunnel Rigid98 Tube Reflection and Light Output Calculator</a>
                                </li>
                                <li><a href="skytunnel-accessories">Sky Tunnel Accessories</a></li>
                            </ul>
                        </li>
                        <li><a href="skylight-component">Skylight Components</a></li>
                        <li><a href="large-commercial-sky-tunnel">Large Commercial Sky Tunnel</a></li>

                        <!-- Ventilators -->
                        <li class="menu-heading"><a href="ventilator">VENTILATOR</a></li>
                        <li><a href="product-service?prod=gvw">Green-Vent Wind Driven Ventilator</a></li>
                        <li><a href="product-service?prod=gvs">Green-Vent Solar</a></li>
                        <li><a href="product-service?prod=whirlwind">Whirlwind Roof Ventilator</a></li>
                        <li><a href="product-service?prod=whirlwind-plus">Whirlwind Plus</a></li>
                        <li><a href="product-service?prod=ducting-kit">Ventilator Ducting Kit</a></li>
                        <li><a href="product-service?prod=eave-vent">Under Eave Vent</a></li>

                        <!-- Custom Services -->
                        <li class="menu-heading"><a href="custom-manufacturing">CUSTOM SERVICES</a></li>
                        <li><a href="product-service?prod=hatchway">Access Hatchways</a></li>
                        <li><a href="product-service?prod=thermoforming">Thermoforming</a></li>
                        <li><a href="product-service?prod=sheet-metal">Sheet Metal Fabrication</a></li>
                        <li><a href="product-service?prod=custom-skylight">Custom Brand Skylights</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="<?= 
                        $page === 'case-studies' ||
                        $page === 'download' ||
                        $page === 'gallery-img' ||
                        $page === 'gallery-video' ||
                        $page === 'eco-blog' ||
                        $page === 'news-update' ||
                        $page === 'testimonial' ||
                        $page === 'terms-privacy'
                        ? 'active'
                        : '';?>">Resources ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="case-studies" class="<?= $page === 'case-studies' ? 'active' : '' ?>">Case Studies</a></li>
                        <li><a href="download" class="<?= $page === 'download' ? 'active' : '' ?>">Downloads</a></li>
                        <li><a href="gallery-img" class="<?= $page === 'gallery-img' ? 'active' : '' ?>">Photo Gallery</a></li>
                        <li><a href="gallery-video" class="<?= $page === 'gallery-video' ? 'active' : '' ?>">Video Gallery</a></li>
                        <li><a href="eco-blog" class="<?= $page === 'eco-blog' ? 'active' : '' ?>">Eco Blog</a></li>
                        <li><a href="news-update" class="<?= $page === 'news-update' ? 'active' : '' ?>">News Releases</a></li>
                        <li><a href="testimonial" class="<?= $page === 'testimonial' ? 'active' : '' ?>">Testimonials</a></li>
                        <li><a href="terms-privacy" class="<?= $page === 'terms-privacy' ? 'active' : '' ?>">ToS & Privacy</a></li>
                    </ul>
                </li>
                <li><a href="contact" class="<?= $page === 'contact' ? 'active' : ''; ?>">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>


