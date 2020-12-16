<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

// add user for Authenticate
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // add user and admin by Seeder
        DB::table('users')->insert([
          [
            'message' => 'I was a great party!',
            'user_id' => 1,
            'created_at' => '2020-12-10 19:16:40',
            'updated_at' => '2020-12-10 19:16:40'
          ],[
            'message' => 'one day I will be there #win',
            'user_id' => 2,
            'created_at' => '2020-12-13 19:16:40',
            'updated_at' => '2020-12-13 19:16:40'
          ],[
            'message' => 'let\'s do it',
            'user_id' => 1,
            'created_at' => '2020-12-13 19:16:40',
            'updated_at' => '2020-12-13 19:16:40'
          ]
        ]);
    }
}
