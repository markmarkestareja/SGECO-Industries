const add_reveals_li = document.querySelectorAll('.timeline li');

const observerAddReveal_li = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('add_reveal_li');
        } 
        else {
            entry.target.classList.remove('add_reveal_li');
        }
    });
}, {
    threshold:0.3
});

add_reveals_li.forEach(add_reveal_li => observerAddReveal_li.observe(add_reveal_li));