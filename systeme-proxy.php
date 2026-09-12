<?php
header('Access-Control-Allow-Origin: https://nebulaestudio.com.mx');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data       = json_decode(file_get_contents('php://input'), true);
$api_key    = '3hg51b0lzjf4wc95afk9pcamip0i5oa78b2u4maeb1ykf5z8subr8i9fee1dp1be';
$email      = $data['email'] ?? '';
$firstName  = $data['firstName'] ?? '';
$tags       = $data['tags'] ?? [];
$empresa    = $data['empresa'] ?? '';
$telefono   = $data['telefono'] ?? '';
$proyecto   = $data['proyecto'] ?? '';
$budget     = $data['budget'] ?? '';
$servicios  = is_array($data['servicios'] ?? '') ? implode(', ', $data['servicios']) : ($data['servicios'] ?? '');
$fuente     = $data['fuente'] ?? '';

function sysRequest($method, $endpoint, $body = null, $api_key = '') {
    $ch = curl_init("https://api.systeme.io/api/{$endpoint}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'X-API-Key: ' . $api_key,
    ]);
    if ($body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    }
    $response = curl_exec($ch);
    $status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return ['status' => $status, 'body' => json_decode($response, true)];
}

// 1. Crear contacto
$createRes = sysRequest('POST', 'contacts', [
    'email'      => $email,
    'first_name' => $firstName,
    'locale'     => 'es',
], $api_key);

$contactId = null;

if ($createRes['status'] === 201) {
    $contactId = $createRes['body']['id'] ?? null;
} elseif ($createRes['status'] === 409) {
    // Contacto ya existe — obtener su ID
    $getRes = sysRequest('GET', 'contacts?email=' . urlencode($email), null, $api_key);
    $contactId = $getRes['body']['items'][0]['id'] ?? null;
}

// 2. Asignar tags al contacto
if ($contactId && !empty($tags)) {
    foreach ($tags as $tagName) {
        sysRequest('POST', "contacts/{$contactId}/tags", ['name' => $tagName], $api_key);
    }
}

// 3. Mandar correo a info@nebulaestudio.com.mx
$tagsList = implode(', ', $tags);
$subject  = "Nuevo contacto — {$firstName} ({$email})";
$body     = "Nuevo contacto desde nebulaestudio.com.mx\n\n"
          . "Nombre: {$firstName}\n"
          . "Email: {$email}\n"
          . "Empresa: {$empresa}\n"
          . "Teléfono: {$telefono}\n"
          . "Presupuesto: {$budget}\n"
          . "Servicios: {$servicios}\n"
          . "Fuente: {$fuente}\n"
          . "Origen (tag): {$tagsList}\n\n"
          . "Mensaje:\n{$proyecto}";

$headers  = "From: noreply@nebulaestudio.com.mx\r\n"
          . "Reply-To: {$email}\r\n"
          . "Content-Type: text/plain; charset=UTF-8\r\n";

mail('info@nebulaestudio.com.mx', $subject, $body, $headers);

// Respuesta
$finalStatus = ($createRes['status'] === 201 || $createRes['status'] === 409) ? 200 : $createRes['status'];
http_response_code($finalStatus);
echo json_encode(['ok' => true, 'contactId' => $contactId, 'status' => $createRes['status']]);
