<?php
session_start();
require 'vendor/autoload.php'; // Composer autoloader

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $formType = $_POST['form_type'] ?? 'general';

    if (
        !empty($_POST['SGECO_ILUVYO143']) ||
        !isset($_POST['form_time']) ||
        time() - (int)$_POST['form_time'] < 3
    ) {
        exit;
    }

    // Check if token exists
    if (!isset($_POST['csrf_token'], $_SESSION['csrf_token'])) {
        echo "Invalid request (CSRF)";
        exit;
    }

    // Verify token
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
        echo "Invalid request (CSRF mismatch)";
        exit;
    }

    $name    = htmlspecialchars($_POST['fullname']);
    $emailRaw = $_POST['email'];
    $email   = filter_var($emailRaw, FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars($_POST['contact_number']);
    $city    = htmlspecialchars($_POST['city']);
    $country = htmlspecialchars($_POST['country']);
    $message = htmlspecialchars($_POST['message']);
    $interest = $_POST['interest'] ?? '';
    $businessType = $_POST['businessTypeName'] ?? '';

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Invalid Email Address!";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // e.g., smtp.gmail.com
        $mail->SMTPAuth   = true;
        $mail->Username = $_ENV['EMAIL_USER'];
        $mail->Password = $_ENV['EMAIL_PASS'];        
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;   // 465 for SSL        
        
        $mail->Timeout = 10;
        $mail->SMTPKeepAlive = true;
        $mail->SMTPDebug = 0; // change to 2 for debugging

        // Sender & recipient
        $mail->setFrom($_ENV['EMAIL_USER'], 'Website Contact Form');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('markmarkestareja.me@gmail.com', 'SG Eco Industries');

        // Email content
        $mail->isHTML(true);
        
        if($formType === 'distributor') {
            $mail->Subject = "New Distributor Inquiry from $name";
            $mail->Body    = "                  
<div style='font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;'>
  <div style='max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);'>
    
    <!-- Header -->
    <div style='background:#008843; color:#ffffff; padding:15px 20px;'>
      <h2 style='margin:0;'>📩 New Distributor Inquiry</h2>
    </div>

    <!-- Content -->
    <div style='padding:20px; color:#333;'>
      
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
      <p><strong>Phone:</strong> $phone</p>
      <p><strong>City:</strong> $city</p>
      <p><strong>Country:</strong> $country</p>
      <p><strong>Interest:</strong> $interest</p>
      <p><strong>Business Type:</strong> $businessType</p>

      <hr style='margin:20px 0;'>

      <p><strong>Message:</strong></p>
      <div style='background:#f9f9f9; padding:15px; border-left:4px solid #008843; border-radius:5px;'>
        $message
      </div>

    </div>

    <!-- Footer -->
    <div style='background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;'>
      This inquiry was sent from your website contact form.
    </div>

  </div>
</div>
";
        }
        else {
            $mail->Subject = "New Website Inquiry from $name";
            $mail->Body    = "                  
<div style='font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;'>
  <div style='max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);'>
    
    <!-- Header -->
    <div style='background:#008843; color:#ffffff; padding:15px 20px;'>
      <h2 style='margin:0;'>📩 New Distributor Inquiry</h2>
    </div>

    <!-- Content -->
    <div style='padding:20px; color:#333;'>
      
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
      <p><strong>Phone:</strong> $phone</p>
      <p><strong>City:</strong> $city</p>
      <p><strong>Country:</strong> $country</p>

      <hr style='margin:20px 0;'>

      <p><strong>Message:</strong></p>
      <div style='background:#f9f9f9; padding:15px; border-left:4px solid #008843; border-radius:5px;'>
        $message
      </div>

    </div>

    <!-- Footer -->
    <div style='background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;'>
      This inquiry was sent from SG Eco Industries website contact form.
    </div>

  </div>
</div>
";
        }

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Please try again later.";
    }

} else {
    echo "Invalid request";
}
