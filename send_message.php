<?php
session_start();
require 'vendor/autoload.php'; // Composer autoloader

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if(!empty($_POST['SGECO_ILUVYO143']) || time() - $_POST['form_time'] < 3){
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

    // OPTIONAL: regenerate token after use (more secure)
    unset($_SESSION['csrf_token']);

    $name    = htmlspecialchars($_POST['fullname']);
    $emailRaw = $_POST['email'];
    $email = filter_var($emailRaw, FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars($_POST['contact_number']);
    $city    = htmlspecialchars($_POST['city']);
    $country = htmlspecialchars($_POST['country']);
    $message = htmlspecialchars($_POST['message']);

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
        $mail->SMTPSecure = 'tls'; // or 'ssl'
        $mail->Port       = 587;   // 465 for SSL                                                                    

        // Sender & recipient
        $mail->setFrom($_ENV['EMAIL_USER'], 'Website Contact Form');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('markmarkestareja.me@gmail.com', 'SG Eco Industries');

        // Email content
        $mail->isHTML(false);
        $mail->Subject = "New Contact Form Message from $name";
        $mail->Body    = "                  
Name: $name
Email: $email
Phone: $phone
City: $city
Country: $country
Message: $message
";

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

} else {
    echo "Invalid request";
}
