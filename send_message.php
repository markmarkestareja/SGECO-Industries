<?php
session_start();
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

header('Content-Type: application/json');

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

/* =========================
   CONFIG
========================= */
$RATE_LIMIT_FILE = __DIR__ . '/rate_limit.json';
$MAX_REQUESTS = 5;              // max submissions
$TIME_WINDOW = 600;            // 10 minutes
$MIN_TIME = 3;                 // anti-bot minimum seconds
$MAX_TIME = 3600;              // 1 hour max validity

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

/* =========================
   RATE LIMIT (IP BASED)
========================= */
$rateData = file_exists($RATE_LIMIT_FILE)
    ? json_decode(file_get_contents($RATE_LIMIT_FILE), true)
    : [];

$now = time();

if (!isset($rateData[$ip])) {
    $rateData[$ip] = [];
}

// remove old entries
$rateData[$ip] = array_filter($rateData[$ip], function ($t) use ($now, $TIME_WINDOW) {
    return ($now - $t) < $TIME_WINDOW;
});

// check limit
if (count($rateData[$ip]) >= $MAX_REQUESTS) {
    echo "Too many requests. Try again later.";
    exit;
}

/* =========================
   VALID REQUEST CHECK
========================= */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Invalid request";
    exit;
}

/* =========================
   BOT CHECKS
========================= */
if (
    !empty($_POST['SGECO_ILUVYO143']) || // honeypot
    !isset($_POST['form_time'])
) {
    exit;
}

$formTime = (int)$_POST['form_time'];
$timeDiff = $now - $formTime;

if ($timeDiff < $MIN_TIME || $timeDiff > $MAX_TIME) {
    exit;
}

/* =========================
   CSRF CHECK
========================= */
if (
    !isset($_POST['csrf_token'], $_SESSION['csrf_token']) ||
    !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])
) {
    echo "CSRF validation failed";
    exit;
}

/* =========================
   INPUT SANITIZATION
========================= */
$name    = trim($_POST['fullname'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['contact_number'] ?? '');
$city    = trim($_POST['city'] ?? '');
$country = trim($_POST['country'] ?? '');
$message = trim($_POST['message'] ?? '');

/* =========================
   LENGTH VALIDATION
========================= */
if (
    strlen($name) < 2 || strlen($name) > 100 ||
    strlen($message) < 5 || strlen($message) > 2000
) {
    echo "Invalid input length";
    exit;
}

/* =========================
   EMAIL VALIDATION
========================= */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email";
    exit;
}

/* =========================
   SPAM FILTER (BASIC)
========================= */
$spamPatterns = [
    '/https?:\/\//i',   // URLs
    '/www\./i',
    '/\bviagra\b/i',
    '/\bcasino\b/i',
    '/\bloan\b/i'
];

foreach ($spamPatterns as $pattern) {
    if (preg_match($pattern, $message)) {
        exit;
    }
}

/* =========================
   SANITIZE OUTPUT
========================= */
$name    = htmlspecialchars($name);
$email   = htmlspecialchars($email);
$phone   = htmlspecialchars($phone);
$city    = htmlspecialchars($city);
$country = htmlspecialchars($country);
$message = htmlspecialchars($message);

/* =========================
   SMTP EMAIL
========================= */
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['EMAIL_USER'];
    $mail->Password   = $_ENV['EMAIL_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->Timeout = 10;

    $mail->setFrom($_ENV['EMAIL_USER'], 'Website Contact Form');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('markmarkestareja.me@gmail.com', 'SG Eco Industries');

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    $mail->Subject = "New Website Inquiry from $name";

    $mail->Body = "
    <div style='font-family:Arial;background:#f4f6f8;padding:20px'>
      <div style='max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px'>

        <h2 style='color:#008843'>New Inquiry</h2>

        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>City:</b> $city</p>
        <p><b>Country:</b> $country</p>

        <hr>

        <p><b>Message:</b></p>
        <div style='background:#f9f9f9;padding:10px;border-left:4px solid #008843'>
          $message
        </div>

      </div>
    </div>";

    $mail->send();

    /* =========================
       UPDATE RATE LIMIT LOG
    ========================= */
    $rateData[$ip][] = $now;
    file_put_contents($RATE_LIMIT_FILE, json_encode($rateData));

    echo "Message sent successfully";

} catch (Exception $e) {
    echo "Failed to send message";
}