<?php
session_start();
        
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$page = $_GET['page'] ?? 'home';

$page = preg_replace('/[^a-zA-Z0-9\-]/', '', $page);



function console_log($data) {
    $json = json_encode($data);
    echo "<script>console.log(JSON.parse('{$json}'));</script>";
}
console_log("Requested page: " . $page);




$file = __DIR__ . "/page/$page.php";

if (file_exists($file)) {
    $content = $file;
    $is404 = false;
} else {
    $content = __DIR__ . "/page/404.php";
    $is404 = true;
    http_response_code(404); // SEO-friendly
}

function getMetaDescription($page, $is404) {
    if ($is404) {
        return "This page could not be found on SGEco Industries. Please return to the homepage.";
    }

    $descriptions = [
        'home' => 'SG Eco Industries: Premium eco-friendly skylights, ventilators & custom manufacturing. Energy-efficient solutions for 38+ years. Get sustainable building solutions today.',
        'about' => 'Discover SG Eco Industries\' 38-year journey in sustainable building solutions. Learn about our eco-friendly skylights, ventilators, and commitment to environmental responsibility and quality manufacturing.',
        'products' => 'Explore SGEco Industries\' wide range of eco-friendly products designed for a sustainable future.',
        'services' => 'Discover the services offered by SGEco Industries to help you achieve your sustainability goals.',
        'contact' => 'Get in touch with SGEco Industries for inquiries, support, and more information about our offerings.',
        'case-studies' => 'Explore SGEco Industries case studies showcasing real projects in skylights, ventilators, and fabrication—proven solutions that improve airflow, lighting, and efficiency.',
        'contact-distributor' => 'Find and contact an SGEco Industries distributor near you. Get expert help on skylights, ventilators, and custom fabrication solutions today.',
        'contact-distributor-list' => 'Browse the official SGEco Industries distributor list. Find authorized partners for skylights, ventilators, and fabrication services near you.',
        'custom-manufacturing' => 'SGEco Industries offers custom manufacturing solutions including thermoforming, sheet metal, and fiberglass fabrication—built to your exact specifications.',
        'download' => 'Download SGEco Industries brochures, product guides, installation instructions, and certifications for skylights, ventilators, and fabrication solutions.',
        'eco-blog-list' => '',
        'eco-blog' => 'Explore the SGEco Industries blog for insights on skylights, ventilators, and sustainable building solutions. Tips, guides, and industry updates.',
        'faq' => 'Find answers to common questions about SGEco Industries skylights—installation, maintenance, types, and energy-efficient solutions for homes and industries.',
        'gallery-img' => 'Browse the SGEco Industries image gallery showcasing skylights, ventilators, and custom fabrication projects—real installations and product highlights.',
        'gallery-video' => 'Watch SGEco Industries videos showcasing skylights, ventilators, and custom fabrication projects—installation guides, product demos, and project highlights.',
        'how-skylight-work' => 'Learn how SGEco skylights work to bring natural light, improve ventilation, and boost energy efficiency in residential and industrial spaces.',
        'large-commercial-sky-tunnel' => 'SGEco Industries designs and manufactures large commercial sky tunnels to bring natural light, improve ventilation, and enhance energy efficiency for industrial and commercial spaces.',
        'news-update-full' => '',
        'news-update' => 'Stay updated with SGEco Industries news—latest product launches, industry insights, project updates, and eco-friendly building solutions.',
        'optional-ventilation-skylight' => 'SGEco Industries optional ventilation skylights enhance natural light and airflow while improving energy efficiency—perfect for residential and commercial spaces.',
        'product-service' => 'Explore SGEco Industries’ products and services, including skylights, ventilators, inlet vents, and custom fabrication—eco-friendly, energy-efficient solutions for any space.',
        'rigid98-reflection-calculator' => 'Use SGEco Industries’ Rigid98 Reflection Calculator to accurately measure skylight and ventilation reflection for optimized daylight and airflow in any space.',
        'skylight-component' => 'Explore SGEco Industries’ skylight components, including frames, glazing, and accessories—engineered for durability, energy efficiency, and superior daylight performance.',
        'skylight' => 'SGEco Industries skylights bring natural light, improve ventilation, and boost energy efficiency. Perfect for residential and industrial spaces.',
        'skytunnel-accessories' => 'Explore SGEco Industries’ Sky Tunnel Accessories—frames, diffusers, and components designed to enhance natural lighting, airflow, and energy efficiency.',
        'terms-privacy' => 'Read SGEco Industries’ Terms of Service and Privacy Policy. Learn how we protect your data and outline rules for using our products and services.',
        'testimonial' => 'Read SGEco Industries customer testimonials—real feedback on skylights, ventilators, and custom fabrication projects showcasing quality and reliability.',
        'ventilator' => 'SGEco Industries ventilators improve airflow, reduce heat, and enhance energy efficiency. Ideal for residential and industrial spaces.',
        'why-you-need-skytunnel' => 'Discover why SGEco Sky Tunnels are essential for natural lighting, improved ventilation, and energy savings in residential and commercial spaces.',
        
    ];

    $fallback = 'SGEco Industries is dedicated to providing eco-friendly solutions and sustainable innovations for a better future.';

    return htmlspecialchars($descriptions[$page] ?? $fallback);
}

