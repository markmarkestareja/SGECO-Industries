const fullImgBox = document.getElementById("full-img-box");
const fullImg = document.getElementById("full-img");
const fullImgClass = document.querySelector(".full-img");

// Full Image Open
function openFullImg(pic) {
    fullImg.src = pic;
    fullImgBox.classList.add("show");
    fullImgClass.style.height = "100vh";

    headerNav.style.display = "none";

    document.body.style.overflow = "hidden";
    if (window.lenis) lenis.stop();
}

// Full Image Close
function closeFullImg() {
    fullImgBox.classList.remove("show");
    fullImgClass.style.height = "0";

    setTimeout(() => {
        headerNav.style.display = "block";
        document.body.style.overflow = "auto";
        if (window.lenis) lenis.start();
    }, 350);
}



// ------------------------------------
// GALLERY SYSTEM
// ------------------------------------
const galleryBasePath = "asset/img/resources-menu/gallery/";
const galleryFolders = {
    residential: "skylight-residential/",
    industrial: "skylight-industrial/",
    gvs: "gvs/",
    gvw: "gvw/",
    hatchway: "hatchway/"
};

const galleryData = {
    residential: [
        "Bathroom 2.jpg",
        "Bathroom 3.jpg",
        "C-Orb2 (sml).jpg",
        "Couple on sofa copy.jpg",
        "Dining sml.jpg",
        "Hallway.jpg",
        "Les Walk In Robe.jpg",
        "Suntrenz - 05.jpg",
        "Suntrenz - 06.jpg",
        "Suntrenz - After.jpg",
        "Tile - 01.jpg",
        "VL Open Kitchen.jpg"
    ],

    industrial: [
        "After - Pulu Amsic (Sml).jpg",
        "APF - 03.jpg",
        "APF - 05.jpg",
        "Art Centre (Sml).jpg",
        "Avanti - 02.jpg",
        "CO-01.jpg",
        "CO-03.jpg",
        "Factory 1.jpg",
        "Jotun (sml).jpg",
        "Jumbo Jenra - 03.jpg",
        "Lucena Bus Terminal.jpg",
        "Office Toilets.jpg",
        "SG Eco Factory 2.jpg",
        "SG Eco Factory 3.jpg"
    ],

    gvs: [
        "GVS - Panel Adjust.jpg",
        "GVS - Panel Swivel.jpg",
        "In the Roof 4.jpg",
        "GVS x 3.jpg",
        "GVS - 01.jpg"
    ],

    gvw: [
        "GVW - 09.jpg",
        "GVW - Hamilton 2.jpg",
        "GVW - Hamilton 1.jpg",
        "GVW - 07.jpg",
        "GV - SG Eco.jpg",
        "GVW - 04.jpg",
        "IMG_9891.jpg",
        "IMG_9890.jpg",
        "GVW - 06.jpg",
        "AGA - Peoples Air Cargo.jpg",
        "SG ECO - 02.jpg",
        "SG ECO - 01.jpg"
    ],

    hatchway: [
        "Hatch - Climbing 2.jpg",
        "Hatch - Climbing out.jpg",
        "Hatch & Ladder.jpg",
        "81996270_662524937850068_2353140378783186944_n.jpg",
        "83027098_3295719483776868_7159180453402902528_n.jpg",
        "IMG-b51698b48f216cb39cf8684b1d99c931-V.jpg",
        "IMG-d09d36844db663ba514e0d30090b5808-V.jpg"
    ]
};



// Create Image Card
function createGalleryImgCard(src, containerSelector) {
    const galleryImgCard = document.createElement("div");
    galleryImgCard.classList.add("gallery-img-card");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "gallery image";
    img.onclick = () => openFullImg(src);

    galleryImgCard.appendChild(img);
    document.querySelector(containerSelector).appendChild(galleryImgCard);
}



// Load Gallery by Category
function loadGallery(category, containerSelector) {
    const folder = galleryFolders[category];

    galleryData[category].forEach(fileName => {
        createGalleryImgCard(
            galleryBasePath + folder + fileName,
            containerSelector
        );
    });
}



// Load Image gallery
loadGallery("residential", "#residential-gallery");
loadGallery("industrial", "#industrial-gallery");
loadGallery("gvs", "#gvs-gallery");
loadGallery("gvw", "#gvw-gallery");
loadGallery("hatchway", "#hatchway-gallery");
