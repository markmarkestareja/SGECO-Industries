const contactForm2 = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formResponse = document.querySelector('.form-response');

if(contactForm2 && submitBtn && formResponse){
  contactForm2.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formResponse.textContent = '';

    const formData = new FormData(contactForm2);

    fetch('send_message.php', { // points to your PHPMailer PHP script
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      formResponse.textContent = data;
      formResponse.style.color = data.includes('successfully') ? '#10D24F' : '#f14444';
      contactForm2.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';

      setTimeout(() => {
        formResponse.textContent = '';
      }, 5000);
    })
    .catch(err => {
      formResponse.textContent = 'Oops! Something went wrong.';
      formResponse.style.color = 'red';
      console.error(err);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  });
}