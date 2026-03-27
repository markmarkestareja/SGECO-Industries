<?php
session_start();
        
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$page = $_GET['page'] ?? 'home';

$page = preg_replace('/[^a-zA-Z0-9\-]/', '', $page);

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
        'home' => 'SGEco Industries delivers eco-friendly skylights, ventilators, and fabrication services—energy-efficient solutions for residential and industrial spaces.',
        'about' => 'Learn about SGEco Industries, our mission, vision, and commitment to sustainability and eco-friendly practices.',
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
        : htmlspecialchars(ucfirst($page)) . ' - SGEco Industries'
    ?>
    </title>

    <meta name="description" content="<?= $metaDescription ?>">

    <?php if ($is404): ?>
        <meta name="robots" content="noindex, follow">
    <?php else: ?>
        <link rel="canonical" href="https://www.eco.ph<?= $page === 'home' ? '/' : '/' . $page ?>">
    <?php endif; ?>

    <link rel="stylesheet" href="<?= asset('style/index.css') ?>">


    <meta property="og:title" content="<?= htmlspecialchars(ucfirst($page)) ?> - SGEco Industries">
    <meta property="og:description" content="<?= $metaDescription ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.eco.ph<?= $page === 'home' ? '/' : '/' . $page ?>">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta property="og:image" content="asset/img/logo/SG Eco Logo.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="SG Eco Industries Logo">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= htmlspecialchars(ucfirst($page)) ?> - SGEco Industries">
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
    
</head>

<body <?= $disableLenis ? 'data-disable-lenis="true"' : '' ?>>
    <div class="full-img" id="full-img-box">
        <img src="" onclick="openFullImg(this.src)" alt="" id="full-img">
        <span onclick="closeFullImg()">✖</span>
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
</body>

</html>