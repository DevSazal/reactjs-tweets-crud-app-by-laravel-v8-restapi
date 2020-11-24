<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Add API Directory
use App\Http\Controllers\API;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// API Login
Route::post('/login', [API\AuthController::class, 'loginUser']);

Route::group(['middleware'=>'auth:sanctum'], function(){
  // All Secure API URL
  Route::post('/tweet-store', [API\TweetController::class, 'storeTweet']);
});
