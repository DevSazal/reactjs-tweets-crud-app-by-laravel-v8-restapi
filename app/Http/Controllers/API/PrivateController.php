<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator; // validator class for rules

// To Make Tweet
use App\Models\Tweet;
use App\Models\User;
use Auth;

class PrivateController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }


    public function trashedTweet()
    {
      // code... listed onlyTrashed tweets for admin
      if(Auth::user()->role > 0){
        return $result = Tweet::onlyTrashed()->get();
      }

      return ["result" => "Sorry, You don't have permission for making this action!"];
    }


    public function restoreTweet($id)
    {
      // code... restore onlyTrashed tweet by admin
      if(Auth::user()->role > 0){
        $result = Tweet::withTrashed()->where('id', $id)->restore();
        return ["result" => "The tweet has been restored."];
      }

      return ["result" => "Sorry, You don't have permission for making this action!"];
    }


}