$metaDescription = getMetaDescription($page, $is404);

// Disable Lenis
$currentPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$disableLenis = str_contains($currentPath, 'product-service');

function getTitleTag($page) {
    $titleTag = [
        'home' => 'Eco-Friendly Skylights & Ventilators in Philippines | SG Eco Industries',
        'about' => 'About SG Eco Industries: 38 Years of Eco-Friendly Skylights & Ventilators',

    ];

    return htmlspecialchars($titleTag[$page] ?? 'SGEco Industries');
}

console_log(getTitleTag($page));

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once 'includes/asset.php'; ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
    <?= $is404
        ? 'Page Not Found - SGEco Industries'
        : getTitleTag($page) . ' | SGEco Industries'
    ?>
    </title>

    <meta name="description" content="<?= $metaDescription ?>">

    <?php if ($is404): ?>
        <meta name="robots" content="noindex, follow">
    <?php else: ?>
        <link rel="canonical" href="https://www.eco.ph<?= $page === 'home' ? '/' : '/' . $page ?>">
    <?php endif; ?>

    <link rel="stylesheet" href="<?= asset('style/index.css') ?>">


    <meta property="og:title" content="<?= getTitleTag($page) ?> | SGEco Industries">
    <meta property="og:description" content="<?= $metaDescription ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.eco.ph<?= $page === 'home' ? '/' : '/' . $page ?>">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta property="og:image" content="asset/img/logo/SG Eco Logo.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="SG Eco Industries Logo">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= getTitleTag($page) ?> | SGEco Industries">
    <meta name="twitter:description" content="<?= $metaDescription ?>">
    <meta name="twitter:image" content="./asset/img/logo/SG Eco Logo.webp">

    <meta property="og:site_name" content="SGEco Industries">

    <meta http-equiv="content-language" content="en">

    <!-- Favicon -->
    <link rel="icon" href="/SGECO-Industries/asset/img/logo/SG Eco Logo.ico" sizes="any">
    <link rel="icon" type="image/webp" sizes="32x32" href="/SGECO-Industries/asset/img/logo/SG Eco Logo.webp">
    <link rel="icon" type="image/webp" sizes="16x16" href="/SGECO-Industries/asset/img/logo/SG Eco Logo.webp">
    <link rel="apple-touch-icon" href="/SGECO-Industries/asset/img/logo/SG Eco Logo.webp">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
    
    <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@graph": [

        {
        "@type": "Organization",
        "@id": "https://eco.ph/#organization",
        "name": "SG Eco Industries",
        "url": "https://eco.ph",
        "logo": "https://eco.ph/asset/img/logo/SG Eco Logo.webp",
        "sameAs": [
            "https://www.facebook.com/sgecoind",
            "https://www.linkedin.com/company/sg-eco-industries"
        ]
        },

        {
        "@type": "LocalBusiness",
        "@id": "https://eco.ph/#business",
        "name": "SG Eco Industries",
        "url": "https://eco.ph",
        "image": "https://eco.ph/asset/img/logo/SG Eco Logo.webp",
        "description": "Sustainable building solutions provider specializing in eco-friendly skylights, roof ventilators, and custom manufacturing.",
        "foundingDate": "1986",
        "areaServed": "PH",
        "parentOrganization": {
            "@id": "https://eco.ph/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Angeles City",
            "addressRegion": "Pampanga",
            "addressCountry": "PH"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "url": "https://eco.ph/contact"
        },
        "sameAs": [
            "https://www.facebook.com/sgecoind",
            "https://www.linkedin.com/company/sg-eco-industries"
        ]
        },

        {
        "@type": "Product",
        "@id": "https://eco.ph/#skylight-basic",
        "name": "Eco-Friendly Skylights",
        "description": "Natural daylighting solutions that reduce energy consumption and improve indoor comfort.",
        "image": [
            "https://eco.ph/asset/img/products/skylight.webp"
        ],
        "brand": {
            "@id": "https://eco.ph/#organization"
        },
        "mainEntityOfPage": "https://eco.ph/skylight",
        "offers": {
            "@type": "Offer",
            "url": "https://eco.ph/skylight",
            "priceCurrency": "PHP",
            "price": "0",
            "availability": "https://schema.org/InStock"
        }
        },

        {
        "@type": "Product",
        "@id": "https://eco.ph/#roof-ventilators",
        "name": "Eco Roof Ventilators",
        "description": "Energy-efficient roof ventilators designed to improve airflow, reduce heat buildup, and enhance indoor air quality.",
        "image": [
            "https://eco.ph/asset/img/products/ventilator.webp"
        ],
        "brand": {
            "@id": "https://eco.ph/#organization"
        },
        "mainEntityOfPage": "https://eco.ph/ventilators",
        "offers": {
            "@type": "Offer",
            "url": "https://eco.ph/ventilators",
            "priceCurrency": "PHP",
            "price": "0",
            "availability": "https://schema.org/InStock"
        }
        },

        {
        "@type": "Service",
        "@id": "https://eco.ph/#custom-manufacturing",
        "name": "Custom Manufacturing Solutions",
        "description": "Bespoke manufacturing services for skylights, roof ventilators, and other eco-friendly building components tailored to project requirements.",
        "provider": {
            "@id": "https://eco.ph/#organization"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Philippines"
        },
        "serviceType": "Custom Fabrication and Manufacturing",
        "url": "https://eco.ph/custom-manufacturing"
        }

    ]
    }
    </script>

