<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator; // validator class for rules

// To Make Tweet
use App\Models\Tweet;
use App\Models\User;
use Auth;

class TweetController extends Controller
{
    //
    public function getTweetAPI($id = NULL)
    {
      // code... all tweets or tweet listed by user_id
      return $id ? Tweet::where('id', $id)->get() : Tweet::all();
    }

    public function getTweetByUsernameAPI($username = NULL)
    {
      // code... tweet listed by username like profile
      if($username){
        $user = User::where('username', $username)->first();
        return $user->tweets;
      }else {
        // code... display all tweets
        return Tweet::all();
      }
    }

    public function storeTweet(Request $request)
    {
      // code...  API Validation
      $validator = Validator::make($request->all(), [
	        'message' => 'required|string|min:1|max:50',
	        'user_id' => 'required|integer'
	    ]);

	    //

  		if ($validator->fails()) {
          // return $validator->errors();
          return response()->json($validator->errors(), 401);
      }else {
        // code... if data valid
          $tweet = new Tweet;
          $tweet->message = $request->message;
          $tweet->user_id = $request->user_id;
          $result = $tweet->save();

          if($result){
            return ["result" => "Tweet has been posted."];
          }else{
            return ["result" => "Tweet Operation Failed!"];
          }
      }
    }

    public function updateTweetPutAPI(Request $request, $id)
    {
      // code...  API Validation
      $validator = Validator::make($request->all(), [
	        'message' => 'required|string|min:1|max:50'
	    ]);


  		if ($validator->fails()) {
          // return $validator->errors();
          return response()->json($validator->errors(), 401);
      }else {
        // code... if data valid
          $tweet = Tweet::find($id);
          $tweet->message = $request->message;
          $result = $tweet->save();

          if($result){
            return ["result" => "Tweet has been updated."];
          }else{
            return ["result" => "Tweet Update Operation Failed!"];
          }
      }
    }

    public function deleteTweet($id)
    {
      // code... softDeletes
        $tweet = Tweet::find($id);
        $result = $tweet->delete();

        if($result){
          return ["result" => "Tweet has been deleted."];
        }else{
          return ["result" => "Tweet Delete Operation Failed!"];
        }
    }


}
