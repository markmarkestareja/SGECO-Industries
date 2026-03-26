<?php
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
        'home' => 'Welcome to SGEco Industries, your trusted partner in eco-friendly solutions and sustainable innovations.',
        'about' => 'Learn about SGEco Industries, our mission, vision, and commitment to sustainability and eco-friendly practices.',
        'products' => 'Explore SGEco Industries\' wide range of eco-friendly products designed for a sustainable future.',
        'services' => 'Discover the services offered by SGEco Industries to help you achieve your sustainability goals.',
        'contact' => 'Get in touch with SGEco Industries for inquiries, support, and more information about our offerings.',
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