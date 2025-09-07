<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoggerTestController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// FORM

Route::prefix('v1')->group(function () {

    // Admin
    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index']);
        Route::post('/', [AdminController::class, 'store']);
        Route::put('/', [AdminController::class, 'update']);
        Route::delete('/', [AdminController::class, 'destroy']);
    });



});





// 🧪 TESTING
Route::get('/auth-test', [TestController::class, 'index'])->middleware('web', 'auth:sanctum');
Route::get('/role-test', [TestController::class, 'roleTest'])->middleware('web', 'auth:sanctum', 'permission:manage_standard');
Route::get('/event-test', [TestController::class, 'testEvent'])->middleware('web', 'auth:sanctum');

// Test Laravel logging system
Route::get('/log-test', [LoggerTestController::class, 'test']);

Route::get('/test-audit-middleware', function () {
    return response()->json([
        'message' => 'Audit middleware test',
        'timestamp' => now(),
        'user' => auth()->user?->email ?? 'guest',
        'middleware_active' => 'yes'
    ]);
});