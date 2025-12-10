<?php
$page = $_GET['page'] ?? 'home';
$file = __DIR__ . "/page/$page.php";

if (file_exists(filename: $file)) {
    $content = $file;
} else {
    $content = __DIR__ . "/page/404.php";
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= ucfirst($page) ?> - SGEco Industries</title>

    <link rel="stylesheet" href="style/index.css">
</head>

<body>
    <div class="full-img" id="full-img-box">
        <img src="Memories 0.jpg" onclick="openFullImg(this.src)" alt="" id="full-img">
        <span onclick="closeFullImg()">✖</span>
    </div>
    <?php require 'section/component/header.php' ?>

    <?php include $content; ?>

    <script src="script/scroll-speed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/bundled/lenis.min.js"></script>
    <script src="script/scroll-smooth.js"></script>
    <script src="script/change-background.js"></script>
    <script src="script/reveal-animation.js"></script>
    <script src="script/component/header.js"></script>
    <script src="script/component/ventilator-product.js"></script>
    <script src="script/component/card-2.js"></script>
    <script src="script/component/news-update-card.js"></script>
    <script src="script/component/card-small-1.js"></script>
    <script src="script/component/prod-category-card.js"></script>
    <script src="script/about-history.js"></script>
    <script src="script/faq.js"></script>
    <script src="script/calculator.js"></script>
    <script src="script/skylight-component-sidebar.js"></script>
    <script src="script/attic-card.js"></script>
    <script src="script/gvs-table.js"></script>
    <script src="script/component/img-gallery.js"></script>
    <script src="script/component/eco-blog.js"></script>


    <script src="script/data/testimonial-card-data.js"></script>
    <script src="script/testimonial-card.js"></script>

</body>

</html>