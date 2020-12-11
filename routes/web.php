<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/{path?}','app');

// API Login
Route::post('/login', [API\AuthController::class, 'loginSPA']);
Route::post('/logout', [API\AuthController::class, 'logoutSPA']);
