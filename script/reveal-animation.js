const add_reveals = document.querySelectorAll('.add-reveal');

const observerAddReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('reveal');
        } 
        // else {
        //     entry.target.classList.remove('reveal');
        // }
    });
}, {
    threshold:0.3
});

add_reveals.forEach(add_reveal => observerAddReveal.observe(add_reveal));





