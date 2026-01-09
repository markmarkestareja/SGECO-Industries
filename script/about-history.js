const slides = document.querySelectorAll(".history-card");

const observerAbout = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

slides.forEach(slide => observerAbout.observe(slide));


