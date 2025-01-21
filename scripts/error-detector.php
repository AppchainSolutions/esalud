<?php
require __DIR__ . '/vendor/autoload.php'; // Cargar Composer

use GuzzleHttp\Client;
use Dotenv\Dotenv;

// Cargar variables de entorno
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Configuración
$websiteUrl = "https://tu-sitio-web.com";
$telegramToken = $_ENV['TELEGRAM_ERROR_DETECTION_TOKEN'];
$chatId = $_ENV['TELEGRAM_ERROR_DETECTION_CHAT_ID'];

// Crear cliente HTTP
$client = new Client();

try {
    // Realizar solicitud al sitio web
    $response = $client->request('GET', $websiteUrl);
    $httpCode = $response->getStatusCode();

    // Verificar códigos de error
    if ($httpCode >= 500) {
        $message = "⚠️ Error $httpCode detectado en el sitio web: $websiteUrl";
        sendTelegramNotification($telegramToken, $chatId, $message);
    } elseif ($httpCode == 404) {
        $message = "⚠️ Error 404 (Página no encontrada) en: $websiteUrl";
        sendTelegramNotification($telegramToken, $chatId, $message);
    } elseif ($httpCode == 403) {
        $message = "⚠️ Error 403 (Prohibido) en: $websiteUrl";
        sendTelegramNotification($telegramToken, $chatId, $message);
    } else {
        echo "✅ El sitio web está funcionando correctamente (HTTP $httpCode)\n";
    }
} catch (\Exception $e) {
    // Manejar errores de conexión o tiempo de espera
    $message = "⚠️ No se pudo conectar al sitio web: $websiteUrl. Error: " . $e->getMessage();
    sendTelegramNotification($telegramToken, $chatId, $message);
}

// Función para enviar notificaciones a Telegram
function sendTelegramNotification($token, $chatId, $message) {
    $client = new Client();
    $url = "https://api.telegram.org/bot$token/sendMessage";

    try {
        $client->post($url, [
            'form_params' => [
                'chat_id' => $chatId,
                'text' => $message
            ]
        ]);
    } catch (\Exception $e) {
        echo "Error al enviar notificación a Telegram: " . $e->getMessage() . "\n";
    }
}
?>