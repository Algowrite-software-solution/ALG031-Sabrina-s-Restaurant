<?php

/**
 * Multi-Website Uptime Monitor with Discord Webhook Alerts
 *
 * Supports:
 * 1. Immediate alerts when any site goes DOWN or RECOVERS (ran every 5 mins).
 * 2. Daily Summary Report sent once per day.
 * 3. Manual check via CLI or GitHub Actions (`php monitor.php --report` or `php monitor.php --manual`).
 */

declare(strict_types=1);

// ==========================================
// Your Discord Webhook URL (reads from GitHub Secrets or environment variable)
$discordWebhookUrl = getenv('DISCORD_WEBHOOK_URL') ?: 'YOUR_DISCORD_WEBHOOK_URL_HERE';

$websites = [
    [
        'name'    => "ALG031-Sabrina's Restaurant",
        'url'     => 'https://sabrinas.algowrite.com/',
        'timeout' => 10,
    ],
    [
        'name'    => "ALG034-South Coast Maritime Group",
        'url'     => 'https://southcoastmaritimegroup.com/',
        'timeout' => 10,
    ],
    [
        'name'    => "ALG037-KWB Marine",
        'url'     => 'https://kwbmarine.com/',
        'timeout' => 10,
    ],
    [
        'name'    => "ALG038-Serentti Enterprise",
        'url'     => 'https://serenttienterprises.com/',
        'timeout' => 10,
    ],
    [
        'name'    => "ALG040-Acushnet Offshore System",
        'url'     => 'https://acushnetoffshore.com/',
        'timeout' => 10,
    ],
];

$stateFile = __DIR__ . '/uptime_state.json';

// CLI Options / Environment flags:
// --report : Force send a full status report right now
// --manual : Flag indicating manual user execution
$isManualReport = in_array('--report', $argv, true) || in_array('--manual', $argv, true) || getenv('FORCE_REPORT') === 'true';

// ==========================================
// MONITORING ENGINE
// ==========================================

$state = [];
if (file_exists($stateFile)) {
    $content = file_get_contents($stateFile);
    if ($content !== false) {
        $state = json_decode($content, true) ?: [];
    }
}

$updatedState = $state;
$allResults = [];
$todayDateStr = date('Y-m-d');
$lastDailyReport = $state['__meta']['last_daily_report'] ?? '';

// Check if we should send the daily report (e.g. once per day around 09:00 UTC, or if it hasn't run today yet)
$shouldSendDailyReport = ($lastDailyReport !== $todayDateStr);

foreach ($websites as $site) {
    $name = $site['name'];
    $url = $site['url'];
    $timeout = $site['timeout'] ?? 10;
    $key = md5($url);

    $previousStatus = $state[$key]['status'] ?? 'unknown';

    // Perform HTTP check
    $result = checkWebsite($url, $timeout);
    $currentStatus = $result['is_up'] ? 'up' : 'down';

    $siteSummary = [
        'name'       => $name,
        'url'        => $url,
        'status'     => $currentStatus,
        'http_code'  => $result['http_code'],
        'error'      => $result['error'],
        'total_time' => $result['total_time'],
    ];
    $allResults[] = $siteSummary;

    echo sprintf(
        "[%s] Checking %s (%s)... Status: %s (HTTP %s, %sms)\n",
        date('Y-m-d H:i:s'),
        $name,
        $url,
        strtoupper($currentStatus),
        $result['http_code'] ?: 'ERR',
        round($result['total_time'] * 1000)
    );

    // 1. Immediate Alert on DOWN
    if ($currentStatus === 'down' && $previousStatus !== 'down') {
        echo " -> Sending IMMEDIATE DOWN alert to Discord...\n";
        sendDiscordAlert($discordWebhookUrl, [
            'type'       => 'down',
            'name'       => $name,
            'url'        => $url,
            'http_code'  => $result['http_code'],
            'error'      => $result['error'],
            'total_time' => $result['total_time'],
        ]);
    }
    // 2. Immediate Alert on RECOVERY
    elseif ($currentStatus === 'up' && $previousStatus === 'down') {
        echo " -> Sending IMMEDIATE RECOVERY alert to Discord...\n";
        sendDiscordAlert($discordWebhookUrl, [
            'type'           => 'recovered',
            'name'           => $name,
            'url'            => $url,
            'http_code'      => $result['http_code'],
            'total_time'     => $result['total_time'],
            'downtime_since' => $state[$key]['last_down_at'] ?? null,
        ]);
    }

    // Update site state
    $updatedState[$key] = [
        'name'         => $name,
        'url'          => $url,
        'status'       => $currentStatus,
        'last_checked' => time(),
        'last_down_at' => ($currentStatus === 'down')
            ? ($state[$key]['last_down_at'] ?? time())
            : null,
    ];
}

