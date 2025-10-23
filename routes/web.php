<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormSubmissionController;

// ==========================================
// Core Routes
// Do not edit the contents of these file
require __DIR__ . '/core.php';
//
// ==========================================


// landing route
// Route::get('/', function () {
//     return redirect()->route('welcome');
// });

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::post('/contact-submission', [FormSubmissionController::class, 'storeContact'])->name('contact.store');
Route::post('/reservation-submission', [FormSubmissionController::class, 'storeReservation'])->name('reservation.store');


//test route
Route::get('/test-audit-middleware', function () {
    return response()->json([
        'message' => 'Audit middleware test',
        'timestamp' => now(),
        'user' => auth()->user?->email ?? 'guest',
        'middleware_active' => 'yes'
    ]);
});


Route::get('test', function () {
    return Inertia::render('test');
})->name('admin.test');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');