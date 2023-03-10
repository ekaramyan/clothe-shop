<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('product', App\Http\Controllers\ProductController::class);

Route::apiResource('category', App\Http\Controllers\CategoryController::class);

Route::apiResource('order', App\Http\Controllers\OrderController::class);

Route::apiResource('favorite', App\Http\Controllers\FavoriteController::class);

Route::apiResource('basket', App\Http\Controllers\BasketController::class);