</head>

<body <?= $disableLenis ? 'data-disable-lenis="true"' : '' ?>>
    <div class="full-img" id="full-img-box">
        <img src="" alt="" id="full-img">
        <span onclick="closeFullImg()">✖</span>

        <div class="imgFull-btn-group">
            <span class="imgFull-btn prev" onclick="showPrevImg()">❮</span>
            <span class="imgFull-btn next" onclick="showNextImg()">❯</span>
        </div>
    </div> 
    <?php require 'section/component/header.php' ?>

    

    <?php include $content; ?>

    <?php require 'section/footer.php' ?>
 
    <script src="<?= asset('script/scroll-speed.js') ?>" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/bundled/lenis.min.js" defer></script>
    <script src="<?= asset('script/scroll-smooth.js') ?>" defer></script>
    <script src="<?= asset('script/change-background.js') ?>" defer></script>
    <script src="<?= asset('script/reveal-animation.js') ?>" defer></script>
    <script src="<?= asset('script/component/header.js') ?>" defer></script>
    <script src="<?= asset('script/global.js') ?>" defer></script>
    <script src="<?= asset('script/component/ventilator-product.js') ?>" defer></script>
    <script src="<?= asset('script/component/card-2.js') ?>" defer></script>
    
    <script src="<?= asset('script/component/news-update-card.js') ?>" defer></script>
    <script src="<?= asset('script/component/card-small-1.js') ?>" defer></script>
    <script src="<?= asset('script/component/prod-category-card.js') ?>" defer></script>
    <script src="<?= asset('script/about-history.js') ?>" defer></script>
    <script src="<?= asset('script/faq.js') ?>" defer></script>
    
    <script src="<?= asset('script/skylight-component-sidebar.js') ?>" defer></script>
    
    <script src="<?= asset('script/attic-card.js') ?>" defer></script>
    <script src="<?= asset('script/gvs-table.js') ?>" defer></script>
    <script src="<?= asset('script/component/img-gallery.js') ?>" defer></script>
    <script src="<?= asset('script/component/eco-blog.js') ?>" defer></script>

    <script src="<?= asset('script/data/testimonial-card-data.js') ?>" defer></script>
    <script src="<?= asset('script/testimonial-card.js') ?>" defer></script>

    <script type="module" src="<?= asset('script/js-history-timeline.js') ?>" defer></script>
    <script src="<?= asset('script/case-study-carousel.js') ?>" defer></script>
    <script type="module" src="<?= asset('script/download.js') ?>" defer></script>
    <script src="<?= asset('script/js-hero-banner-parallax.js') ?>" defer></script>

    <script src="<?= asset('script/ajax-contact.js') ?>" defer></script>
    <script src="<?= asset('script/send_message.js') ?>" defer></script>
    <script src="<?= asset('script/countCompanyYears.js') ?>" defer></script>

    <script>
        function openChat() {
            const botChat = document.querySelector('.botChat');
            const botButton = document.querySelector('.botChatContainer button');

            botChat.classList.toggle('active');

            if (botChat.classList.contains('active')) {
                botButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
                </svg>`;
            } else {
                botButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8.5 10a1.5 2 0 1 0 0 4a1.5 2 0 1 0 0-4m7 0a1.5 2 0 1 0 0 4a1.5 2 0 1 0 0-4M8 16h8v2H8z"/>
                    <path fill="currentColor" d="M21 11V8c0-1.1-.9-2-2-2h-6V4.61c.3-.27.5-.67.5-1.11c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .44.2.84.5 1.11V6H5c-1.1 0-2 .9-2 2v3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1M5 20V8h14v12z"/>
                </svg>`;
            }
        }
        
    </script>
</body>

</html>