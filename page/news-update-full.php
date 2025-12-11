<main>
    <?php 
    $news = $_GET['news'] ?? '1';

    $allowed = [
        '1' => 'news-update-content-1.php',
        '2' => 'news-update-content-2.php',
        '3' => 'news-update-content-3.php',
        '4' => 'news-update-content-4.php',
        '5' => 'news-update-content-5.php',
    ];

    if (array_key_exists($news, $allowed)){
        include 'section/news-update-content/' . $allowed[$news];
    }
    else {
        include 'section/news-update-content/news-update-content-1.php';
    }
     ?>
</main>