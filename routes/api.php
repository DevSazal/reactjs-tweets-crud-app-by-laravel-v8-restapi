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
Route::post('/login', [API\AuthController::class, 'loginUser']); // for mobile app 

Route::group(['middleware'=>'auth:sanctum'], function(){
  // All Secure API URL
  // Route::get('/tweet/{id?}', [API\TweetController::class, 'getTweetAPI']);
  // Route::post('/tweet-store', [API\TweetController::class, 'storeTweet']);
  Route::get('/u/{username?}', [API\TweetController::class, 'getTweetByUsernameAPI']); // change route url for Conflict problem
  Route::put('/tweet-update/{id}', [API\TweetController::class, 'updateTweetPutAPI']);
  Route::delete('/tweet-delete/{id}', [API\TweetController::class, 'deleteTweet']);

  // Trashed Tweets & Recovery for Admin
  Route::get('/tweet-trashed', [API\PrivateController::class, 'trashedTweet']);
  Route::get('/tweet-restore/{id}', [API\PrivateController::class, 'restoreTweet'])->where('id', '[0-9]+');
});

Route::get('/tweet/{id?}', [API\TweetController::class, 'getTweetAPI'])->middleware('auth:sanctum');
Route::post('/tweet-store', [API\TweetController::class, 'storeTweet'])->middleware('auth:sanctum');
