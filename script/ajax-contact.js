document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const responseBox = form.querySelector('.form-response');
    const formData = new FormData(form);

    responseBox.textContent = "Sending...";
    responseBox.style.color = "#555";

    fetch("/SGECO-Industries/section/contact/contact-submit.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        responseBox.textContent = data.message;
        responseBox.style.color = data.success ? "#d4ffdcff" : "#ffb4b4";

        if (data.success) form.reset();
    })
    .catch(error => {
        responseBox.textContent = "Something went wrong. Please try again.";
        responseBox.style.color = "#ffb4b4";
        console.error(error);
    });
});