// 3. Send Comprehensive Status Report (Manual or Daily)
if ($isManualReport) {
    echo " -> Sending MANUALLY REQUESTED Status Report to Discord...\n";
    sendDiscordSummaryReport($discordWebhookUrl, $allResults, "📋 Live Status Report (Requested Manually)");
} elseif ($shouldSendDailyReport) {
    echo " -> Sending DAILY Summary Report to Discord...\n";
    sendDiscordSummaryReport($discordWebhookUrl, $allResults, "📊 Daily Website Status Report (" . date('M j, Y') . ")");
    $updatedState['__meta']['last_daily_report'] = $todayDateStr;
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
        CURLOPT_NOBODY         => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS      => 5,
        CURLOPT_TIMEOUT        => $timeout,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
        CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; UptimeMonitor/2.0)',
    ]);

    $start = microtime(true);
    curl_exec($ch);
    $totalTime = microtime(true) - $start;

    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    $curlErrno = curl_errno($ch);
    curl_close($ch);

    // Fallback if HEAD is blocked (405 Method Not Allowed)
    if ($httpCode === 405) {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER         => false,
            CURLOPT_NOBODY         => false,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_RANGE          => '0-100',
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; UptimeMonitor/2.0)',
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
    if (empty($webhookUrl) || $webhookUrl === 'YOUR_DISCORD_WEBHOOK_URL_HERE') {
        echo " [WARNING] Discord webhook URL is not configured.\n";
        return;
    }

    $isDown = ($data['type'] === 'down');
    $color = $isDown ? 0xE74C3C : 0x2ECC71;
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
        'username'   => 'Uptime Monitor Bot',
        'avatar_url' => 'https://cdn-icons-png.flaticon.com/512/3588/3588294.png',
        'embeds'     => [
            [
                'title'     => $title,
                'color'     => $color,
                'fields'    => $fields,
                'timestamp' => date('c'),
                'footer'    => [
                    'text' => 'Immediate Alert System',
                ],
            ],
        ],
    ];

    postToDiscord($webhookUrl, $payload);
}

function sendDiscordSummaryReport(string $webhookUrl, array $results, string $reportTitle): void
{
    if (empty($webhookUrl) || $webhookUrl === 'YOUR_DISCORD_WEBHOOK_URL_HERE') {
        return;
    }

    $allUp = true;
    $fields = [];

    foreach ($results as $res) {
        $isSiteUp = ($res['status'] === 'up');
        if (!$isSiteUp) {
            $allUp = false;
        }

        $icon = $isSiteUp ? '🟢' : '🔴';
        $statusText = $isSiteUp ? 'ONLINE' : 'OFFLINE';
        $responseTimeMs = round($res['total_time'] * 1000);
        $code = $res['http_code'] > 0 ? (string)$res['http_code'] : 'ERR';

        $fieldValue = "[Link]({$res['url']})\nStatus: **{$icon} {$statusText}** (`HTTP {$code}`, `{$responseTimeMs}ms`)";
        if (!$isSiteUp && !empty($res['error'])) {
            $fieldValue .= "\nError: `{$res['error']}`";
        }

        $fields[] = [
            'name'   => $res['name'],
            'value'  => $fieldValue,
            'inline' => false,
        ];
    }

    $color = $allUp ? 0x2ECC71 : 0xE67E22; // Green if all good, Orange if any is down
    $description = $allUp
        ? "✅ **All systems are operational!** All websites are responding normally."
        : "⚠️ **Attention:** One or more websites are currently experiencing issues.";

    $payload = [
        'username'   => 'Uptime Monitor Bot',
        'avatar_url' => 'https://cdn-icons-png.flaticon.com/512/3588/3588294.png',
        'embeds'     => [
            [
                'title'       => $reportTitle,
                'description' => $description,
                'color'       => $color,
                'fields'      => $fields,
                'timestamp'   => date('c'),
                'footer'      => [
                    'text' => 'Multi-Site Monitoring Summary',
                ],
            ],
        ],
    ];

    postToDiscord($webhookUrl, $payload);
}

function postToDiscord(string $webhookUrl, array $payload): void
{
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
