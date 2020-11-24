<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator; // validator class for rules

// To Make Tweet
use App\Models\Tweet;

class TweetController extends Controller
{
    //
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

    
}
