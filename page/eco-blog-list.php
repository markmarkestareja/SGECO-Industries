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
    'The-Benefits-of-Installing-Skylights-in-Your-Property' => 'The-Benefits-of-Installing-Skylights-in-Your-Property.php',
    '3-Energy-Efficiency-Myths-Debunked' => '3-Energy-Efficiency-Myths-Debunked.php',
    'Green-Energy-is-Scotlands-Leading-Source-of-Power' => 'Green-Energy-is-Scotlands-Leading-Source-of-Power.php',
    'Farms-Small-Businesses-Eligible-for-More-Renewable-Energy-Assistance' => 'Farms-Small-Businesses-Eligible-for-More-Renewable-Energy-Assistance.php',
    'Families-Warm-to-Solar-Power-Rising-energy-bills-mean-60-percent-of-households-are-now-considering-installing-panels' => 'Families-Warm-to-Solar-Power-Rising-energy-bills-mean-60-percent-of-households-are-now-considering-installing-panels.php',
    'Department-of-Labor-and-Employment-issues-NEW-guidelines-on-ventilation-for-workspaces' => 'Department-of-Labor-and-Employment-issues-NEW-guidelines-on-ventilation-for-workspaces.php',
    'December-Hailed-as-Record-Output-Month-for-Wind-Power-in-Scotland' => 'December-Hailed-as-Record-Output-Month-for-Wind-Power-in-Scotland.php',
    'Data-shows-efficient-energy-saved-250m' => 'Data-shows-efficient-energy-saved-250m.php',
    'Customized-Sky-Tunnel-for-NZ-Project' => 'Customized-Sky-Tunnel-for-NZ-Project.php',
    'Chinas-Renewable-Energy-Use-Ranks-Top-in-the-World' => 'Chinas-Renewable-Energy-Use-Ranks-Top-in-the-World.php',
    'Cheap-Solar-lamps-help-villagers-keep-their-health-and-cut-emissions' => 'Cheap-Solar-lamps-help-villagers-keep-their-health-and-cut-emissions.php',
    'Boom-time-for-renewable-energy-in-Asia' => 'Boom-time-for-renewable-energy-in-Asia.php',
    'A-New-Green-Wave' => 'A-New-Green-Wave.php',
    'Alarm-bells-as-greenhouse-gases-hit-new-high-un' => 'Alarm-bells-as-greenhouse-gases-hit-new-high-un.php',
    'Africas-Largest-Solar-Farm-Comes-Online' => 'Africas-Largest-Solar-Farm-Comes-Online.php',
    'Access-Hatchways-The-Safer-Way-to-Access-Rooftops' => 'Access-Hatchways-The-Safer-Way-to-Access-Rooftops.php',
    'Why-the-Smart-Money-is-looking-at-Clean-Energy-in-Asia' => 'Why-the-Smart-Money-is-looking-at-Clean-Energy-in-Asia.php',
    'UK-on-Track-to-Meet-its-Renewable-Energy-Targets' => 'UK-on-Track-to-Meet-its-Renewable-Energy-Targets.php',
    'Solar-Wind-Power-to-Become-Cheapest-In-Asia-Scientists' => 'Solar-Wind-Power-to-Become-Cheapest-In-Asia-Scientists.php',
    'Questions-to-Consider-Before-Installing-Skylights-in-Your-House-or-Workspace' => 'Questions-to-Consider-Before-Installing-Skylights-in-Your-House-or-Workspace.php',
    'New-Report-Links-Office-Design-with-Staff-Health-and-Productivity' => 'New-Report-Links-Office-Design-with-Staff-Health-and-Productivity.php',
    'Lack-of-Natural-Light-Causing-Officers-Emotional-Suffering' => 'Lack-of-Natural-Light-Causing-Officers-Emotional-Suffering.php',
    'Investment-in-Australian-Renewables-Declining' => 'Investment-in-Australian-Renewables-Declining.php',
    'Employees-without-Natural-Light-are-More-Stressed' => 'Employees-without-Natural-Light-are-More-Stressed.php',
];

if (array_key_exists($ecoBlog, $allowedEcoBlog)) {
    include 'section/eco-blog-list/' . $allowedEcoBlog[$ecoBlog];
} else {
    include 'section/eco-blog-list/Why-Should-you-Choose-SG-ECO-Products.php';
}
?>
</main>
