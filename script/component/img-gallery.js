let currentImageIndex = 0;
let currentImageCategory = "";

const fullImgBox = document.getElementById("full-img-box");
const fullImg = document.getElementById("full-img");
const fullImgClass = document.querySelector(".full-img");

const prevBtn10 = document.querySelector(".prev");
const nextBtn10 = document.querySelector(".next");

function updateNavButtons() {
    const images = galleryData[currentImageCategory];

    if(!prevBtn10 || !nextBtn10) return;
    
    // Disable PREV if at first image
    if (currentImageIndex === 0) {
        prevBtn10.classList.add("disabled");
    } else {
        prevBtn10.classList.remove("disabled");
    }

    // Disable NEXT if at last image
    if (currentImageIndex === images.length - 1) {
        nextBtn10.classList.add("disabled");
    } else {
        nextBtn10.classList.remove("disabled");
    }
}

// Full Image Open
function openFullImg(pic, index, category) {
    currentImageIndex = index;
    currentImageCategory = category;

    fullImg.src = pic;
    fullImgBox.classList.add("show");
    fullImgClass.style.height = "100vh";

    headerNav.style.display = "none";

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

function showPrevImg() {
    const images = galleryData[currentImageCategory];
    if(currentImageIndex > 0){
        currentImageIndex--;
        updateFullImg();
    }

    updateNavButtons();
}

function showNextImg() {
    const images = galleryData[currentImageCategory];
    
    if(currentImageIndex < images.length - 1){
        currentImageIndex++;

        updateFullImg();
    }

    updateNavButtons();
}

function updateFullImg(){
    const folder = galleryFolders[currentImageCategory];
    const fileName = galleryData[currentImageCategory][currentImageIndex];

    fullImg.src = galleryBasePath + folder + fileName;
    
    updateNavButtons();
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
        "Bathroom 2.webp",
        "Bathroom 3.webp",
        "C-Orb2 (sml).webp",
        "Couple on sofa copy.webp",
        "Dining sml.webp",
        "Hallway.webp",
        "Les Walk In Robe.webp",
        "Suntrenz - 05.webp",
        "Suntrenz - 06.webp",
        "Suntrenz - After.webp",
        "Tile - 01.webp",
        "VL Open Kitchen.webp"
    ],

    industrial: [
        "After - Pulu Amsic (Sml).webp",
        "APF - 03.webp",
        "APF - 05.webp",
        "Art Centre (Sml).webp",
        "Avanti - 02.webp",
        "CO-01.webp",
        "CO-03.webp",
        "Factory 1.webp",
        "Jotun (sml).webp",
        "Jumbo Jenra - 03.webp",
        "Lucena Bus Terminal.webp",
        "Office Toilets.webp",
        "SG Eco Factory 2.webp",
        "SG Eco Factory 3.webp"
    ],

    gvs: [
        "GVS - Panel Adjust.webp",
        "GVS - Panel Swivel.webp",
        "In the Roof 4.webp",
        "GVS x 3.webp",
        "GVS - 01.webp"
    ],

    gvw: [
        "GVW - 09.webp",
        "GVW - Hamilton 2.webp",
        "GVW - Hamilton 1.webp",
        "GVW - 07.webp",
        "GV - SG Eco.webp",
        "GVW - 04.webp",
        "IMG_9891.webp",
        "IMG_9890.webp",
        "GVW - 06.webp",
        "AGA - Peoples Air Cargo.webp",
        "SG ECO - 02.webp",
        "SG ECO - 01.webp"
    ],

    hatchway: [
        "Hatch - Climbing 2.webp",
        "Hatch - Climbing out.webp",
        "Hatch & Ladder.webp",
        "81996270_662524937850068_2353140378783186944_n.webp",
        "83027098_3295719483776868_7159180453402902528_n.webp",
        "IMG-b51698b48f216cb39cf8684b1d99c931-V.webp",
        "IMG-d09d36844db663ba514e0d30090b5808-V.webp"
    ]
};



// Create Image Card
function createGalleryImgCard(src, containerSelector, index, category) {
    const container = document.querySelector(containerSelector);
    if(!container) return;

    const galleryImgCard = document.createElement("div");
    galleryImgCard.classList.add("gallery-img-card");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "gallery image";
    img.onclick = () => openFullImg(src, index, category);

    galleryImgCard.appendChild(img);
    container.appendChild(galleryImgCard);
}

// Load Gallery by Category
function loadGallery(category, containerSelector) {
    const folder = galleryFolders[category];

    galleryData[category].forEach((fileName, index) => {
        createGalleryImgCard(
            galleryBasePath + folder + fileName,
            containerSelector,
            index,
            category
        );
    });
}

// Load Image gallery
loadGallery("residential", "#residential-gallery");
loadGallery("industrial", "#industrial-gallery");
loadGallery("gvs", "#gvs-gallery");
loadGallery("gvw", "#gvw-gallery");
loadGallery("hatchway", "#hatchway-gallery");   
