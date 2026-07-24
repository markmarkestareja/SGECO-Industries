// Latest Logo ISO

const logoISO = document.getElementById('logoISO');

logoISO.addEventListener('mouseenter', function() {
    // this.style.transform = 'scale(1.1)';
    const ISOVersion = document.getElementById("ISOVersion");
    ISOVersion.style.opacity = "1";
});

logoISO.addEventListener('mouseleave', function() {
    // this.style.transform = 'scale(1)';
    const ISOVersion = document.getElementById("ISOVersion");
    ISOVersion.style.opacity = "0";
})
