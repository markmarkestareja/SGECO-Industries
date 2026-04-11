<?php
$prod = $_GET['prod'] ?? '';
?>

<section class="skylight-component">
        <div class="skylight-component-sidebar product-service-component-sidebar">
                <div class="btn-collapse-container">
                        <img class="btn-collapse-crescent" src="asset/img/skylight-component/crescent.svg" alt="">
                        <img class="btn-collapse btn-collapse-arrow" src="asset/img/skylight-component/arrow.svg"
                                alt="">
                </div>
                <div class="skylight-component-sidebar-inner product-service">
                        <ul>
                                <li class="product-service-li-title">SKYLIGHT</li>
                                <li><a href="page/product-info/attic.php#attic"
                                                class="<?= $prod === 'attic' ? 'active' : '' ?>">Attic</a></li>
                                <li><a href="page/product-info/roof.php"
                                                class="<?= $prod === 'roof' ? 'active' : '' ?>">Roof</a></li>
                                <li><a href="page/product-info/accessories.php"
                                                class="<?= $prod === 'accessories' ? 'active' : '' ?>">Accessories</a>
                                </li>

                                <li class="product-service-li-title">VENTILATOR</li>
                                <li><a href="page/product-info/gvw.php"
                                                class="<?= $prod === 'gvw' ? 'active' : '' ?>">Green-Vent Wind Driven
                                                Ventilator</a></li>
                                <li><a href="page/product-info/gvs.php"
                                                class="<?= $prod === 'gvs' ? 'active' : '' ?>">Green-Vent Solar</a></li>
                                <li><a href="page/product-info/whirlwind.php"
                                                class="<?= $prod === 'whirlwind' ? 'active' : '' ?>">Whirlwind Roof
                                                Ventilator</a></li>
                                <li><a href="page/product-info/whirlwind-plus.php"
                                                class="<?= $prod === 'whirlwind-plus' ? 'active' : '' ?>">Whirlwind
                                                Plus</a></li>
                                <li><a href="page/product-info/eave-vent.php"
                                                class="<?= $prod === 'eave-vent' ? 'active' : '' ?>">Under Eave Vent</a>
                                </li>
                                <li><a href="page/product-info/ducting-kit.php"
                                                class="<?= $prod === 'ducting-kit' ? 'active' : '' ?>">Ventilator
                                                Ducting Kit</a></li>

                                <li class="product-service-li-title">CUSTOM MANUFACTURING</li>
                                <li><a href="page/product-info/hatchway.php"
                                                class="<?= $prod === 'hatchway' ? 'active' : '' ?>">Access Hatchways</a>
                                </li>
                                <li><a href="page/product-info/thermoforming.php"
                                                class="<?= $prod === 'thermoforming' ? 'active' : '' ?>">Thermoforming</a>
                                </li>
                                <li><a href="page/product-info/sheet-metal.php"
                                                class="<?= $prod === 'sheet-metal' ? 'active' : '' ?>">Sheet Metal
                                                Fabrication</a></li>
                                <li><a href="page/product-info/custom-skylight.php"
                                                class="<?= $prod === 'custom-skylight' ? 'active' : '' ?>">Custom Brand
                                                Skylights</a></li>
                        </ul>
                </div>
        </div>

        <div class="component-content" id="component-content">
                <?php
                $productFile = __DIR__ . "/../../page/product-info/" . ($prod ?: "attic") . ".php";

                if (file_exists($productFile)) {
                        include $productFile;
                } else {
                        echo "<p>Product not found.</p>";
                }
                ?>
        </div>
</section>