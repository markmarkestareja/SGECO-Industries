<main>
<?php 
$ecoBlog = $_GET['ecoBlog'] ?? 'Why-Should-you-Choose-SG-ECO-Products';

$allowedEcoBlog = [
    'Why-Should-you-Choose-SG-ECO-Products' => 'Why-Should-you-Choose-SG-ECO-Products.php',
    'SG-ECO-Industries-Premieres-Newly-Designed-Website' => 'SG-ECO-Industries-Premieres-Newly-Designed-Website.php',
    'Sky-Tunnel-Energy-Efficient-Skylight-Indoor-Lighting' => 'Sky-Tunnel-Energy-Efficient-Skylight-Indoor-Lighting.php',
    'How-SG-Eco-Ventilators-Promote-a-Better-Working-Environment-within-Commercial-Spaces' => 'How-SG-Eco-Ventilators-Promote-a-Better-Working-Environment-within-Commercial-Spaces.php',
    'Welcome-to-the-SG-Eco-Green-Construction-Blog' => 'Welcome-to-the-SG-Eco-Green-Construction-Blog.php',
    'Solve-Your-Ventilation-Issues-with-SG-Eco-Ventilators' => 'Solve-Your-Ventilation-Issues-with-SG-Eco-Ventilators.php',
    'Natural-Light-in-Offices-Boosts-Health' => 'Natural-Light-in-Offices-Boosts-Health.php',
    'The-Benefits-of-Installing-Skylights-in-Your-Property' => 'The-Benefits-of-Installing-Skylights-in-Your-Property.php'
];

if (array_key_exists($ecoBlog, $allowedEcoBlog)) {
    include 'section/eco-blog-list/' . $allowedEcoBlog[$ecoBlog];
} else {
    include 'section/eco-blog-list/Why-Should-you-Choose-SG-ECO-Products.php';
}
?>
</main>
