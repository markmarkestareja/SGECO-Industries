<section class="contact-hero">
    <div class="contact-text">
        <h1>Distributor's Contact</h1>
        <p class="p-large">Become Our Distributor</p>
        <p>SG Eco industries is an innovative company that produces a wide variety of high quality and eco-friendly products. For over 22 years, SG Eco Industries continues to provide new ideas and products to bring sunlight into homes and buildings, we are looking for new and energetic distributors to grow with our company. You are most welcome to make contact with us through our distributors enquiry form to seek out this opportunity.  </p>
    </div>

    <div class="contact-container-form-map">
        <form method="POST" id="distributorForm" autocomplete="on">
            <input type="text" name="SGECO_ILUVYO143" style="position:absolute; left:-9999px;" tabindex="-1" autocomplete="off">

            <input type="hidden" name="form_time" value="<?php echo time(); ?>">

            <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

            <input type="hidden" name="form_type" value="distributor">

            <input type="text" name="fullname" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="contact_number" placeholder="Contact Number" required>
            <input type="text" name="city" placeholder="City" required>
            <input type="text" name="country" placeholder="Country" required>

            <select name="interest" required style="color: #777;">
                <option value disabled selected>Products/Services</option>
                <option value="Skylight">Skylight</option>
                <option value="Ventilator">Ventilator</option>
                <option value="CustomManufacturing">Custom Manufacturing</option>
            </select>

            <select name="businessTypeName" required style="color: #777;">
                <option value disabled selected>Business Type</option>
                <option value="Trade Reseller">Trade/Reseller</option>
                <option value="Builder Developer">Builder/Developer</option>
                <option value="Architect Designer">Architect/Designer</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Handy Man">Handy Man</option>
                <option value="Consumer">Consumer</option>
            </select>

            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit" class="btn-1">Send Message</button>

            <p class="form-response"></p>
        </form>

        <iframe
            class="contact-contributor-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8011306765848!2d120.57305177588105!3d15.169262462899995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2ab1f347729%3A0x4196377414761cf7!2sSG%20ECO%20Industries%20Inc.!5e0!3m2!1sen!2sph!4v1762927258889!5m2!1sen!2sph"
            width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>


<script>
const distributorForm = document.getElementById('distributorForm');
const responseBox = distributorForm.querySelector('.form-response');

distributorForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(distributorForm);

  fetch('send_message.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    responseBox.textContent = data;
    responseBox.style.color = data.includes('successfully') ? '#10D24F' : '#f14444';
    distributorForm.reset();

    setTimeout(() => {
      responseBox.textContent = '';
    }, 5000);
  })
  .catch(() => {
    responseBox.textContent = 'Something went wrong.';
  });
});
</script>