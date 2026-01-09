<?php
// ===== Error reporting & JSON header =====
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');

// ===== Load PHPMailer =====
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../PHPMailer/src/Exception.php';
require __DIR__ . '/../../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../../PHPMailer/src/SMTP.php';

// ===== Helper function =====
function clean($value) {
    return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
}

// ===== Validation =====
$required = ['fullname', 'email', 'contact_number', 'city', 'country', 'message'];
$errors = [];

foreach ($required as $field) {
    if (empty($_POST[$field])) {
        $errors[] = ucfirst(str_replace('_', ' ', $field)) . " is required.";
    }
}

// Validate email format
if (!empty($_POST['email']) && !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email address.";
}

// Return errors if any
if ($errors) {
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// ===== Sanitize inputs =====
$fullname = clean($_POST['fullname']);
$email = clean($_POST['email']);
$contact = clean($_POST['contact_number']);
$city = clean($_POST['city']);
$country = clean($_POST['country']);
$message = clean($_POST['message']);

// ===== PHPMailer setup =====
$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';         // or your SMTP host
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mark.estareja.me@gmail.com';   // your Gmail
    $mail->Password   = 'lkwyxuhnyvbsvkqp';     // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email settings
    $mail->setFrom('mark.estareja.me@gmail.com', 'SG Eco Industries');
    $mail->addAddress('mark.estareja.me@gmail.com');    // Receiving email
    $mail->addReplyTo($email, $fullname);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Inquiry';

    $mail->Body = "
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> {$fullname}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Contact:</strong> {$contact}</p>
        <p><strong>City:</strong> {$city}</p>
        <p><strong>Country:</strong> {$country}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->AltBody = "
Name: $fullname
Email: $email
Contact: $contact
City: $city
Country: $country

Message:
$message
    ";

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us. We’ll get back to you as soon as possible.'
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo
    ]);
}
