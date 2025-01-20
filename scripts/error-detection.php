<?php
require __DIR__ . '/vendor/autoload.php'; // Load Composer's autoloader

use Dotenv\Dotenv;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Get variables from .env
$telegramToken = $_ENV['TELEGRAM_TOKEN'];
$chatId = $_ENV['TELEGRAM_CHAT_ID'];

// URL of the website to monitor
$websiteUrl = "https://vulco.appchain.solutions";

// Make an HTTP request to the website
$response = @file_get_contents($websiteUrl);
$httpCode = null;

if ($http_response_header) {
    foreach ($http_response_header as $header) {
        if (preg_match('/HTTP\/\d\.\d\s(\d+)/', $header, $matches)) {
            $httpCode = intval($matches[1]);
            break;
        }
    }
}

// Check for errors
if ($httpCode >= 500) {
    $message = "⚠️ Error $httpCode detected on the website: $websiteUrl";
} elseif ($httpCode == 404) {
    $message = "⚠️ Error 404 (Page not found) on: $websiteUrl";
} elseif ($httpCode == 403) {
    $message = "⚠️ Error 403 (Forbidden) on: $websiteUrl";
} else {
    $message = null; // No notification if no errors
}

// Send notification to Telegram if there's a message
if ($message) {
    $telegramApiUrl = "https://api.telegram.org/bot$telegramToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ],
    ];
    $context  = stream_context_create($options);
    file_get_contents($telegramApiUrl, false, $context);
}
?>