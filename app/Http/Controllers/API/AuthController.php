<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// To Make Authenticate User
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Sanctum login API
    public function loginUser(Request $request)
    {
        $user= User::where('username', $request->login)
                    ->orWhere('email', $request->login)
                    ->first();
        // match by username or email
        // print_r($data);

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }

            $token = $user->createToken('my-app-token')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201);
    }

    // Sanctum login for react SPA
    public function loginSPA(Request $request)
    {
      $email = User::where('username', $request->login)
                  ->orWhere('email', $request->login)
                  ->value('email');
      // match by username or email
      //....
      $credentials = [
      'email' => $email,
      'password' => $request->password,
      ];
      //$result = Auth::attempt($credentials);
      //....

        if (Auth::guard()->attempt($credentials)) {
            $request->session()->regenerate();

            // setcookie('SPA_is_user_logged_in', Auth::user()->id, [
            //     'expires' => time()+86400*30,
            //     'path' => '/',
            //     'domain' => NULL,
            //     'samesite' => 'lax',
            //     'secure' => NULL,
            //     'httponly' => TRUE,
            // ]);

            $response = [
                'uid' => Auth::user()->id,
                'name' => Auth::user()->name,
                'username' => Auth::user()->username,
                'email' => Auth::user()->email,
                'role_type' => Auth::user()->role_type,
                'ss' => $request->session()
            ];
            return response()->json($response, 201);
        }

        return response([
            'message' => ['These credentials do not match our records.']
        ], 401);

    }
    // Sanctum logout for react SPA
    public function logoutSPA(Request $request)
    {
        Auth::guard()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => ['Logout from laravel.']], 204);
    }


}
