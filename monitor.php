<?php

/**
 * Multi-Website Uptime Monitor with Discord Webhook Alerts
 *
 * Can be run via CLI, cPanel Cron Job, or GitHub Actions.
 * Features:
 * - Monitors multiple websites simultaneously
 * - Tracks state (up/down) to avoid spamming alerts on every run
 * - Sends rich Discord embed notifications on DOWN and RECOVERY events
 * - Measures response time (latency)
 */

declare(strict_types=1);

// ==========================================
// CONFIGURATION
// ==========================================

// Your Discord Webhook URL (or set environment variable DISCORD_WEBHOOK_URL)
$discordWebhookUrl = getenv('DISCORD_WEBHOOK_URL') ?: 'https://discord.com/api/webhooks/1557672530431705198/8XvwErqWGqPlhRnrRS34HnByxUR-ftUug-9KX-4tIDMVlLZ6IKqpc9R4U8ciiEnecZ2f';

// List of websites to monitor
$websites = [
    [
        'name' => "Sabrina's Restaurant",
        'url'  => 'https://sabrinas.algowrite.com/', // Replace with your actual deployed URL
        'timeout' => 10,                 // Request timeout in seconds
    ],    
];

// File used to track previous status so you only get alerts on state change
$stateFile = __DIR__ . '/uptime_state.json';

// ==========================================
// MONITORING ENGINE
// ==========================================

// Load previous state
$state = [];
if (file_exists($stateFile)) {
    $content = file_get_contents($stateFile);
    if ($content !== false) {
        $state = json_decode($content, true) ?: [];
    }
}

$updatedState = $state;

foreach ($websites as $site) {
    $name = $site['name'];
    $url = $site['url'];
    $timeout = $site['timeout'] ?? 10;
    $key = md5($url);

    $previousStatus = $state[$key]['status'] ?? 'unknown';

    // Perform check
    $result = checkWebsite($url, $timeout);
    $currentStatus = $result['is_up'] ? 'up' : 'down';

    echo sprintf(
        "[%s] Checking %s (%s)... Status: %s (HTTP %s, %sms)\n",
        date('Y-m-d H:i:s'),
        $name,
        $url,
        strtoupper($currentStatus),
        $result['http_code'] ?: 'ERR',
        round($result['total_time'] * 1000)
    );

    // Alert logic:
    // 1. Site went DOWN
    // 2. Site was DOWN and has RECOVERED (UP)
    if ($currentStatus === 'down' && $previousStatus !== 'down') {
        echo " -> Sending DOWN alert to Discord...\n";
        sendDiscordAlert($discordWebhookUrl, [
            'type'        => 'down',
            'name'        => $name,
            'url'         => $url,
            'http_code'   => $result['http_code'],
            'error'       => $result['error'],
            'total_time'  => $result['total_time'],
        ]);
    } elseif ($currentStatus === 'up' && $previousStatus === 'down') {
        echo " -> Sending RECOVERY alert to Discord...\n";
        sendDiscordAlert($discordWebhookUrl, [
            'type'        => 'recovered',
            'name'        => $name,
            'url'         => $url,
            'http_code'   => $result['http_code'],
            'total_time'  => $result['total_time'],
            'downtime_since' => $state[$key]['last_down_at'] ?? null,
        ]);
    }

    // Update state record
    $updatedState[$key] = [
        'name'        => $name,
        'url'         => $url,
        'status'      => $currentStatus,
        'last_checked' => time(),
        'last_down_at' => ($currentStatus === 'down')
            ? ($state[$key]['last_down_at'] ?? time())
            : null,
    ];
}

// Save updated state
file_put_contents($stateFile, json_encode($updatedState, JSON_PRETTY_PRINT));
echo "Finished uptime check.\n";

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function checkWebsite(string $url, int $timeout): array
{
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL            => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER         => false,
        CURLOPT_NOBODY         => true, // HEAD request for faster execution
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS      => 5,
        CURLOPT_TIMEOUT        => $timeout,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
        CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; UptimeMonitor/1.0)',
    ]);

    $start = microtime(true);
    curl_exec($ch);
    $totalTime = microtime(true) - $start;

    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    $curlErrno = curl_errno($ch);
    curl_close($ch);

    // If HEAD request fails with 405 Method Not Allowed, fallback to GET
    if ($httpCode === 405) {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER         => false,
            CURLOPT_NOBODY         => false,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_RANGE          => '0-100', // only fetch first 100 bytes
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; UptimeMonitor/1.0)',
        ]);
        $start = microtime(true);
        curl_exec($ch);
        $totalTime = microtime(true) - $start;
        $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        $curlErrno = curl_errno($ch);
        curl_close($ch);
    }

    $isUp = ($curlErrno === 0) && ($httpCode >= 200 && $httpCode < 400);

    return [
        'is_up'      => $isUp,
        'http_code'  => $httpCode,
        'total_time' => $totalTime,
        'error'      => $curlError ?: ($isUp ? '' : "HTTP response code $httpCode"),
    ];
}

function sendDiscordAlert(string $webhookUrl, array $data): void
{
    if (empty($webhookUrl) || $webhookUrl === 'https://discord.com/api/webhooks/1557672530431705198/8XvwErqWGqPlhRnrRS34HnByxUR-ftUug-9KX-4tIDMVlLZ6IKqpc9R4U8ciiEnecZ2f') {
        echo " [WARNING] Discord webhook URL is not configured.\n";
        return;
    }

    $isDown = ($data['type'] === 'down');
    $color = $isDown ? 0xE74C3C : 0x2ECC71; // Red : Green
    $title = $isDown ? "🚨 WEBSITE DOWN: {$data['name']}" : "✅ RECOVERED: {$data['name']}";
    $responseTimeMs = round($data['total_time'] * 1000);

    $fields = [
        [
            'name'   => 'Website URL',
            'value'  => $data['url'],
            'inline' => false,
        ],
        [
            'name'   => 'HTTP Status',
            'value'  => $data['http_code'] > 0 ? (string) $data['http_code'] : 'Connection Failed',
            'inline' => true,
        ],
        [
            'name'   => 'Response Time',
            'value'  => "{$responseTimeMs} ms",
            'inline' => true,
        ],
    ];

    if ($isDown && !empty($data['error'])) {
        $fields[] = [
            'name'   => 'Error Details',
            'value'  => "```{$data['error']}```",
            'inline' => false,
        ];
    }

    if (!$isDown && !empty($data['downtime_since'])) {
        $downDuration = time() - $data['downtime_since'];
        $minutes = round($downDuration / 60);
        $fields[] = [
            'name'   => 'Approx. Downtime',
            'value'  => "{$minutes} minute(s)",
            'inline' => true,
        ];
    }

    $payload = [
        'username' => 'Uptime Monitor Bot',
        'avatar_url' => 'https://cdn-icons-png.flaticon.com/512/3588/3588294.png',
        'embeds' => [
            [
                'title'       => $title,
                'color'       => $color,
                'fields'      => $fields,
                'timestamp'   => date('c'),
                'footer'      => [
                    'text' => 'Multi-Site Uptime Monitor',
                ],
            ],
        ],
    ];

    $ch = curl_init($webhookUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
    ]);
    curl_exec($ch);
    curl_close($ch);
}
