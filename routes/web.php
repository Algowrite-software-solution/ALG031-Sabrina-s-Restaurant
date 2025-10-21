<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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